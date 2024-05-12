$(document).ready(function () {

    let sections = $('section'), 
    nav = $('nav'), 
    nav_height = $('#js-header').outerHeight();
    $(window).on('scroll', function () {
        $('nav a').removeClass('active');
        let cur_pos = $(this).scrollTop(); 
        sections.each(function() {
            let top = $(this).offset().top - nav_height - 180,
            bottom = top + $(this).outerHeight();       
            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');    
                $(this).addClass('active');
                nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
            }
        });
    });
    nav.find('a').on('click', function () {
        let $el = $(this); 
        let fullhref = $el.attr('href');
        let anchorstart = fullhref.indexOf('#');
        let id = fullhref.slice(anchorstart); 
        $('html, body').animate({
            scrollTop: $(id).offset().top - nav_height
        }, 600);
        return false;
    });

    
    if($('.chosen-select').length) {
        var chosenText = '';
        if($('body').hasClass('lang_2')) {
            chosenText = 'Such values are not found:'
        } else {
            chosenText = 'Такого значения не найдено:'
        }
        $(".chosen-select").chosen({
            no_results_text: chosenText,
            width: '300px',
            disable_search_threshold: 4});
    }    

    $('.hamburger').click(function(){
        $('.hamburger').toggleClass('is-active');
        $('.menu').toggleClass('active');
    });

    $('.menu a').on('click', function(){                            
        if($('.menu').hasClass('active')){               
            $('.menu').removeClass('active'); 
            $('.hamburger').removeClass('is-active');
        }       
    })    

    $(window).scroll(function(){
        if($(window).scrollTop() > 500){
            $('.scroll_top').addClass('active');
        }
        else{
            $('.scroll_top').removeClass('active');
        }
    });

    /*$(window).scroll(function(){
        if($(window).scrollTop() > 0){
            $('.menu.active').hide();            
        }        
    });*/

    if ($('.tabs').length) {
        $(function() {

          $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
            $(this)
              .addClass('active').siblings().removeClass('active')
              .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
          });
        });
    }

    if($('.agree_param').length){  

        $('#regsubmit').on('click', function(e) {
            if ($('.agree_param').prop('checked') == false){ 
                e.preventDefault();               
                $('.warning_wrap').html('Для регистрации на сайте требуется принятие условий Пользовательского соглашения, Договора оферты и Согласия на обработку персональных данных').show();                
            }            
        });

        $('.warning_wrap').on('click', function() {
            $('.warning_wrap').hide();
        });
    }

});