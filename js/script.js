$(document).ready(function(){

    $('.gnb').on("mouseenter", function(){
        $('.slideinr').slideToggle(500);
    })
    // $(window).stop().animate( { scrollTop : '500' } )
    // $(window).stop().animate( { scrollTop : '100' } )

    // $('.oculus_ment').hide();
    // $('.oculusImg img').hover(function(){
    //     $('.oculus_ment').fadeIn();
    // },function(){
    //     $('.oculus_ment').fadeOut();
    // })


    // $('.img_bg_black').hide();
    // $('.play_img').on("mouseenter", function(){
    //     $('.img_bg_black').fadeToggle(300);
    // })
    $('.more-btn').click(function(){
        $(this).toggleClass('active');
        $('.gnb').toggleClass('active');
     
    });
});
