$(function(){
	//	获取地址插件
	var addresses = {};

			/* 读取 address.json 中的所有省市区信息 */
			$.ajax("../json/addresses.json").done(function(data){
				// console.log(data);
				var provinces = data.regions;
				provinces.forEach(function(province){
					addresses[province.name] = {}; // 保存省份下城市的对象
					var cities = province.regions || [];
					cities.forEach(function(city){
						addresses[province.name][city.name] = city.regions;
					});
				});

				// console.log(addresses);

				initProvince();
			});

			// 当省份选择改变时：
			$("#province").change(initCity);
			// 当城市选择改变时：
			$("#city").change(initDistrict);

			// 设置省份的显示信息
			function initProvince() {
				var html = "";
				for (var attr in addresses) {
					html += "<option value='"+attr+"'>"+attr+"</option>";
				}
				$("#province").append(html);

				initCity();
			}

			// 设置选中省份下的城市显示信息
			function initCity() {
				// 当前选中的省份
				var currProvince = $("#province").val();
				// 获取该省份的城市信息，并显示
				var cities = addresses[currProvince],
					html = "";
				for (var attr in cities) {
					html += "<option value='"+ attr +"'>"+ attr +"</option>";
				}
				$("#city").empty().append(html);

				initDistrict();
			}

			// 设置选中省份与城市下的区县信息
			function initDistrict() {
				// 当前选中的省份与城市
				var currProvince = $("#province").val(),
					currCity = $("#city").val(),
					html = "";

				// 显示该选中城市下的区县
				var districts = addresses[currProvince][currCity] || [];
				districts.forEach(function(district){
					html += "<option value='"+ district.name +"'>"+ district.name +"</option>";
				});

				$("#district").empty().append(html);
			}
		});






// 保存用户信息
$(function(){
	$(".name").blur(function(){
					// console.log("djfjkd")
						if($(".name").value==""||(!/^[a-zA-Z\u4e00-\u9fa5][a-zA-Z0-9\u4e00-\u9fa5]{2,15}$/.test(this.value))){
							$(".error1").html("只能输入2-15字，可以使用汉字、字母、数字");
							$(".pattern1").addClass("error");
						}
					});
				$(".ex_address").blur(function(){

					if( $(".ex_address").value==""||(!/^(?![^A-Za-z]+$)(?![^0-9]+$)[\x21-x7e]{6,12}$/.test(this.value))){
						console.log("sdjfksdj")
						$(".error2").html("只能输入5-60字，不能全部为数字或字母或特殊字符");
						$(".pattern2").addClass("error"); 
	                }
				});
				$(".phone").blur(function(){
					if($(".phone").value==""||(!/^(((13[0-9]{1})|(14[0-9]{1})|(17[0]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/.test(this.value))){
						$(".error3").html("请重新输入手机号")
						$(".pattern3").addClass("error"); 
					}else{
						$(".error3").html("手机号码可用 ")
					}
				});

			});