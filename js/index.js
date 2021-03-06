$("#navText1").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".skillSet").offset().top
    }, 2000);
});