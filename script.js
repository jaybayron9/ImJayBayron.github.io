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

function gallery() {
    this.index = 0;
    this.load = function() {
        this.rootEl = document.querySelector(".gallery");
        this.platform = this.rootEl.querySelector(".platform");
        this.frames = this.platform.querySelectorAll(".each-frame");
        this.contentArea = this.rootEl.querySelector(".content-area");
        this.width = parseInt(this.rootEl.style.width);
        this.limit = {
            start: 0,
            end: this.frames.length - 1
        };
        this.frames.forEach(each => {
            each.style.width = this.width + "px";
        });
        this.goto(this.index);
    }
    this.set_title = function() {
        this.rootEl.querySelector(".heading").innerText = this.frames[this.index].getAttribute("title");
    }
    this.next = function() {
        this.platform.style.right = this.width * ++this.index + "px";
        this.set_title();
    }
    this.prev = function() {
        this.platform.style.right = this.width * --this.index + "px";
        this.set_title();
    }
    this.goto = function(index) {
        this.platform.style.right = this.width * index + "px";
        this.index = index;
        this.set_title();
    }
    this.load();
}
var G = new gallery();
G.rootEl.addEventListener("click", function(t) {
    var val = t.target.getAttribute("action");
    if (val == "next" && G.index != G.limit.end) {
        G.next();
    }
    if (val == "prev" && G.index != G.limit.start) {
        G.prev();
    }
    if (val == "goto") {
        let rv = t.target.getAttribute("goto");
        rv = rv == "end" ? G.limit.end : rv;
        G.goto(parseInt(rv));
    }
});

$(document).on("keyup", function(t) {
    var val = t.keyCode;
    if (val == 39 && G.index != G.limit.end) {
        G.next();
    }
    if (val == 37 && G.index != G.limit.start) {
        G.prev();
    }
});

$('#project1').load('<a href="https://web.facebook.com/">click here</a>');