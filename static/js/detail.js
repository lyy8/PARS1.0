$(document).ready(function(){
// 打开窗口
	$("div.comment_add").click(function()
	{
	    $("#cover").css("display","block");
		$("#writeComment").css("display","block");

	});


// 关闭弹窗
    $(".dialogClose").click(function()
    {
        $("#cover").css("display","none");
		$("#writeComment").css("display","none");
    });
//五角星变亮
$(function () {
            var wjx_s = "★";
            var wjx_k = "☆";
            //1. 给所有的li注册mouseenter事件
            $("#rate_wrap ul li").mouseenter(function () {
                //2. 让当前li和前面所有的li变成实心,让后面所有的兄弟变成空心
                //前面兄弟：prevAll()：
                //后面兄弟：nextAll()：
                $(this).text(wjx_s).prevAll().text(wjx_s);
                $(this).nextAll(wjx_k);
            });
            //2. 离开ul的时候，把所有的li变成空心
            $("#rate_wrap ul ").mouseleave(function () {
            	$(this).children().text(wjx_k);
                //如果我知道了我刚刚点了那个五角星
                //可以让点的那个五角星以及前面的兄弟变成实心就可以。
                //4. 找到我点击的那个li
                $("li.current").text(wjx_s).prevAll().text(wjx_s);
            });
            //3. 给所有的li注册点击事件，点击的时候，留下点东西(class)
            $("#rate_wrap ul li").click(function () {
            	 
                $(this).addClass("current").siblings().removeClass("current");

            });
        });

// 发送评论
var n=0;
$("#send").click(function(){
	n=n+1;
   var shortView = $("#short-view").val();
   addViews(shortView,n);
   $("#short-view").val("");
   $("#conform").css("display","block");
   $("#conform").fadeOut("slow");
  
   // alert("评论发表成功~")； 
});
 

 function addViews(shortView,i)
 {
 	var names=["章鱼小丸子","铁板烧","hotpot","叶子"];
 	var divs = new Array();
 	divs.push("0");
    div = $("<div></div>").attr("class","comment_large");
    divs.push(div);
    $(".comment").append(divs[i]);
    divs[i].attr("id","comment"+i);
    divs[i].html($("div#comment").html());
    $("#comment"+i).find(".touxiang_large").attr("src","../touxiang_images/touxiang-3.jpg");
    $("#comment"+i).find(".comment_name_large").text(names[i]);
    $("#comment"+i).find(".comment_text").text(shortView);  
    $("#comment"+i).find(".comment_operare_text").text(time());
    $("#comment"+i).find(".txt1").text("0"); 
    $("#comment"+i).find(".like").attr("id","comment-like"+i);
    $("#comment"+i).find(".txt1").attr("id","num"+i);


 }
 

   function time() {
		var date = new Date();
		var n = date.getFullYear();
		var y = date.getMonth()+1;
		var t = date.getDate();
		var h = date.getHours();
		var m = date.getMinutes();
		var s = date.getSeconds();

		var time = n+"-"+y+"-"+t+" "+h+":"+m;
        return time;
		
		// $('.sj span').eq(0).html(n);
		// $('.sj span').eq(1).html(y);
		// $('.sj span').eq(2).html(t);
		// $('.sj span').eq(3).html(h);
		// $('.sj span').eq(4).html(m);
		// $('.sj span').eq(5).html(s);
		// for (var i = 0; i < $('div').length; i++) {
		// 	if ($('div').eq(i).text().length == 1) {
		// 		$('div').eq(i).html(function(index, html) {
		// 			return 0 + html;
		// 		});
		// 	}
		// }
	}
    
    $(function()
    {
    	var address ="";
       $("body").on("mouseover", ".like", function() {

    	   address = "";
           $(this).animate({height:"22px",width:"22px"},"fast");
           address = $(this).attr("id");
        });

     $("body").on("mouseleave", ".like", function() 
     { 
       $(this).animate({height:"20px",width:"20px"},"fast");
    	
    });
      
      $("body").on("mouseover", ".unlike", function() {
        $(this).animate({height:"22px",width:"22px"});
    	console.log("23");
       });

        $("body").on("mouseleave", ".unlike", function() 
      {
        $(this).animate({height:"20px",width:"20px"},"fast");
    	
      });
    

     $("body").on("click", ".like", function() {
          $("#"+address).attr("src","../icons/good-g.png");
          var old_num=$("#"+address).siblings(".txt1").text();
          var new_num=parseInt(old_num)+1;
          $("#"+address).siblings(".txt1").text(new_num);
        
       });

    });
   

});