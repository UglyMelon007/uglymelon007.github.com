$(document).ready(function() {
    $(".toc").appendTo($("#navSidebar"));
    $('table').each(function() {
        $(this).addClass('table table-striped table-condensed table-hover');
    });

    $('.done0').each(function() {
        $(this).html('<div class="alert alert-info"><i class="fa fa-check-square-o"></i>' + $(this).html() + '</div></li>');
    });

    $('.done4').each(function() {
        $(this).html('<div class="alert alert-success"><i class="fa fa-square-o"></i>' + $(this).html() + '</div></li>');
    });

    // Fade Out Back-To-Top-Link on new page
    $('.backtotop').fadeOut();
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.backtotop').fadeIn();
        } else {
            $('.backtotop').fadeOut();
        }
    });
    $('.backtotop').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
    $('pre').each(function() {
        $(this).html('<code>' + $(this).html() + '</code>');
    });
    hljs.initHighlightingOnLoad();
});

