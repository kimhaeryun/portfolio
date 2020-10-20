function dbl_click(opencom) {
    location.href = href;
}

// 클릭 이벤트 온 오프
$(function () {
    $('.closeButton').click(function () {
        $('.overlay-computer').hide();
    });
    $('.folder-computer').click(function () {
        $('.overlay-computer').show();
    });
});

$(function () {
    $('.closebtn').click(function () {
        $('.youtube').hide();
    });
    $('.youtube-btn').click(function () {
        $('.bar').show();
    });
});

$(function () {
    $('.head__circle--close').click(function () {
        $('.terminal').hide();
    });
    $('.terminal-computer').click(function () {
        $('.terminal').show();
    });
});


// 클릭 이벤트 온 오프

// 드래그
$(function () {
    $(".terminal").draggable();
});
$(function () {
    $(".overlay-computer").draggable();
});
$(function () {
    $(".music").draggable();
});
// 드래그


var aText = new Array(
    "<span class='terminal__text__span'>hi, i'm haeryun</span>",
    "<span class='terminal__text__span'>Dreaming of a Web developer</span>",
    "<span class='terminal__text__span'>be studying steadily!</span>",
    "<span class='terminal__text__span'>and build beautiful websites</span>",
    "<span class='terminal__text__span'>i drink a lot of HOT SIX</span>",
    "<span class='terminal__text__span'># # # # # # # # # #</span>",
    "<span class='terminal__text__span'>see my <a href='http://smap.or.kr/kimhaeryun/1.site/'>portfolio</a> or profile on <a href='https://github.com/kimhaeryun'>github</a>",
    "<span class='terminal__text__span'>and</span>",
    "<span class='terminal__text__span'>read my <a href='https://kimhaeryun.blogspot.com/'>blog</a> and <a href='https://www.facebook.com/minjun960'>facebook</a></span> and <a href='https://www.instagram.com/kim_haeryun/'>Instagram</a></span>"
);
var iSpeed = 30;
var iIndex = 0;
var iArrLength = aText[0].length;
var iScrollAt = 20;

var iTextPos = 0;
var sContents = '';
var iRow;

function typewriter() {
    sContents = ' ';
    iRow = Math.max(0, iIndex - iScrollAt);
    var destination = document.getElementById("typedtext");

    while (iRow < iIndex) {
        sContents += aText[iRow++] + '<br />';
    }
    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
    if (iTextPos++ == iArrLength) {
        iTextPos = 0;
        iIndex++;
        if (iIndex != aText.length) {
            iArrLength = aText[iIndex].length;
            setTimeout("typewriter()", 100);
        }
    } else {
        setTimeout("typewriter()", iSpeed);
    }
}

$(function () {
    $(".wrapper").draggable();
});
$(function () {
    $(".kakao-box__column iframe").draggable();
});
$(function () {
    $(".youtube").draggable();
});


// const openButton = document.getElementById("folder-computer");
// const modal = document.querySelector(".overlay-computer");
// const overlay = modal.querySelector(".fa fa-times");
// const closeBtn = modal.querySelector("closeercam");
// const openModal = () => {
//     modal.classList.remove("folder-computer");
// }
// const closeModal = () => {
//     modal.classList.add("closeercam");
// }
// overlay.addEventListener("click", closeModal);
// closeBtn.addEventListener("click", closeModal);
// openButton.addEventListener("click", openModal);


// musicapp
$(function() {
    $('.jcarousel').jcarousel({
			wrap: 'circular'
    });
	
		$('.jcarousel-pagination').jcarouselPagination({
        item: function(page) {
            return '<li id="jcarousel-item' + page + '"><a href="#' + page + '">' + page + '</a></li>';
        }
    });
	
		$('#jcarousel-item1').addClass('active');
	
		$('.jcarousel-pagination')
    .on('jcarouselpagination:active', 'li', function() {
        $(this).addClass('active');
    })
    .on('jcarouselpagination:inactive', 'li', function() {
        $(this).removeClass('active');
    });
});

$('.jcarousel-prev').click(function() {
    $('.jcarousel').jcarousel('scroll', '-=1');
	
		$(".audio-avalanche")[0].pause();
		$(".audio-the-nights")[0].pause();
		$(".audio-dont-look-down")[0].pause();
		$(".play i").removeClass("fa-pause").addClass("fa-play");
		$(".play").removeClass("active")
	
		if ($('#jcarousel-item1').hasClass('active')) {
		$('.dont-look-down, .avalanche').removeClass('active');
		$('.the-nights').addClass('active');
		$(".song").html("DengDeng");
		$(".artist").html("kim_dengdeng");
		$(".duration").html($(".audio-the-nights").duration);
	};
	
	if ($('#jcarousel-item2').hasClass('active')) {
		$('.the-nights, .avalanche').removeClass('active');
		$('.dont-look-down').addClass('active');
		$(".song").text("composing");
		$(".artist").text("kim_dengdeng");
	};
	
	if ($('#jcarousel-item3').hasClass('active')) {
		$('.the-nights, .dont-look-down').removeClass('active');
		$('.avalanche').addClass('active');
		$(".song").html("Bit");
		$(".artist").html("kim_dengdeng");
	};
});

$('.jcarousel-next').click(function() {
    $('.jcarousel').jcarousel('scroll', '+=1');
	
		$(".audio-avalanche")[0].pause();
		$(".audio-the-nights")[0].pause();
		$(".audio-dont-look-down")[0].pause();
		$(".play i").removeClass("fa-pause").addClass("fa-play");
		$(".play").removeClass("active")
	
				if ($('#jcarousel-item1').hasClass('active')) {
		$('.dont-look-down, .avalanche').removeClass('active');
		$('.the-nights').addClass('active');
		$(".song").html("DengDeng");
		$(".artist").html("kim_dengdeng");
	};
	
	if ($('#jcarousel-item2').hasClass('active')) {
		$('.the-nights, .avalanche').removeClass('active');
		$('.dont-look-down').addClass('active');
		$(".song").html("composing");
		$(".artist").html("kim_dengdeng");
	};
	
	if ($('#jcarousel-item3').hasClass('active')) {
		$('.the-nights, .dont-look-down').removeClass('active');
		$('.avalanche').addClass('active');
		$(".song").html("Bit");
		$(".artist").html("kim_dengdeng");
	};
});

$(".options a").click(function() {
	$(this).toggleClass("active");
});

$(".favorite").click(function() {
	if($(".options .favorite i").hasClass("fa-heart")) {
		$(".options .favorite i").removeClass("fa-heart").addClass("fa-heart-o");
	}
	else {
		$(".options .favorite i").removeClass("fa-heart-o").addClass("fa-heart");
	}
});

$(".play").click(function() {
	$(".play").toggleClass("active");
	if($(".play i").hasClass("fa-play")) {
		$(".play i").removeClass("fa-play").addClass("fa-pause");
	}
	else {
		$(".play i").removeClass("fa-pause").addClass("fa-play");
	}
	
	if($(".play").hasClass("active") && $("#jcarousel-item3").hasClass("active")) {
		var audio = $(".audio-avalanche")[0];
    audio.play();
	} else {
    var audio = $(".audio-avalanche")[0];
    audio.pause();
    }
	
	if($(".play").hasClass("active") && $("#jcarousel-item2").hasClass("active")) {
		var audio = $(".audio-dont-look-down")[0];
    audio.play();
	} else {
    var audio = $(".audio-dont-look-down")[0];
    audio.pause();
    }
	
	if($(".play").hasClass("active") && $("#jcarousel-item1").hasClass("active")) {
		var audio = $(".audio-the-nights")[0];
    audio.play();
	} else {
    var audio = $(".audio-the-nights")[0];
    audio.pause();
    }
});

$(".volume").click(function(){
		$(".volume").removeClass("active");
		$(".volume-slider").animate({marginTop: '-150px'}, 500);
});

$(".volume-slider .close").click(function(){
		$(".volume-slider").animate({marginTop: '0px'}, 500);
})

$(".side-menu-trigger").click(function(){
    $(".side-menu").animate({marginLeft: '0px'});
		$(".volume-slider").animate({marginTop: '0px'}, 500);
}); 

$(".side-menu li a, .side-menu .close").click(function(){
    $(".side-menu").animate({marginLeft: '-310px'});
}); 

$('.volume-slider input[type="range"]').on('input', function () {
            var percent = Math.ceil(((this.value - this.min) / (this.max - this.min)) * 100);
            console.log(this.min);
            $(this).css('background', '-webkit-linear-gradient(left, #e74c3c 0%, #e74c3c ' + percent + '%, #999 ' + percent + '%)');
        });

$(".volume-slider").slider({
    min: 0,
    max: 100,
    value: 0,
		range: "min",
		animate: true,
    slide: function(event, ui) {
      setVolume((ui.value) / 100);
    }
});

function setVolume(myVolume) {
    var myMedia = document.getElementByClass('audio-avalanche');
    myMedia.volume = myVolume;
}
// mmusicapp