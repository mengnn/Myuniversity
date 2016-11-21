$(function(){
	$(window).keydown(function(event){
 		if(event.keyCode==13){
 			event.preventDefault();
 			$("#send").click();
 		};
 	});
	$("#send").click(function(){
		var key = "065f76717db5dfd2135fe774b41e4e9f"; // cc9fb70dcf458a3446bcbbe45343c7af
		var loc = "郑州";
		var user_id = "su"; 
		var info = $("#user_input textarea").val();
		var $p = "<div class='clearfix'><div class='right'>"
				$p += '<div class="person_image">'
				$p += '<img src="img/ca3bb318b4028dd1b47ff051be92c653.jpeg"/>'
				$p += '</div>'
				$p += '<div class="right_message">'
				$p += '<div class="right_floag"></div>'
				$p += '<div class="right_msg">'
				$p += '<p>'+info+'</p>'
				$p += '</div>'
				$p += '</div>'
				$p += '</div></div>'
		$("#message").append($($p));
		$("#message").scrollTop($("#message").scrollTop()+1000);
//		console.log(info);
		$.ajax({
			type:"post",
			url:"http://www.tuling123.com/openapi/api",
			async:true,
			dataType:"json",
			data:{"key":key,"loc":loc,"info":info,"userid":user_id},
			success:function(result){
				var $p = "<div class='clearfix'><div class='left'>"
				$p += '<div class="com_image">'
				$p += '<img src="img/faddb1d797a0999299c9154dab6b5ed7.jpg"/>'
				$p += '</div>'
				$p += '<div class="left_message">'
				$p += '<div class="left_floag"></div>'
				$p += '<div class="left_msg">'
				$p += '<p>'+result.text+'</p>'
				$p += '<p>'+result.url+'</p>'
				$p += '</div>'
				$p += '</div>'
				$p += '</div></div>'
			$("#message").append($($p));
			$("#message").scrollTop($("#message").scrollTop()+1000);
			}
		});
		$("#user_input textarea").val("");
	});
	
});