$(document).ready(function(){
   $("button.search_button").click(function()
   {
   	var arr=["工作细胞","鬼灭之刃","伍六七之玄武国篇","灵笼","白沙的水族馆","小林家的龙女仆","86-不存在的战区-2期","妖狐×仆SS","我家有个狐仙大人","元气少女缘结神","极主夫道","海贼王女"];
   	$("p.fanju").css("visibility","visible");
    $("div#anim_area").empty();
	var search_input = $("input.search3").val();
    console.log(search_input);
	var n=0;
	for (var i = arr.length - 1; i >= 0; i--) {
		if(search_input == arr[i])
		{  
			addAnimation(search_input);
			showAnimation();
			n=1;
			break;
		}
	}
	if(n==0)
		{
          doNotHaveSource();
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
     function addAnimations(i,aniName)
   {
      var deleteTrimName = aniName.replace(/\s*/g,"");
      var divs = new Array(1000);
      divs[i]=$("<div></div>").attr("class","animation");
      divs[i].attr("id",deleteTrimName);
      $("div#anim_area").append(divs[i]);
      var a1=$("<a></a>").attr("href","#");
      a1.attr("id","ani"+i);
      a1.attr("class","ani");
      $("#"+deleteTrimName).append(a1);
      var img1=$("<img>").attr("src","../anim_images/"+aniName+".png");
      img1.attr("class","picture")
      var txt=$("<p></p>").text(aniName);
      txt.attr("class","anim_text");
      $("a#ani"+i).append(img1,txt);
   }
   function showAnimation()
   {
   	// $(".animation").css("visibility","visible");
   	$("#main").slideUp("fast");
   	$(".animation").fadeIn("slow");
   	$("div").animate({marginTop:"10px"});
   	// $(".search_input").animate({height:"40px"});
   	// $(".search_button").animate({height:"40px"});

   }
   function doNotHaveSource()
   {
   	var txt1=$("<p></p>").text("抱歉`(*>﹏<*)′没有找到该番剧的说~");
    txt1.attr("class","noHave");
    txt1.css("color","#808080FF");
    $("div#anim_area").append(txt1);
   }
  //   $(document).keydown(function(event) {
  //  // 当按下回车键，点button
  //  if (event.keyCode == 13) {
  //  $(".search_button").trigger("click");
  // }
// });
    $(function()
    {
     
       $("body").on("mouseover", ".animation", function() {

           $(this).find(".picture").css({"width":"95%"});
           $(this).find(".anim_text").css({"font-size":"18px"});
        });

     $("body").on("mouseleave", ".animation", function() 
     { 
      
      $(this).find(".picture").css({"width":"90%"});
       $(this).find(".anim_text").css({"font-size":"16px"});
    });
});
      


   $("a.all").click(function()
   {
   	 $("div#anim_area").empty();
   	 $("p.fanju").css("visibility","visible");
   	var arr_all=["工作细胞","鬼灭之刃","伍六七之玄武国篇","灵笼","白沙的水族馆","小林家的龙女仆","86-不存在的战区-2期","妖狐×仆SS","我家有个狐仙大人","元气少女缘结神","极主夫道","海贼王女"];
     for (var i = arr_all.length - 1; i >= 0; i--) {
     	addAnimations(i,arr_all[i]);
     	showAnimation();
     }
   });

    $("a.zhengpian").click(function(){
      $("div#anim_area").empty();
      $("p.fanju").css("visibility","visible");
      var arr_zhengpian=["两不疑","鬼灭之刃","白沙的水族馆","小林家的龙女仆","86-不存在的战区-2期","妖狐×仆SS","我家有个狐仙大人","元气少女缘结神","极主夫道","伍六七之玄武国篇","灵笼","十万个冷笑话"];
     for (var i = arr_zhengpian.length - 1; i >= 0; i--) {
    
     	addAnimations(i,arr_zhengpian[i]);
     	showAnimation();
     }
    });

       $("a.movie").click(function(){
      $("div#anim_area").empty();
      $("p.fanju").css("visibility","visible");
      var arr_movie=["天气之子","借东西的小人阿莉埃蒂","你的名字","天空之城","哪吒","大鱼海棠","千与千寻","龙猫","起风了"];
     for (var i = arr_movie.length - 1; i >= 0; i--) {
     
     	addAnimations(i,arr_movie[i]);
     	showAnimation();
     }
    });

       $("a.china").click(function(){
      $("div#anim_area").empty();
      $("p.fanju").css("visibility","visible");
      var arr_china=["两不疑","时光代理人","伍六七之玄武国篇","一人之下","十万个冷笑话","大鱼海棠","姜子牙","哪吒","灵笼"];
     for (var i = arr_china.length - 1; i >= 0; i--) {
       	addAnimations(i,arr_china[i]);
     	showAnimation();
     }
    });
       $("a.japanese").click(function(){
      $("div#anim_area").empty();
      $("p.fanju").css("visibility","visible");
      var arr_japanese=["鬼灭之刃","龙猫","海贼王女","工作细胞","千与千寻","天空之城","小林家的龙女仆","滑头鬼之孙","我家有个狐仙大人"];
     for (var i = arr_japanese.length - 1; i >= 0; i--) {

     	addAnimations(i,arr_japanese[i]);
     	showAnimation();
     }
    });

function byid(id){
      return typeof(id)==='string'?document.getElementById(id):id;
   // 相当于 return if(typeof(id)==='string'){
   //    document.getElementById(id);
   // }else{
   //    id;
   // }
   }
   //接下来开始轮播图脚本了。
   //为了使得函数很多变量能互相使用，所以我们需要在wai
   //定义好全局变量。
   //len的设定   ：  由于长度上的计算很少，而且图片和数字移动数量相同，只需设置一个
   // index的设定：  设置记数变量，因为数字从0开始计算。
   var main = byid('main'),
      pics = byid('banner').getElementsByTagName('div'),
      dots = byid('dots').getElementsByTagName('li'),
      prev = byid('prev'),
      next = byid('next'),
      len = pics.length,
      index = 0,
      timer = null;//timer是为了进行定时器的设置挺与开
   //定时器的关注
   function solide(){
      //轮播定时器（是整个容器即main）：移入鼠标停止，和移出继续轮播
      //先来个划入清除定时器
      banner.onmouseover=function(){
         if(timer){//即timer不为null，为真
            clearInterval(timer);//清除setinterval，并且此时timer又为false，不过，随着循环（即师表
            //移开banner，循环继续又变回 setinterval。
         }
      }
      //再写一个划出继续启动定时器
      banner.onmouseout = function(){
         timer = setInterval(function(){
            index++;
            if(index>=len){
               index=0;
            }//注意因为index表示的是图片的标号，最大为4！！
            //有了index就可以进行轮播了，可是我们没有执行图片变化的番薯
            //设置一个，在全局作用域中。
            changImg();
         },3000);//setInterval为延时不停息的执行
      }
      banner.onmouseout();//这样子直接运行function，可以不用在鼠标移出才进行，进入页面同时就开始轮播
      //接下来我们开始数字下标绑定图片移动；
      for(var j=0;j<len;j++){
         //在开始前，我们需要知道，函数是可以独立作用域之外的。
         dots[j].index=j;//为所以dots属性添加id，分别为0，1，2，3，4。
         //不太推荐使用这样，毕竟id名字取数字开头不好，不太合规矩。
         dots[j].onclick = function(){
            index = this.index;//(引用id的是dots,及dots的id);
            changImg();
         }
      }
      //然后是上、下一张
      prev.onclick = function(){
         index--;
         if(index<0){
            index=len-1;
         }
         changImg();
      }
      next.onclick = function(){
         index++;
         if(index>=len){
            index=0;
         }
         changImg();
      }
   }
   solide();//提前写上，开始方法，才有轮播效果
   //图片自动切换
   function changImg(){
      for(var i=0;i<len;i++){
         pics[i].style.display='none';
         dots[i].className="";
      }
      pics[index].style.display='block';
      dots[index].className='li1';
   }

});

