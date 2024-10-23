// JavaScript Document

$(function() {
	var 
	urlHash = location.hash,
    notList = $('.colorbox'),
    windowWidth = $(window).width(),
    windowSm = 768;

    // pageslide
    if(urlHash) {
        $('body,html').stop().scrollTop(0);
        setTimeout(function () {
            scrollToAnker(urlHash) ;
        }, 500);
    }
    $('a[href^="#"]').not(notList).on('click',function() {
        var href= $(this).attr("href");
        var hash = href == "#" || href == "" ? 'html' : href;
        scrollToAnker(hash);
        return false;
    });
    function scrollToAnker(hash) {
        var target = $(hash);
        var adjust = 105;
        var speed = 400;
        if (windowWidth <= windowSm) {
            var position = target.offset().top;
        } else {
            var position = target.offset().top - adjust;
        }
        $('body,html').stop().animate({scrollTop:position}, speed, "swing");
    }

	if (windowWidth <= windowSm) {

        // Smartphone Toggle Nav
        var
        spNav = $('#toggle');
        spNav.css({transform:'translateX(45px)'});

        if(document.URL.match("contact")) {
            var spNavFrom = 120;
        } else {
            var spNavFrom = 667;
        }

        var spNav = $('#toggle');
        spNav.css({transform:'translateX(45px)'});

        $(window).scroll(function () {
            if ($(window).scrollTop() > spNavFrom){
                spNav.stop().css({transform:'translateX(0)'});
            } else {
                spNav.stop().css({transform:'translateX(45px)'});
            }
        });
        $("#toggle .button").on("click", function() {
            $(this).toggleClass("close");
            $('#menu').toggleClass("open");
            return false;
        });
        $(".nav-menu a").on("click", function() {
            $("#toggle .button").removeClass("close");
            $('#menu').removeClass("open");
            // return false;
        });
        $('a[href^="#"]').not(notList).on('click',function() {
            $("#menu").hide();
        });

    } else {

    	// PC toTop Slide
    	var pageTop = $('.page_top');
    	pageTop.css('bottom', '-200px');
    	var showFlag = false;

    	$(window).scroll(function () {
    		if ($(this).scrollTop() > 600 ){
    			if (showFlag == false) {
    				showFlag = true;
    				pageTop.stop().animate({'bottom' : '60px'}, 200);
    			}
    		} else {
    			if (showFlag) {
    				showFlag = false;
    				pageTop.stop().animate({'bottom' : '-200px'}, 200);
    			}
    		}
    	});
    }

});