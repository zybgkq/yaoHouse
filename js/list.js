$(function(){
	$("h2").mouseenter(function(){
			$(".nav_map").show();
		})
		$(".nav_map").mouseleave(function(){
			$(".nav_map").hide();
		})
})





// 从json读取数据到页面上
$(function(){
	
		$(function(){
			$.get("../json/list.json", function(responseData){
				//console.log("responseData");
				// 准备模板所需要使用到的数据
				var data = {
					product : responseData
				};
				// 渲染
				var html = template("temp", data);
				// 添加显示到页面
				$(".list_buy").html(html);
			}, "json")
		});






});




// 飞入购物车

			// $(".list_buy").on("click","#list_shop",function(e){
			// 	console.log("我是飞进去的东西");
			// 	var fly = $("<img src='../image/fou.jpg' style='position:absolute;'>"),
			// 		cartOffset = $(".cart").offset();
			// 		console.log(fly)
			// 	fly.fly({
			// 		start : {
			// 			top : e.pageY,
			// 			left : e.pageX
			// 		},
			// 		end : {
			// 			top : cartOffset.top,
			// 			left : cartOffset.left,
			// 			width : 10,
			// 			height : 10
			// 		}
			// 	});

			// });
			// 
	// 商品列表加入购物车成功
		



$(function(){
			/* 将点击“添加到购物车”链接时所在行中商品信息保存到cookie中 */
			$(".list_buy").on("click","#list_shop",function(){
				// 获取当前所要获取的信息
				var _id=$(this).parents(".list_img").find("b").text(),
					_name=$(this).parents(".list_img").find(".list_fon").text(),
					_price=$(this).parents(".list_img").find(".list_price").text(),
					_img=$(this).parents(".list_img").find(".list_image"),
					_url=_img.attr("src");
					// console.log(_url);
				$.cookie.json = true;         ///原本是字符串格式
				// 先从cookie中读取保存选购商品的存储结构
				var _products = $.cookie("products") || [];      ///将数据从cookie中读取出来，有数据就保存，没有就创建一个空数组
				// 获取当前选购商品在数组中的索引
				var index = exists(_id, _products);
				if (index === -1) // 以前未购买，将当前选购商品保存到数组结构中
					_products.push({name:_name, amount:1, price:_price,url:_url,id:_id});
				else // 已购买
					_products[index].amount++;
				// 将数组结构存入cookie
				$.cookie("products", _products, {expires:7, path:"/"});
				// console.log(_products)
				

				
				var count = parseInt($("#cart span").html())+1;
					$("#cart span").html(count);

			});

			
			// 查找_id指定的商品在array数组中是否存在
			// 如果存在，则返回其在数组中的索引，否则返回-1
			function exists(_id, array) {          
			///用jquery判断一个元素是否存在 jquery的选择符永远都会返回一个对象
				for (var i = 0, len = array.length; i < len; i++) {
					if (array[i].id === _id) {
						return i;
					}
				}

				return -1;
			}

		});




$(function(){
	$.cookie.json = true;
		// 先从cookie中读取保存选购商品的存储结构
	var _products = $.cookie("products") || [],
		num = 0;
	for(var a in _products){
		num += parseInt(_products[a].amount);
	}
	$("#cart span").html(num);
})
