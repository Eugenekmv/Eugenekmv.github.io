$(function(){
    let introH = $('#intro').innerHeight(),
        header = $('#header'),
        scrollOffset = $(window).scrollTop();
    
    checkScroll(scrollOffset);
    
//    Fixed header
    $(window).on('scroll', function(){
        
        scrollOffset = $(this).scrollTop();
        
        checkScroll(scrollOffset);
          
    });
    
    
    function checkScroll(scrollOffset){
        if (scrollOffset >= introH){
            $(header).addClass('header--fixed');
        }   else {
            $(header).removeClass('header--fixed')
        }  
    }
//     smooth scroll 
    $('[data-scroll]').on('click', function(event){
        
        event.preventDefault();
        
        let $this = $(this),
            blockId = $(this).data('scroll'),
            blockOffset = $(blockId).offset().top;
        
        $('html, body').animate({
            scrollTop: blockOffset - 80
        }, 600);
        
        $('nav a').removeClass('active');
        $this.addClass('active');
        
        
        
    });
//    BURGER
   
    $('#burger').on('click', function(event){
        
        event.preventDefault();
        
        $('#nav').toggleClass('active');
        $(this).toggleClass('active');
        
       
        
    });
    $('#nav a').on('click', function(){
        $('#nav').toggleClass('active');
        $('#burger').toggleClass('active')
        
    });
//    accordion
    $('[data-collapse]').on('click', function(event){
        event.preventDefault();
        
        let $this = $(this),
            blockId = $(this).data('collapse');
        
        $(blockId).slideToggle();
    });
//   slider
    $('[data-slider]').slick({
        infinite: true,
//        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    
    
    
    
});