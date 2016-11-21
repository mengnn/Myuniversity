setInterval(function(){
     var inner=$('.s1').html();
	 if(inner=="明德志强 求实力行"){
		     $('.s1').html('厚生丰民');
		 }else if(inner=="厚生丰民"){
			    $('.s1').html('明德志强 求实力行');
			 }
},3000);

//学校情况导航栏

$(function(){
  $(".nav>ul").children().each(function(i,j){
    $(j).hover(function(){
	  $(this).children("a").addClass("curr");
	  $(this).children("ul").show();
	},function(){
	  $(this).children("a").removeClass("curr");
	  $(this).children("ul").hide();
	}
	);
  });
});

//图片轮播
$(function(){

var imgs=[
	{"i":0,"img":"img/1.jpg"},
    {"i":1,"img":"img/2.jpg"},
    {"i":2,"img":"img/3.jpg"},
    {"i":3,"img":"img/4.jpg"},
    {"i":4,"img":"img/5.jpg"},
];
var slider={
     LIWIDTH:0,//保存每个li的宽度
	 DURATION:1000,//每次轮播的总时长
	 DISTANCE:0,
     STEPS:200,
	 interval:0,
	 step:0,
	 moved:0,
     WAIT:2000,
	 canAuto:true,
	 timer:null,
	 init:function(){
	     this.LIWIDTH=parseFloat($("#slider").css('width'));
		 this.updateView();
		  this.interval=this.DURATION/this.STEPS;
		  var me=this;
		  $("#idxs").mouseover(function(e){
		     var target=e.target;
			 if(target.nodeName=="LI"&&target.calssName!="hover"){
			     var n=target.innerHTML-$("#idxs>li.hover").html();
				// var n=target.innerHTML-idxs.$("[class='hover']").innerHTML;
				me.move(n);
			 }
		  });
		  $("#slider").mouseover(function(){
			 me.canAuto=false;
		  });
		  $("#slider").mouseout(function(){
		    me.canAuto=true;
		  });
		  me.autoMove();
	 },
	 autoMove:function(){//启动自动轮播
		 var me=this;
	     me.timer=setTimeout(function(){
		     if(me.canAuto==true){
			     me.move(1);
			 }else{
			     me.autoMove();
			 }
		 },me.WAIT)
	 },
	 move:function(n){
		 if(this.timer!=null){
			 clearInterval(this.timer);
			 this.timer=null;
			 $("#imgs").css('left',"");
		  }
	     this.DISTANCE=this.LIWIDTH*n;
		 this.step=this.DISTANCE/this.STEPS;
		 if(n<0){
		     imgs=imgs.splice(imgs.length-(-n),-n).concat(imgs);
             $("#imgs").css('left',this.DISTANCE+"px");
             this.updateView();
		 }
		 this.timer=setTimeout(this.moveStep.bind(this,n),this.interval);
	 },
	 moveStep:function(n){
	     var left=parseFloat($("#imgs").css('left'));
		 $("#imgs").css('left',left-this.step+"px");
		 this.moved++;
		 if(this.moved<this.STEPS){
		     this.timer=setTimeout(this.moveStep.bind(this,n),this.interval);
		 }else{
			 if(n>0){
		     imgs=imgs.concat(imgs.splice(0,n));
			 this.updateView();
			 }
			 $("#imgs").css('left',"");
			 this.timer=null;
			 this.moved=0;
			 this.autoMove();
		 }
	 },
	 updateView:function(){
	     $('#imgs').css('width',this.LIWIDTH*imgs.length+"px");
		 for(var i=0,lis="",idxs="";i<imgs.length;i++){
		     lis+='<li><img src="'+imgs[i].img+'"></li>';
			 idxs+="<li>"+(i+1)+"</li>";
		 }
		 $("#imgs").html(lis);
		 $("#idxs").html(idxs);
		 $("#idxs>li")[imgs[0].i].className="hover";

	 }
}

     slider.init();
	 
	 
	 
	//////////新闻播报///////////
	$('.new1 .items1 a').mouseover(function(){
		    $(this).addClass('active').siblings().removeClass('active');
			var id=$(this).attr('href');
			$(id).addClass('active').siblings('.active').removeClass('active');
		});
	$('.new2 .items2 a').mouseover(function(){
		    $(this).addClass('active').siblings().removeClass('active');
			var id=$(this).attr('href');
			$(id).addClass('active').siblings('.active').removeClass('active');
		});
	$('.new3 .items3 a').mouseover(function(){
		    $(this).addClass('active').siblings().removeClass('active');
			var id=$(this).attr('href');
			$(id).addClass('active').siblings('.active').removeClass('active');
		});

//		视频和校歌播放
      $('.delete').click(function(){
			      $('#container').css('display','none');
				  player.pause();
			})
	  $('.open').click(function(){
			      $('#container').css('display','block');
			})

});
