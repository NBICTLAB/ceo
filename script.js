$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Data Analytics", "Data Science", "Machine Learning", "Python for Data Science", "R Programming", "SPSS"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["a data science enthusiast", "an entrepreneur", "CEO at NBICT LAB"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay:true,
        autoplayTimeOut: 800,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });

    
        //  gallery
        $('.gallery > div.bg').each(function(){
            $(this).wrapAll('<a href="" data-fancybox="gallery"></a>');
        });
    
        $('.gallery a').each(function(){
            var link = $(this).children('.bg').css('background-image');
            console.log(link);
            link = link.replace(/(url\(|\)|")/g,'');
            $(this).attr('href', link);
        });
    
        $("[data-fancybox]").fancybox({
            loop: true,
            buttons: [
                "zoom",
                "share",
                "slideShow",
                "fullScreen",
                "download",
                "thumbs",
                "close"
            ]		
        });
    
    



});
