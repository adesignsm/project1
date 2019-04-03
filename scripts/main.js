//BANNER ANIMATION
$(document).ready(function() {

	var $banner1 = $("#banner1");
	var $banner2 = $("#banner2");

	function bannerAnimation() {
	   
	    $banner1.animate({scrollTop: "3000%" }, 40000);
	    
	    setTimeout(function() {
	       
	       $banner1.animate({scrollTop: 0}, 40000); 
	    
	    }, 40000);

		$banner2.animate({scrollTop: "3000%"}, 30000);

		setTimeout(function() {

			$banner2.animate({scrollTop: 0}, 30000);

		}, 30000);
	}

	bannerAnimation();

	$("#home_li").on("click", function() {

		bannerAnimation();
	});
});

//LI FUNCTIONS
$(document).ready(function() {

	var $li1 = $("#home_li");
	var $li2 = $("#gallery_li");
	var $li3 = $("#about-contact_li");
	var $sideTitle = $("#side-bar-title");

	var $line1 = $("#line1");
	var $line2 = $("#line2");
	var $line3 = $("#line3");
	var $line4 = $("#line4");

	//LI 1
	$li1.on("mouseenter", function() {

		$li1.animate({opacity: "1"}, 100);
		$line1.animate({width: "25%"}, 350);
	});

	$li1.on("mouseleave", function() {

		$li1.animate({opacity: ".8"}, 100);
		$line1.animate({width: "0%"}, 350);
	});

	//LI 2
	$li2.on("mouseenter", function() {

		$li2.animate({opacity: "1"}, 100);
		$line2.animate({width: "30%"}, 350);
	});

	$li2.on("mouseleave", function() {

		$li2.animate({opacity: ".8"}, 100);
		$line2.animate({width: "0%"}, 350);
	});

	//LI 3
	$li3.on("mouseenter", function() {

		$li3.animate({opacity: "1"}, 100);
		$line3.animate({width: "55%"}, 350);
	});

	$li3.on("mouseleave", function() {

		$li3.animate({opacity: ".8"}, 100);
		$line3.animate({width: "0"}, 350);
	});

	//LI 4
	$sideTitle.on("mouseenter", function() {

		$line4.animate({width: "52%"}, 350);
	});

	$sideTitle.on("mouseleave", function() {

		$line4.animate({width: "0"}, 350);
	});
});

//ABOUT/CONTACT IMAGE SLIDESHOW
$(document).ready(function() {

	function slideshow() {

		$("#AC-image-container > img:gt(0)").hide();

		setInterval(function() {

			$("#AC-image-container > img:first")
				.delay(1000)
				.fadeOut(3000)
				.next()
				.delay(1000)
				.fadeIn(2000)
				.end()
				.appendTo("#AC-image-container");
		}, 7000);
	}

	slideshow();
});

//CONTAINER ANIMATIONS
$(document).ready(function() {

	var $mainContainer = $("#main-container");
	var $acContainer = $("#about-contact-container");
	var $galleryContainer = $("#gallery-container");

	var $acLI = $("#about-contact_li");
	var $homeLI = $("#home_li");
	var $galleryLI = $("#gallery_li");

	var $homeH1 = $("#side-bar-title");

	$homeH1.on("click", function() {

		$acContainer.fadeOut(300);
		$galleryContainer.fadeOut(300);
		$mainContainer.delay(500).fadeIn(700);		
	});

	$acLI.on("click", function() {

		$mainContainer.fadeOut(300);
		$galleryContainer.fadeOut(300);
		$acContainer.delay(500).fadeIn(700);
	});

	$homeLI.on("click", function() {

		$acContainer.fadeOut(300);
		$galleryContainer.fadeOut(300);
		$mainContainer.delay(500).fadeIn(700);
	});

	$galleryLI.on("click", function() {

		$acContainer.fadeOut(300);
		$mainContainer.fadeOut(300);
		$galleryContainer.delay(500).fadeIn(700);
	});
});

//HOME IMAGE FUNCTIONS
$(document).ready(function() {

	var $main_img = $("#main-container img");

	var $mainContainer = $("#main-container");
	var $acContainer = $("#about-contact-container");
	var $galleryContainer = $("#gallery-container");

	$main_img.on("click", function() {

		$acContainer.fadeOut(300);
		$mainContainer.fadeOut(300);
		$galleryContainer.delay(500).fadeIn(700);
	});
});