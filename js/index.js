$(function(){
			var $lis = $("#imgs li"),   ///查找id为imgs的下面所有的li标签
				len = $lis.length,      ///获取li的长度
				liWidth = $lis.width(),  ///获取一个图片盒子的宽度
				currentIndex = 0,  
				nextIndex = 1, 
				timer = null;
			$("#imgs").css("width", len*liWidth);   ///获取图片盒子的总宽度
		
			
			// 添加小圆点
			var html = "";
			for (var i = 0; i < len; i++) {
				html += "<div></div>";   //创建DOM元素
			}
			
			$("#pages").append(html).children().eq(0).addClass("curr");   
//			$("#pages").remove(html).children().eq(5)
			$("#pages").on("click", "div", function(){
				
				var index = $(this).index();     
			
				nextIndex = index;
			
				move();
			});

			
			$("#banner").hover(function(){   ///hover([over,]out)   鼠标移入，移出

				clearInterval(timer);  ///鼠标移入盒子时就清除定时器
			}, function(){
				timer = setInterval(move, 3000); 
			}).trigger("mouseleave");	 //trigger在每一个匹配的元素上触发某类事件。		

			// 轮播切换
			function move() {
			
				var _left = -liWidth * nextIndex;  
			
				$("#imgs").animate({left:_left});
				
				$("#pages div").eq(nextIndex).addClass("curr");   ///eq获取第N个元素 div随图片的移动而变换

				$("#pages div").eq(currentIndex).removeClass("curr");

				// 修改索引
				currentIndex = nextIndex;   
				nextIndex++;  
				if (nextIndex >= len) { 
					currentIndex = len - 1; 
					nextIndex = 0;   
				}
			}
			
			
			
			
			
//			tab切换
	//选项卡切换效果
		var $as=$(".bedroom_tab li"),
			
			$uls=$(".all .bedroom_btn_right")
		$as.mouseenter(function(){
		$(this).addClass("show").siblings().removeClass("show");
			var index=$as.index(this);

			$uls.eq(index).show().siblings().hide();
		});
		
		

	
	});
			
			
	// 三级级联菜单
	$(function(){
		$(".nav_map_one1").mouseenter(function(){
			$(".big_box1").fadeIn();
		})
		$(".nav_map_one1").mouseleave(function(){
		$(".big_box1").fadeOut();
			});	
	});
	$(function(){
		$(".nav_map_one2").mouseenter(function(){
			$(".big_box2").fadeIn();
		})
		$(".nav_map_one2").mouseleave(function(){
		$(".big_box2").fadeOut();
			});	
	});