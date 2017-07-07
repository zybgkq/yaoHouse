$(function(){
				//console.log("skdjfskld")
				//用户是否存在着，默认存在
				var isExist=true;
				//失去焦点时
				$("#username").blur(function(){
					$.getJSON("../php/user.php",{username:$(this).val()},function(data){
						//console.log("data");
						if(data.status===1){
							$("#register_username_error").html("用户名不可用");
							isExist=true;
						}else{
							$("#register_username_error").html("用户名可用");
							isExist=false;
						}
					});
				});
				$("#password").blur(function(){
					if( $("#password").value==""){
						$("#register_password_error").html("请输入正确的密码");
	                      
	                }else{
	                    $("#register_password_error").html("密码可用")
	                }
				});
				$("#password_rel").blur(function(){
					if($("#password").val()===$("#password_rel").val()){
						$("#register_confirm_password_error").html("密码输入正确")
					}else{
						$("#register_confirm_password_error").html("请确保两次输入刷完密码一致")
					}
				}); 
				$("#phone").blur(function(){
					if($("#phone").value==""||(!/^(((13[0-9]{1})|(14[0-9]{1})|(17[0]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/.test(this.value))){
						$("#register_phone_error").html("请重新输入手机号")
					}else{
						$("#register_phone_error").html("手机号码可用 ")
					}
				});
				//点击注册按钮时
				$("#register").click(function(){
					//console.log("ksldjfklsdjf")
					if(!isExist){
						
						$.post("../php/register.php",{username:$("#username").val(),password:$("#password").val(),passwordRle:$("#passwordRle").val(),phone:$("#phone").val()},function(data){
							//console.log("data");
							if(data.status===1){
								window.location="../html/index.html";
							}else{
								$("#submit_error").html("用户注册失败，请重新注册"+ data.message)
							}
						},"json");
						isExist=true;
					}
				});
			});
