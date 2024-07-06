/// <reference types="../@types/@types/Jquery" />

$('#open').on('click',function(){
   $('#links').animate({width:'250px'},100)
   $('.home-sec').css('margin-left','220px',100)
});

$('#closeBtn').on('click',function(){
    $('#links').animate({width:'0px'},100)
    $('.home-sec').css('margin-left','0px',100)
});

    $('.paragraph').hide();
    $('h3').on('click',function(){
        
        $('.paragraph').slideUp();
            $(this).next('.paragraph').toggle();
    });


$('#links a').on('click',function(){
    let ahref=$(this).attr('href')
    let secoffSet=$(ahref).offset().top()
    $('body').animate({ scrollTop :secoffSet },1000)
});


    var eventDate = new Date("July 27, 2024 00:00:00").getTime();


    var countdownInterval = setInterval(function() {
        var now = new Date().getTime();
        var timeRemaining = eventDate - now;

        var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        $('#days').text(days);
        $('#hours').text(hours);
        $('#minutes').text(minutes);
        $('#seconds').text(seconds);

        if (timeRemaining < 0) {
            clearInterval(countdownInterval);
            $('#days').text(0);
            $('#hours').text(0);
            $('#minutes').text(0);
            $('#seconds').text(0);
        }
    }, 1000);

        let maxChar = 100;
        $('#message').on('keyup',function() {
            var textLength = $(this).val().length;
            var textRemaining = maxChar - textLength;
            $('#charCount').text(textRemaining);
            if (textRemaining < 0) {
                $('#charCount').text('your available character finished');
            }
        });

    



