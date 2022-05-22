# login/views.py
from django.http import HttpResponse
from django.shortcuts import render, redirect
from .forms import loginForm, registerForm
from django.contrib import messages
from . import models
import datetime
import json


def login(request):
    if request.method == "POST":
        login_form = loginForm(request.POST)
        register_form = registerForm(request.POST)
        if login_form.is_valid():
            print("login")
            username = login_form.cleaned_data['username']
            password = login_form.cleaned_data['password']
            print(username)
            print(password)
            try:
                user = models.User.objects.get(username=username)
                if user:
                    if user.password == password:
                        return redirect(index)
                    else:
                        messages.error(request, '密码错误')
                        # return HttpResponse('密码错误')
            except:
                pass
                messages.error(request, '账号不存在')
            # return HttpResponse('账号不存在')
        elif register_form.is_valid():
            print("register")
            username = register_form.cleaned_data['username']
            password1 = register_form.cleaned_data['password1']
            password2 = register_form.cleaned_data['password2']
            print(username)
            print(password1)
            if password1 != password2:  # 判断两次密码是否相同
                messages.error(request, '两次输入密码不同!')
            else:
                same_name_user = models.User.objects.filter(username=username)
                if same_name_user:  # 用户名唯一
                    messages.error(request, '用户已经存在，请重新选择用户名！')

            new_user = models.User.objects.create()
            new_user.username = username
            new_user.password = password1
            new_user.save()
            return render(request, 'login.html')
    login_form = loginForm()
    register_form = registerForm()
    return render(request, 'login.html')


def index(request):
    # 得到日期 和对应的周几
    today = datetime.date.today()
    m = today.month
    d = today.day

    week = datetime.date(today.year, m, d).isoweekday()
    weeklist = [(week - 3) % 7, (week - 2) % 7, (week - 1) % 7, week, (week + 1) % 7, (week + 2) % 7, (week + 3) % 7]
    timelist = [str(m) + "." + str(d - 3), str(m) + "." + str(d - 2), str(m) + "." + str(d - 1), str(m) + "." + str(d),
                str(m) + "." + str(d + 1), str(m) + "." + str(d + 2), str(m) + "." + str(d + 3)]
    num = ['一', '二', '三', '四', '五', '六', '七']
    weekdatalist = []
    animlist = []
    for i in range(7):
        dic = {"time": timelist[i], "week": weeklist[i], "hanziweek": num[weeklist[i] - 1]}
        weekdatalist.append(dic)

    # 得到新番数据
    with open("xf.csv", "r") as f:
        for line in f:
            linedata = line.split(',')

            # 计算播出了多长时间
            d1 = datetime.datetime.strptime(linedata[2], '%Y/%m/%d').date()
            jishu = (today - d1).days % 7 + 1
            if jishu < 0:
                jishu = 0

            # 加入词典
            anim = {"name": linedata[0], "img": linedata[1], "jishu": jishu, "time": linedata[3],
                    "week": linedata[4].replace("\n", "")}
            animlist.append(anim)
    animlist.sort(key=lambda x: x['time'])
    # 得到所有的新番
    return render(request, 'index.html', {"week": weekdatalist, "anim": animlist})

