$(function(){
//window.$=HTMLElement.prototype.$=function(selector){
 //  var elems=(this==window?document:this)
 //      .querySelectorAll(selector);
//    return elems.length==0?null:elems.length==1?elems[0]:elems;
//}
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
			     var n=target.innerHTML-$("#idxs").$(".hover").html();
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
//window.addEventListener("load",function(){
     slider.init();
//})
});
/*$(function(){
//window.$=HTMLElement.prototype.$=function(selector){
   var elems=(this==window?document:this)
       .querySelectorAll(selector);
    return elems.length==0?null:elems.length==1?elems[0]:elems;
//}
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
	     this.LIWIDTH=parseFloat(document.getComputedStyle($("#slider")).width);
		 this.updateView();
		  this.interval=this.DURATION/this.STEPS;
		  var me=this;
		  $("#idxs").addEventListener("mouseover",function(e){
		     var target=e.target;
			 if(target.nodeName=="LI"&&target.calssName!="hover"){
			     var n=target.innerHTML-$("#idxs").$(".hover").innerHTML;
				me.move(n);
			 }
		  });
		  $("#slider").addEventListener("mouseover",function(){
			 me.canAuto=false;
		  });
		  $("#slider").addEventListener("mouseout",function(){
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
			 $("#imgs").style.left="";
		  }
	     this.DISTANCE=this.LIWIDTH*n;
		 this.step=this.DISTANCE/this.STEPS;
		 if(n<0){
		     imgs=imgs.splice(imgs.length-(-n),-n).concat(imgs);
             $("#imgs").style.left=this.DISTANCE;
             this.updateView();
		 }
		 this.timer=setTimeout(this.moveStep.bind(this,n),this.interval);
	 },
	 moveStep:function(n){
	     var left=parseFloat(getComputedStyle($("#imgs")).left);
		 $("#imgs").style.left=left-this.step+"px";
		 this.moved++;
		 if(this.moved<this.STEPS){
		     this.timer=setTimeout(this.moveStep.bind(this,n),this.interval);
		 }else{
			 if(n>0){
		     imgs=imgs.concat(imgs.splice(0,n));
			 this.updateView();
			 }
			 $("#imgs").style.left="";
			 this.timer=null;
			 this.moved=0;
			 this.autoMove();
		 }
	 },
	 updateView:function(){
	     $("#imgs").style.width=this.LIWIDTH*imgs.length+"px";
		 for(var i=0,lis="",idxs="";i<imgs.length;i++){
		     lis+='<li><img src="'+imgs[i].img+'"></li>';
			 idxs+="<li>"+(i+1)+"</li>";
		 }
		 $("#imgs").innerHTML=lis;
		 $("#idxs").innerHTML=idxs;
		 $("#idxs>li")[imgs[0].i].className="hover";

	 }
}
window.addEventListener("load",function(){
     slider.init();
})
});*/