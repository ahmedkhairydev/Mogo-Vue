/*global $, alert, console*/
$(function () {
    'use strict';
    
    $(".button-collapse").sideNav();
    $('.collapsible').collapsible();
    $(document).ready(function () {
        $('.carousel').carousel({});
    });
    $('.scrollspy').scrollSpy({
        scrollOffset: 50
    });
    $(".rslides").responsiveSlides({
        prevText: "<i class='material-icons'>keyboard_arrow_left</i>",
        nextText: "<i class='material-icons'>keyboard_arrow_right</i>",
        nav: true
    });
    
    
    // Hide Items
    $('header .header-animation div h1, header .header-animation div p, header .header-animation div hr').hide();
    
    $('#what-we-do h1, #what-we-do p, #what-we-do hr, #what-we-do figure').hide();
    
    $('#what-we-do-2 h1, #what-we-do-2 p, #what-we-do-2 hr').hide();
    
    $('#we-work-with h1, #we-work-with p, #we-work-with hr, #we-work-with .services div').hide();
    
    $('#service h1, #service p, #service hr, #service .content img, #service .content ul, #service .content ul li').hide();
    
    $('#happy-clients h1, #happy-clients p, #happy-clients hr, #happy-clients .people div').hide();
    
    $('#our-stories h1, #our-stories p, #our-stories hr, #our-stories .story').hide();
    
    $('#who-we-are h1, #who-we-are p, #who-we-are hr, #who-we-are .animate').hide();
    
    // Header & What We Do Animation
    
    if ($(this).scrollTop() >= '0') {

        var header = $('header .header-animation div h1, header .header-animation div p, header .header-animation div hr');
        var whatDo = $('#what-we-do h1, #what-we-do p, #what-we-do hr, #what-we-do figure');
        var weWork = $('#we-work-with h1, #we-work-with p, #we-work-with hr, #we-work-with .services div');
        var service = $('#service h1, #service p, #service hr, #service .content img, #service .content ul, #service .content ul li');
        var story = $('#our-stories h1, #our-stories p, #our-stories hr, #our-stories .story');
        var contact = $('#who-we-are h1, #who-we-are p, #who-we-are hr, #who-we-are .animate');

        // Header Animation
        $.each(header, function (i, div) {

            setTimeout(function () {
                $(div).show().css({'animation': 'up 1.5s'});
            }, i * 100);

        });
        
        // What We Do Animaiton
        $.each(whatDo, function (i, div) {
                
            setTimeout(function () {
                $(div).show().css({'animation': 'up 1.5s'});
            }, i * 200);
                
        });
        
        // We Work With Animation
        $.each(weWork, function (i, div) {
                
            setTimeout(function () {
                $(div).show().css({'animation': 'up 1.5s'});
            }, i * 100);
                
        });
        
        // Service Animation
        $.each(service, function (i, div) {
                
            setTimeout(function () {
                $(div).show().css({'animation': 'up 1.5s'});
            }, i * 150);
                
        });
        
        // Facts Animation
        $('#facts div:first-child div:first-child div p').each(function () {
            $(this).animate({
                left: $(this).data('percentage')
            }, {
                duration: 3000,
                step: function (nowoooo) {
                    var data = Math.round(nowoooo),
                        zero = (data < 10) ? "0" : "";
                    $(this).text(zero + data);
                }
            });
        });
        
        // Blog Animation
        $.each(story, function (i, div) {
                
            setTimeout(function () {
                $(div).show().css({'animation': 'up 1.5s'});
            }, i * 150);
                
        });
        
        // Blog Animation
        $.each(contact, function (i, div) {
                
            setTimeout(function () {
                $(div).show().css({'animation': 'up 1.5s'});
            }, i * 150);
                
        });
    }
    
    // Scroll Animation
    $(window).scroll(function () {
        
        // Header Animation
        
        if ($(this).scrollTop() <= '650') {

            var header = $('header .header-animation div h1, header .header-animation div p, header .header-animation div hr');

            $.each(header, function (i, div) {

                setTimeout(function () {
                    $(div).show().css({'animation': 'up 1.5s'});
                }, i * 100);

            });
        } else {
            $('header .header-animation div h1, header .header-animation div p, header .header-animation div hr').fadeOut(1000);
        }
        
        //Navbar Scroll
        
        if ($(this).scrollTop() >= '100') {
            $('nav').css({'background': '#e98282', 'transition': 'all 1s ease-in-out'});
        } else {
            $('nav').css({'background': 'none'});
        }
        
        if ($(this).scrollTop() >= '150') {
            
            var whatDo2 = $('#what-we-do-2 h1, #what-we-do-2 p, #what-we-do-2 hr');
            
            $.each(whatDo2, function (i, div) {
                
                setTimeout(function () {
                    $(div).show().css({'animation': 'up 1.5s'});
                }, i * 200);

            });
        }
        
        //----------------------------------
        
        //Append UP Button
        if ($(this).scrollTop() >= '1000') {
            $('.fixed-action-btn').fadeIn();
        } else {
            $('.fixed-action-btn').fadeOut();
        }
        
        //----------------------------------
        
        // Clients Animation
        
        var f = 1400;
        
        if ($(this).scrollTop() >= f) {
            
            var service = $('#happy-clients h1, #happy-clients p, #happy-clients hr, #happy-clients .people div');
            
            $.each(service, function (i, div) {
                
                setTimeout(function () {
                    $(div).show().css({'animation': 'up 1.5s'});
                }, i * 100);
                
            });
        }
        
        //Scroll To Top
        $('.fixed-action-btn').click(function () {
            $('body, html').stop().animate({scrollTop: 0}, 1500);
        });
        
        //----------------------------------
        
    });
});