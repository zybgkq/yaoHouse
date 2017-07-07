// 登录淡入淡出
$(function(){
		$("#close").click(function(){
		$("#win").fadeOut("slow")
	});
	$("#open").click(function(){
		$("#win").fadeIn("slow")
	});
	
});





// 登录成功
$(function(){
	$.cookie.json=true;
		$(".submit_login").click(function(){
				// console.log("进去了吗");
				$.post("/php/login.php", {username:$("#username").val(),password:$("#password").val()}, function(data){
					if (data.status === 1) { // 登录成功
						//var user = data.userinfo;
						$.cookie("users",$("#username_one").val(),{path:"/",expires:7});
						$("#win").fadeOut("slow");
						$("#open").show().html("欢迎 <a href='../html/index.html'>"+$("#username_one").val() +"</a>");
						$("#regist_one").show().html("退出");
					} else {
						$(".error").text("用户名或密码错误...");
					}
				}, "json");
			});


});




$(document).ready(function(){
	if($.cookie("users")){
		$("#win").fadeOut("slow");
		$("#open").show().html("欢迎 <a href='../html/index.html'>"+$.cookie("users") +"</a>");
		$("#regist_one").show().html("<a class='out'>退出</a>");
		// $.cookie(this,null)
	}
});






// 点击退出当前账号
