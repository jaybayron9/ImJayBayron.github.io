var navBtns = $('.nav-btn');
var sections = $('section');

navBtns.click(function() {
    var target = $(this).data('target');
    sections.hide();
    $('header').slideDown();
    $('#' + target).show();
    $('main').toggle().slideDown();
    $('#navbar-widget').addClass('hidden');

    navBtns.removeClass('dark:bg-gray-800');
    $(this).addClass('dark:bg-gray-800');
});

$('header').click(function() {
    $(this).slideUp('hidden');
});

$('#navbar-btn').click(function() {
    $('#navbar-widget').toggleClass('hidden');
});


// var aboutBtn = $('#about-btn');
// var skillsBtn = $('#skills-btn');
// var projectsBtn = $('#projects-btn');
// var contactBtn = $('#contact-btn');

// var aboutPage = $('#about-sec');
// var skillsPage = $('#skills-sec');
// var projectsPage = $('#projects-sec');
// var contact = $('#contact-sec');

// aboutBtn.click(function(){
//     aboutPage.show();
//     skillsPage.hide();
//     projectsPage.hide();
//     contact.hide();

//     $(this).addClass('dark:bg-gray-800');
//     skillsBtn.removeClass('dark:bg-gray-800');
//     projectsBtn.removeClass('dark:bg-gray-800');
//     contactBtn.removeClass('dark:bg-gray-800');
// });

// skillsBtn.click(function(){
//     aboutPage.hide();
//     skillsPage.show();
//     projectsPage.hide();
//     contact.hide();

//     aboutBtn.removeClass('dark:bg-gray-800');
//     $(this).addClass('dark:bg-gray-800');
//     projectsBtn.removeClass('dark:bg-gray-800');
//     contactBtn.removeClass('dark:bg-gray-800');
// });

// projectsBtn.click(function(){
//     aboutPage.hide();
//     skillsPage.hide();
//     projectsPage.show();
//     contact.hide();

//     aboutBtn.removeClass('dark:bg-gray-800');
//     skillsBtn.removeClass('dark:bg-gray-800');
//     $(this).addClass('dark:bg-gray-800');
//     contactBtn.removeClass('dark:bg-gray-800');
// });

// contactBtn.click(function(){
//     aboutPage.hide();
//     skillsPage.hide();
//     projectsPage.hide();
//     contact.show();

//     aboutBtn.removeClass('dark:bg-gray-800');
//     skillsBtn.removeClass('dark:bg-gray-800');
//     projectsBtn.removeClass('dark:bg-gray-800');
//     $(this).addClass('dark:bg-gray-800');
// });