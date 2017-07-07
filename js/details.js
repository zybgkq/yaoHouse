$(function(){
	//	商品详情页面导航鼠标划入画出效果
	$("h2").mouseenter(function(){   ///hover([over,]out)   鼠标移入，移出
		$(".nav_map").show();
				});
	$(".nav_map").mouseleave(function(){
	$(".nav_map").hide();
			});		
			
				
				
				
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
			
			
			
//			鼠标划入显示需要选择的地址
		$(".addressess").mouseenter(function(){
				$(".add_details").show();
				
			})
		$(".add_details").mouseleave(function(event){
				$(".add_details").fadeOut();
		});
		
		
	

		// 详情页购买数量加减的
		$("#jian").click(function(){
		var i = parseInt($("#num").val());
		i -= 1;
		if (i <= 0) {
			i = 0
		}
		$("#num").val(i);
	})
	$("#jia").click(function(){
		var i = parseInt($("#num").val());
		i += 1;
		var i = $("#num").val(i);
	})

		
	});

$(function(){
	$("#one").hover(function(){
		$("#demo").attr('src',"../image/nnn1.jpg")
	})
	$("#two").hover(function(){
		$("#demo").attr('src',"../image/nnn.jpg")
	})
	$("#thr").hover(function(){
		$("#demo").attr('src',"../image/nnn4.jpg")
	})
	$("#fou").hover(function(){
		$("#demo").attr('src',"../image/nnn3.jpg")
	})
})






$(function(){
			/* 将点击“添加到购物车”链接时所在行中商品信息保存到cookie中 */
			$("#join").click(function(){ 
				// 获取当前所要获取的信息
				var _name = $(this).parents().parents().parents().children("h4").children(".fon").text(),
					_img=$(this).parents().children("#join_pic"),
					_price=$("#price_p").text();
					_url=_img.attr("src");
					// console.log(_url);
				$.cookie.json = true;         ///原本是字符串格式
				// 先从cookie中读取保存选购商品的存储结构
				var _products = $.cookie("products") || [];      ///将数据从cookie中读取出来，有数据就保存，没有就创建一个空数组
				// 获取当前选购商品在数组中的索引
				var index = exists(_name, _products);
				if (index === -1) // 以前未购买，将当前选购商品保存到数组结构中
					_products.push({name:_name, amount:1, price:_price,url:_url});
				else // 已购买
					_products[index].amount++;
				// 将数组结构存入cookie
				$.cookie("products", _products, {expires:7, path:"/"});
				//console.log(_products)
			});

			
			// 查找_id指定的商品在array数组中是否存在
			// 如果存在，则返回其在数组中的索引，否则返回-1
			function exists(_name, array) {          
			///用jquery判断一个元素是否存在 jquery的选择符永远都会返回一个对象
				for (var i = 0, len = array.length; i < len; i++) {
					if (array[i].id === _name) {
						return i;
					}
				}

				return -1;
			}
		});