$(document).ready(function(){

function onSearchSuggest(searchFuc,i)
{
    var input = $("#search"+i);
    var suggestWrap = $("#suggest_list"+i);
    var key = "";
    var init = function()
    {
        input.bind('keyup',sendKeyWord);
        input.bind('blur' , function(){
            setTimeout(hideSuggest,100);
        });
    }
    

 var hideSuggest = function()
    {
        suggestWrap.hide();
    }
//发送请求，根据关键字到后台查询
var sendKeyWord = function(event)
{
  //键盘选择下拉想
  if(suggestWrap.css("display")== 'block' && event.keyCode == 38 || event.keyCode == 40)
  {
    var current = suggestWrap.find('li.hover');
    if(event.keyCode == 38)
    {
        if(current.length>0)
        {
            var prevLi = current.removeClass('hover').prev();
            if(prevLi.length>0){
                prevLi.addClass('hover');
                input.val(prevLi.html());
            }
        }
        else
        {
            var last = suggestWrap.find('li:last');
            last.addClass("hover");
            input.val(last.html());
        }
    
    }else if (event.keyCode == 40) {
            if(current.length>0)
           {
                var nextLi = current.removeClass('hover').next();
                if(nextLi.length>0)
              {
                    nextLi.addClass('hover');
                    input.val(nextLi.html());
               }
           }else{
                   var first = suggestWrap.find('li:first');
                   first.addClass("hover");
                  input.val(nextLi.html());
                }
        }

   }
//输入字符
   else
   {
    var valTex = input.val().trim(); //去除两端空格
    if(valTex =='' || valTex == key)
    {
        return;
    }
    searchFuc(valTex);
    key = valTex;
   }
}

//请求返回后，执行数据显示
 this.dataDisplay = function(data,n)
 {
   
    if(data.length<=0)
    {
        suggestWrap.hide();
        return;
    }

    //往搜索框下拉建议显示栏中添加条目并显示

    var li;
    var tmpFrag = document.createDocumentFragment();
    suggestWrap.find('ul').html('');
    for(var i =0 ;i<data.length;i++)
    {
        li = document.createElement('LI');
        li.innerHTML = data[i];
        tmpFrag.appendChild(li);
    }
    suggestWrap.find('ul').append(tmpFrag);
    suggestWrap.show();

    //为下拉选项绑定鼠标事件
    suggestWrap.find('li').hover(function()
    {
        suggestWrap.find('li').removeClass('hover');
        $(this).addClass('hover');
    },function()
    {
        $(this).removeClass('hover');
    }).bind('click',function(){
        $("img#input_pic"+n).attr("src","../anim_images/"+$(this).text()+".png");
        console.log($(this).text());
        input.val($(this).text());
        suggestWrap.hide();
        if(n==3)
        {
            $("div#anim_area").empty();
            addAnimation($(this).text());
            showAnimation();
        }
    });

 }
  init();

};

var searchSuggest1 = new onSearchSuggest(sendKeyWordToBack1,1);
var searchSuggest2 = new onSearchSuggest(sendKeyWordToBack2,2);
var searchSuggest3 = new onSearchSuggest(sendKeyWordToBack3,3);

function sendKeyWordToBack1(keyword){
    var arr_all=["工作细胞","鬼灭之刃","伍六七之玄武国篇","灵笼","白沙的水族馆","小林家的龙女仆","86-不存在的战区-2期","妖狐×仆SS","我家有个狐仙大人","元气少女缘结神","极主夫道","海贼王女","两不疑"];
    var aData=[];
    var temparr=keyword.split("");
    var bool=1;
    for (var i =arr_all.length - 1; i >= 0; i--) {
        for (var j =temparr.length - 1; j>= 0; j--) {
          if(arr_all[i].indexOf(temparr[j])<0)
          {
            // console.log(arr_all[i].indexOf(temparr[j]));
            bool=0;
            break;
          } 
        }
        if(bool == 1)
        {
            
           aData.push(arr_all[i]); 
        }
     // console.log(bool);
     bool=1;
    }
  searchSuggest1.dataDisplay(aData,1);

}

function sendKeyWordToBack2(keyword){
    var arr_all=["工作细胞","鬼灭之刃","伍六七之玄武国篇","灵笼","白沙的水族馆","小林家的龙女仆","86-不存在的战区-2期","妖狐×仆SS","我家有个狐仙大人","元气少女缘结神","极主夫道","海贼王女","两不疑"];
    var aData=[];
    var temparr=keyword.split("");
    var bool=1;
    for (var i =arr_all.length - 1; i >= 0; i--) {
        for (var j =temparr.length - 1; j>= 0; j--) {
          if(arr_all[i].indexOf(temparr[j])<0)
          {
            // console.log(arr_all[i].indexOf(temparr[j]));
            bool=0;
            break;
          } 
        }
        if(bool == 1)
        {
            
           aData.push(arr_all[i]); 
        }
     // console.log(bool);
     bool=1;
    }
  searchSuggest2.dataDisplay(aData,2);

}

function sendKeyWordToBack3(keyword){
    var arr_all=["工作细胞","鬼灭之刃","伍六七之玄武国篇","灵笼","白沙的水族馆","小林家的龙女仆","86-不存在的战区-2期","妖狐×仆SS","我家有个狐仙大人","元气少女缘结神","极主夫道","海贼王女","两不疑"];
    var aData=[];
    var temparr=keyword.split("");
    var bool=1;
    for (var i =arr_all.length - 1; i >= 0; i--) {
        for (var j =temparr.length - 1; j>= 0; j--) {
          if(arr_all[i].indexOf(temparr[j])<0)
          {
            // console.log(arr_all[i].indexOf(temparr[j]));
            bool=0;
            break;
          } 
        }
        if(bool == 1)
        {
            
           aData.push(arr_all[i]); 
        }
     // console.log(bool);
     bool=1;
    }
  searchSuggest3.dataDisplay(aData,3);

}



$("#search_btn").click(function()
{
  var data=[["两不疑","宫斗","搞笑"],
         ["伍六七之玄武国篇","热血","动作"],
         ["一人之下","动作","热血"],
         ["86-不存在的战区-2期","爱情","剧情"],
         ["元气少女缘结神","爱情","妖怪"],
         ["妖狐×仆SS","爱情","妖怪"],
         ["时光代理人","科幻","动作"],
         ["灵笼","动作","热血"],
         ["小林家的龙女仆","爱情","搞笑"],
         ["白沙的水族馆","爱情","治愈"],
         ["工作细胞","科普","动作"],
         ["鬼灭之刃","热血","动作"],
         ["我家有个狐仙大人","爱情","科幻"],
         ["狐妖小红娘","搞笑","妖怪"],
         ["十万个冷笑话","搞怪","动作"],
         ["海贼王女","爱情","治愈"],
         ["滑头鬼之孙","治愈","妖怪"],
         ["极主道夫","爱情","搞笑"],

        ];

   var input1=$("#search1").val();
   var input2=$("#search2").val();
   var n1=-1;
   var n2=-1;
   var temp= new Array();
   for (var i =17; i >= 0; i--) {
      if(data[i][0] == input1)
      {
        n1=i;
        break;
      }
   }

     for (var i =17; i >= 0; i--) {
      if(data[i][0] == input2)
      {
        n2=i;
        break;
      }
   }
   
   for(var i = 1 ; i<3 ; i++)
   {
    temp.push(data[n1][i]);
    temp.push(data[n2][i]);
   }
   console.log(temp);

   $("div#searchResult").empty();
   for(var i=0; i<17 ;i++)
   {
    if(i!=n1 && i!=n2)
    {
         for(var j = 1 ; j < 3 ;j++)
      {
        if($.inArray(data[i][j],temp)>=0)
        {
          addAnimations(i,data[i][0]);
          showAnimation();
          break;
        }
      }
    }
   
   }





});
     function addAnimations(i,aniName)
   {
      var deleteTrimName = aniName.replace(/\s*/g,"");
      var divs = new Array(1000);
      divs[i]=$("<div></div>").attr("class","animation");
      divs[i].attr("id",deleteTrimName);
      $("div#searchResult").append(divs[i]);
      var a1=$("<a></a>").attr("href","#");
      a1.attr("class","ani"+i);
      $("#"+deleteTrimName).append(a1);
      var img1=$("<img>").attr("src","../anim_images/"+aniName+".png");
      img1.attr("class","picture")
      var txt=$("<p></p>").text(aniName);
      txt.attr("class","anim_text");
      $("a.ani"+i).append(img1,txt);
   }

      function showAnimation()
   {
    // $(".animation").css("visibility","visible");
    $(".fanju").css("visibility","visible");
    $(".xian").css("visibility","visible");
    $("#Re-Content").css("height","auto");
    $(".animation").fadeIn();
    $("div").animate({marginTop:"10px"});
    // $(".search_input").animate({height:"40px"});
    // $(".search_button").animate({height:"40px"});
   }

});

 function addAnimation(aniName)
   {
        
      // $(".xian").css("visibility","hidden");
      var div1=$("<div></div>").attr("class","animation");
      div1.attr("id",aniName);
      $("div#anim_area").append(div1);
      var a1=$("<a></a>").attr("href","#");
      a1.attr("class","ani");
      $("#"+aniName).append(a1);
      var img1=$("<img>").attr("src","../anim_images/"+aniName+".png");
      img1.attr("class","picture")
      var txt=$("<p></p>").text(aniName);
      txt.attr("class","anim_text");
      $("a.ani").append(img1,txt)
   }