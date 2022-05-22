$(document).ready(function(){
    // 切换相关div
    $('body').on('click','a.a_nav_down',function(){
      var txt = $(this).children("p").text();
      console.log(txt);
      switchItem(txt);
    });

    $('body').on('click','a.a_nav_up',function(){
        var txt = $(this).children("div").children(".a_nav_up_p").text();
        console.log(txt);
        switchItem(txt);
      });

    // 点赞功能
    $('body').on('click','a.reply_zan',function(){
        paisebox(this);
    });
    // 点赞功能
    $('body').on('click','a.zan',function(){
        paisebox(this);
    });
    // 收藏功能
    $('body').on('click','a.article_like',function(){
        var shoucang = $(this).attr("shoucang");
        if(shoucang =="0"){
            $(this).children("img").attr("src","../icons/ai.png");
            $(this).attr("shoucang","1");
        }else if(shoucang=="1"){
            $(this).children("img").attr("src","../icons/ai_gray.png");
            $(this).attr("shoucang","0");
        }
    })
    // 删除功能
    $('body').on('click','a.close',function(){
        $(this).parents("li").fadeOut("1000");
    });
    // 删除回复
    $('body').on('click','a.reply_dele',function(){
        $(this).parents("div.reply").remove();
    });
    // 输入框样式更改
    operate_reply_text();
    operate_write_text();

    // 回复
    $('body').on('click','button.hf_btn',function(){
        reply(this);
    });
    
    // 点击回复图片改变textarea
    $('body').on('click','img.reply_dele',function(){
        var str = "回复："+ $(this).parents(".reply").find(".user").html();
        $(this).parents(".reply_list").find(".hf_text").val(str);
    });

    // 写文章
    $('body').on('click','button.write_btn',function(){
        writeArticle(this);
    })

    $(".a_nav_down").hover(function(){
        $(this).children().css("color","#588C9B")
        str = $(this).siblings("img").attr("src").replace('_gray', '');
        $(this).siblings("img").attr("src",str);
    },function(){
        $(this).children().css("color","#757575");
        tempstr = $(this).siblings("img").attr("src");
        strLength = tempstr.length;
        str = tempstr.slice(0,strLength-4)+"_gray"+tempstr.slice(strLength-4,strLength);
        $(this).siblings("img").attr("src",str);
    });

    $('body').on('click','.subscribe_button',function(){
        $(this).attr("class","subscribe_button_off");
        $(this).text("+关注");
    });
    $('body').on('click','.subscribe_button_off',function(){
        $(this).attr("class","subscribe_button");
        $(this).text("已关注");
    });

    $('body').on('click','.fans_button',function(){
        $(this).attr("class","subscribe_button_off");
        $(this).text("+关注");
    });
    $('body').on('click','.fans_button_off',function(){
        $(this).attr("class","subscribe_button");
        $(this).text("已回关");
    });
});

//   根据切换
function switchItem(tag){
    if(tag=='发现'){
        $("#subscribe").fadeOut()
        $("#articles").fadeOut()
        $("#like").fadeOut()
        $("#message").fadeOut()
        $("#fans").fadeOut()
        $("#find").fadeIn("2000");
     }
     else if(tag=='关注'){
        $("#find").fadeOut("500");
        $("#articles").fadeOut("500")
        $("#like").fadeOut("500")
        $("#message").fadeOut("500")
        $("#fans").fadeOut("500")
        $("#subscribe").fadeIn("2000")
     }
     else if(tag=='文章'){
        $("#find").fadeOut("500");
        $("#subscribe").fadeOut("500")
        $("#like").fadeOut("500")
        $("#message").fadeOut("500")
        $("#fans").fadeOut("500")
        $("#articles").fadeIn("2000")
     }
     else if(tag=='喜欢'){
        $("#find").fadeOut("500");
        $("#subscribe").fadeOut("500")
        $("#message").fadeOut("500")
        $("#fans").fadeOut("500")
        $("#articles").fadeOut("500")
        $("#like").fadeIn("2000")
    
     }
     else if(tag=='消息'){
        $("#find").fadeOut("500");
        $("#subscribe").fadeOut("500")
        $("#fans").fadeOut("500")
        $("#articles").fadeOut("500")
        $("#like").fadeOut("500")
        $("#message").fadeIn("2000")
      }

      else if(tag=='粉丝'){
        $("#find").fadeOut("500");
        $("#subscribe").fadeOut("500")
        $("#articles").fadeOut("500")
        $("#like").fadeOut("500")
        $("#message").fadeOut("500")
        $("#fans").fadeIn("2000")
        }
    }
    
// 文章的点赞 el为a
function paisebox(el){
    var img = el.children[0];
    console.log(img);
    var total = parseInt(el.getAttribute("total"));
    // 我是否点赞
    var my = parseInt(el.getAttribute("my"));
    var newtotal;
    // 我要点赞
    if(my==0){
        newtotal = total+1;
        el.setAttribute("total",newtotal);
        el.setAttribute("my",1);
        var html = '<img src="../icons/like_yes.png" alt="">&nbsp;'+newtotal
        el.innerHTML = html;
        }else{
            newtotal = total-1;
            el.setAttribute("total",newtotal);
            el.setAttribute("my",0);
            var html = '<img src="../icons/like.png" alt="">&nbsp;'+newtotal
            el.innerHTML = html;
        }
    }

// 输入框
function operate_reply_text(){
    // 输入框设置
    $("textarea.hf_text").focus(function(){
        // hf设置成hf_on
        this.parentNode.className='hf hf_on';
        this.value = this.value == '评论…' ? '' : this.value;
    });
    //失焦事件
    $("textarea.hf_text").blur(function(){
        if(this.value==''){
            this.parentNode.className='hf';
            this.value ='评论…';
            }						
    });
        //键盘事件
    $("textarea.hf_text").keyup(function(){
        var len=this.value.length;
        var textParentNode=this.parentNode;
        //button
        var textBtn=textParentNode.children[1];
        //0/100
        var textNub=textParentNode.children[2];
        if(len==0 /*|| len>100*/){
            textBtn.className="hf_btn";
        }else{
            textBtn.className="hf_btn hf_btn_on";
            /*this.style.color="#333";	*/			
            }
            textNub.innerHTML=len+"/100";
    });
}

function operate_write_text(){
    var write_textarea=document.getElementsByClassName("write_text")[0];
    var write_btn = document.getElementsByClassName("write_btn")[0];
    //焦点事件   
    $("textarea.write_text").focus(function(){
        // 点击
        // hf设置成hf_on
        this.parentNode.className='writebox write-on';
        this.value = '';
    });
    //失焦事件
    $("textarea.write_text").blur(function(){
        if(this.value==''){
            this.parentNode.className='writebox';
            this.value ='分享你的新鲜事~';
        }						
    });
    //键盘事件
    $("textarea.write_text").keyup(function(){
        var write_len=this.value.length;
        var write_textParentNode=this.parentNode;
        //button
        var write_textBtn=write_textParentNode.children[1];
        //0/100
        var write_textNub=write_textParentNode.children[2];
        if(write_len==0 /*|| len>100*/){
            write_textBtn.className="write_btn";
        }else{
            write_textBtn.className="write_btn write_btn_on";		
        }
            write_textNub.innerHTML=write_len+"/1000";
        });
    }

// 调取回复时间
function getTime(){
    var t=new Date();
    var y=t.getFullYear();
    var m=t.getMonth()+1;
    var d=t.getDate();
    var h=t.getHours();
    var mi=t.getMinutes();
    m=m<10?"0"+m:m;
    d=d<10?"0"+d:d;
    h=h<10?"0"+h:h;
    mi=mi<10?"0"+mi:mi;
    return y+"年 "+m+"月 "+d+"日 "+h+":"+mi;
}

// 回复评论
function reply(el){
    // 获取包含所有评论的容器
    // 得到textarea
    var comment = $(el).parents(".reply_list");
    var textarea = comment.find("textarea.hf_text");
    var hf = textarea.parent();
    var div = $("div.reply:first").clone(true);
    div.find(".user").html("Dudu： ");
    div.find(".reply_left img").attr("src","../touxiang_images/touxiang-3.jpg");
    div.find(".reply_content span:nth-child(2)").text(textarea.val());
    div.find(".reply_date span").text(getTime());
    div.find(".reply_dele").remove();
    div.find(".reply_zan").attr("total","0");
    div.find(".reply_zan").attr("my","0");
    div.find(".reply_zan span").text("0");
    div.find(".reply_zan img").attr("src","../icons/like.png")
    var a_dele = document.createElement("a");
    a_dele.className="reply_dele";
    a_dele.href="javascript:;";
    a_dele.text="删除";
    div.find(".reply_date").append(a_dele);
    hf.before(div);
    // 初始化textarea输入框
    textarea.val("评论…");
    textarea.parent().attr("class","hf");
}

// 写文章
function writeArticle(el){
    var articlelist = $("#articles ul.articlebox");
    var textarea = $(el).siblings("textarea");

    var tempdiv = $("li.an-article:first").clone(true);
    tempdiv.find(".reply").remove();
    tempdiv.find(".article_pic").remove();
    tempdiv.find(".article_head img").attr("src","../touxiang_images/touxiang-3.jpg");
    tempdiv.find(".article_name").html("Dudu：<br><br>");
    tempdiv.find(".article_text span:nth-child(2)").text(textarea.val());
    tempdiv.find(".zan").attr("total","0");
    tempdiv.find(".zan").attr("my","0");
    tempdiv.find(".zan span").text("0");
    tempdiv.find(".zan img").attr("src","../icons/like.png")
    console.log(tempdiv);
    tempdiv.find(".article_date").html(getTime());
    articlelist.prepend(tempdiv);
    textarea.val("分享你的新鲜事~");
    textarea.parent().attr("class","writebox");
}



 
    
        