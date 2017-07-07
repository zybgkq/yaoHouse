$(function(){
			/* 读取已有商品信息，展示 */
			$.cookie.json = true; // 设置将字符串自动解析转换JS值
			var _products = $.cookie("products") || [];
			if (_products.length === 0) {
				// alert("购物车为空");
				// location = "product.html";
			 $(".noway").show().next().hide();
			 $(".submit_order").hide();
			 // $(".total").hide();
			 
				return;
			}
				//console.log(_products)
			// 显示购物车商品信息
			$.each(_products, function(index, element){
				console.log(element.url)
				$(".product:last").clone(true) // 克隆节点
								  .data("product", element) // 将当前遍历到的商品缓存到对象中
								  .show()
								  .appendTo(".cart-body")
								  .children(".img_image").attr("src",element.url).end()
								  .children(".name").text(element.name).end()
								  .children(".price").text(element.price).end()
								  .find(".amount").val(element.amount).end()
								  .children(".sub").text(parseInt(element.price.replace("¥","") * element.amount));
			});

			/* 删除所在行数据 */
			$("a").click(function(){
				// 获取待删除的商品对象
				var _product = $(this).parents(".product").data("product");
				// 获取删除的商品对象在数组中的索引
				var index = $.inArray(_product, _products);
				// 从数组中删除商品
				if (index !== -1) {
					_products.splice(index, 1);
					// 覆盖保存回cookie中
					$.cookie("products", _products, {expires:7, path:"/"});

					// 将页面当前行删除
					$(this).parents(".product").remove();
				}

				// 修改合计金额
				calcTotal();

				return false; // 阻止事件冒泡与阻止默认行为
			});

			/* 全选 */
			$(".all").click(function(){
				// 获取“全选”复选框的选中状态
				var state = $(this).prop("checked");
				// 设置所有商品行前的复选框选中状态与“全选”保持一致
				$(".ck_product").prop("checked", state);
				$("#checked_fr").prop("checked", state);

				// 计算合计
				calcTotal();

			});

			/* 数量加 */

			$(".product").on("click", ".add", function(){
				var amount = $(this).prev().val();
				amount++;
				$(this).prev().val(amount);



				
				// 修改数组中当前商品数量信息
				$(this).parents().parents(".product").data("product").amount = amount;
				// 保存回cookie中
				$.cookie("products", _products, {expires:7, path:"/"});
				// 修改小计金额
				$(this).parent().next().text($(this).parents(".product").data("product").price * amount);
				// 修改合计金额
				calcTotal();
			});

			/* 数量减 */
			$(".product").on("click", ".minus", function(){
				var amount = $(this).next().val();
				if (amount <= 1)
					return;
				amount--;
				// 页面显示修改后的数量
				$(this).next().val(amount);
				// 修改数组中当前商品数量信息
				$(this).parents(".product").data("product").amount = amount;
				// 保存回cookie中
				$.cookie("products", _products, {expires:7, path:"/"});
				// 修改小计金额
				$(this).parent().next().text($(this).parents(".product").data("product").price * amount);
				// 修改合计金额
				calcTotal();
			});

			/* 输入修改数量 */
			$(".product").on("blur", ".amount", function(){
				var reg = /^[1-9]\d*$/
				if (!reg.test(this.value)){
					$(this).val($(this).parents(".product").data("product").amount);
					return;
				}
				// 修改数组中当前商品数量信息
				$(this).parents(".product").data("product").amount = this.value;
				// 保存回cookie中
				$.cookie("products", _products, {expires:7, path:"/"});
				// 修改小计金额
				$(this).parent().next().text($(this).parents(".product").data("product").price * this.value);
				// 修改合计金额
				calcTotal();
			});

			// 计算选中行的合计
			$(".product").on("click", ".ck_product", function(){
				calcTotal();
			});

			/* 计算合计金额 */
			function calcTotal() {
				/*// 查找出所有被勾选的复选框
				var $ck = $(".ck_product:not(:last):checked");
				// 遍历已被选中复选框所在行，累加小计金额
				var sum = 0;
				$ck.each(function(index, element){
					sum += parseFloat($(element).parents(".product").find(".sub").text());
				});*/

				var sum = 0;
				$(".ck_product:not(:last)").each(function(index, element){
					if($(this).is(":checked")){
						sum += parseFloat($(element).parents(".product").find(".sub").text());
					}
				});
				$(".total").children(".pay").text(sum)
				// 显示合计金额
			}
		});




$(function(){
	$(".submit_order_link").click(function(){
		// if("#open").is()
		$("#win").fadeOut("slow");
		$("#open").show().html("欢迎 <a href='../html/index.html'>"+$.cookie("users") +"</a>");
		$("#regist_one").show().html("<a href='../html/index.html'>退出</a>");
		// $.cookie(this,null)
	})
})