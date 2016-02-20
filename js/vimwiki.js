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
	FaceConvert();
});
function FaceConvert(){
	var p = $('div[role]').find('p');
    p.replaceWith(p.html()
				  .replace('/wx', '<img src="../images/face/0.gif"/>')
				  .replace('/pz', '<img src="../images/face/1.gif"/>')
				  .replace('/se', '<img src="../images/face/2.gif"/>')
				  .replace('/fd', '<img src="../images/face/3.gif"/>')
				  .replace('/dy', '<img src="../images/face/4.gif"/>')
				  .replace('/ll', '<img src="../images/face/5.gif"/>')
				  .replace('/hx', '<img src="../images/face/6.gif"/>')
				  .replace('/bz', '<img src="../images/face/7.gif"/>')
				  .replace('/shui', '<img src="../images/face/8.gif"/>')
				  .replace('/dk', '<img src="../images/face/9.gif"/>')
				  .replace('/tp', '<img src="../images/face/12.gif"/>')
				  .replace('/cy', '<img src="../images/face/13.gif"/>')
				  .replace('/jy', '<img src="../images/face/14.gif"/>')
				  .replace('/lengh', '<img src="../images/face/17.gif"/>')
				  .replace('/tx', '<img src="../images/face/20.gif"/>')
				  .replace('/xu', '<img src="../images/face/33.gif"/>')
				  .replace('/shuai', '<img src="../images/face/36.gif"/>')
				  .replace('/kl', '<img src="../images/face/37.gif"/>')
				  .replace('/qiao', '<img src="../images/face/38.gif"/>')
				  .replace('/zj', '<img src="../images/face/39.gif"/>')
				  .replace('/gz', '<img src="../images/face/42.gif"/>')
				  .replace('/huaix', '<img src="../images/face/44.gif"/>')
				  .replace('/bs', '<img src="../images/face/48.gif"/>')
				  .replace('/wq', '<img src="../images/face/49.gif"/>')
				  .replace('/kk', '<img src="../images/face/50.gif"/>')
				  .replace('/yx', '<img src="../images/face/51.gif"/>')
				  .replace('/qq', '<img src="../images/face/52.gif"/>')
				  .replace('/xia', '<img src="../images/face/53.gif"/>')
				  .replace('/kel', '<img src="../images/face/54.gif"/>')
				  .replace('/zt', '<img src="../images/face/62.gif"/>')
				  .replace('/lw', '<img src="../images/face/77.gif"/>')
				  .replace('/tiao', '<img src="../images/face/92.gif"/>')
				  .replace('/jd', '<img src="../images/face/100.gif"/>')
				 );
}
