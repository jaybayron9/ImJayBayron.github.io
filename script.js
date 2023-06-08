var navBtns = $('.nav-btn');
var sections = $('section');

navBtns.click(function() {
    var target = $(this).data('target');
    sections.hide();
    $('header').slideDown();
    $('#' + target).show();
    $('main').toggle().slideDown();
    $('#navbar-widget').addClass('hidden');

    navBtns.removeClass('bg-gray-800');
    $(this).addClass('bg-gray-800');
});

$('header').click(function() {
    $(this).slideUp();
    $('#navbar').addClass('lg:hidden');
});

$('#navbar-btn').click(function() {
    $('#navbar-widget').toggleClass('hidden');
});

$('#intro-sec').click(function() {
    $('#header').slideDown();
    $('#page').slideUp();
    $('#intro-sec').fadeOut();
    setTimeout(function() {
        $('#page').slideDown();
        $('#navbar').removeClass('lg:hidden');
        $('#about-sec').slideDown();
        $('#about-btn').addClass('bg-gray-800');
    }, 500);
}); 
