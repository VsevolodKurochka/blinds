$(document).ready(function(){

		// VARIABLES
		var header_menu_name 	= 'header-menu',
				header_menu 			= $('.' + header_menu_name),
				button_menu 			= $('.btn-menu'),
				body 							= $(".body"),
				responsiveBr      = 1024,
				visibility        = "in visible",
		 		backdrop = $("<div />", {
					class: "vmodal-backdrop fade"
				});
		//MENU
			//SCRIPTS
			function toggler(){
				body.toggleClass("header-menu-push");
				button_menu.toggleClass('navbar-toggle-open');
				header_menu.toggleClass('header-menu-open');
			}
			button_menu.click(function(e){
				toggler();
				e.stopPropagation();
			});
			$('.anchor-menu').click(function(){
				var href = $(this).attr('href');
				$('body,html').animate({
					scrollTop: $(href).offset().top
				},2000);
				toggler();
				return false;
			});
			function menuSwipe(){
				if ( $(document).width() <= responsiveBr ) {
					body.hammer().on("swiperight", function(){
						toggler();
					}).on("swipeleft", function(){
						toggler();
					});
				}
			}
			menuSwipe();
			$(window).resize(menuSwipe);
			
		// $(document).click(function(e){
		// 	if( header_menu.hasClass(header_menu_name + '-open') ) {
		// 		if ( ! $(e.target).is('.'+header_menu_name + ', .'+header_menu_name+"*") ) {
		// 			toggler();
		// 		}
		// 	}
		// });

		// SCROLL TO BLOCK
		$('.anchor').click(function(){
			var href = $(this).attr('href');
			$('body,html').animate({
				scrollTop: $(href).offset().top
			},2000);
			return false;
		});
		
		$('[data-modal="modal"]').click(function(){
			var thisTarget = $(this).attr("data-modal-target");
			if ( thisTarget ) {
				$(thisTarget).addClass(visibility);
				body.append(backdrop).addClass("vmodal-open");
				backdrop.addClass(visibility);
			}else{
				console.log("Need attribtue [data-modal-target].");
			}
		});
		$('[data-close="modal"]').click(function(){
			$(this).closest(".vmodal").removeClass(visibility);
			backdrop.removeClass(visibility);
			body.removeClass("vmodal-open");
		});
		$(window).click(function(e){
			if ( backdrop.length > 0 ) {
				if ( $(e.target).is(".vmodal") ) {
					$(".vmodal.in").removeClass(visibility);
					backdrop.removeClass(visibility);
					body.removeClass("vmodal-open");
					console.log("document clicked");
				}
			}
		});

		//CALCULATOR
		$(".calc-list-b").each(function(){
			var calcNameAttr = $(this).attr("data-name");
			if ( calcNameAttr ) {
				var calcListName = $("<div />", {
					class: "calc-list-name",
					text: calcNameAttr
				});
				$(this).append(calcListName);
			}
		});
		$(".calc-list-b").click(function(){
			$(".calc-list li").removeClass("active").removeAttr("id");
			$(this).toggleClass("active").attr("id", "choosen-material");
			var changeBigImage = $(this).attr("data-image");
			if ( changeBigImage ) {
				$(".editor-image img").attr("src", changeBigImage);
			}
		});
		$("#check").click(function(){
			if ( $("#choosen-material").length > 0 ) { 
				var price;
				if ( $("#choosen-material").attr("data-price") ){
					price = $("#choosen-material").attr("data-price");
				}
				var height 			= $("#height").val(),
						width 			= $("#width").val(),
						quadrature 	= (height * width) / 10000,
						total      	= quadrature * price;
				
				$("#quadrature").show();
				$("#totalQuadrature").html(quadrature);
				$("#full-price").show();
				$("#total-price").html(total);
			}else{
				$(".calc-error-material").addClass("active");
				setTimeout(function(){
					$(".calc-error-material").removeClass("active");
				}, 4000);
			}
		});
		// $(".calc-mechanism input").click(function(){
		// 	$(".calc-mechanism input").removeClass();
		// 	$(this).toggleClass($(this).attr("id"));
		// });
		// var standartPrice = [
		// 	[0.5,1253]
		// ];
		//console.log(standartPrice[0][1]);
		//var standartPrice = [1253,1297,1341,1385,1429,1473,1517,1561,1605,1649,1694,1738,1782,1826,1870,1914];
		//console.log(standartPrice[1]);
		for (var i = 0.5; i <= 2; i=i+0.1) {
			//console.log( "length " + i.toFixed(1) + " . " + standartLength ) ;
			// for ( var j = 1253; j <= 1914; j=j+44 ) {
			// 	console.log(j);
			// }
			//console.log(i.toFixed(1));
			//console.log(i.toFixed(1));
		}

		//DEVELOPE
		// var widthDevice = $(window).width();
		// $(".development").html(widthDevice);
});	