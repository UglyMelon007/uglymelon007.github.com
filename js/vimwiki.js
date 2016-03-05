var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://"); document.write(unescape( "%3Cspan id='cnzz_stat_icon_1257740965'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol +"s95.cnzz.com/z_stat.php%3Fid%3D1257740965%26show%3Dpic' type='text/javascript'%3E%3C/script%3E"));
var kwiki = {
    insertScript: function(url, bottle) {
        var tag = '<script src=' + url + '></script>';
        if (!bottle) bottle = 'body';
        $(bottle).append(tag);
    },
    loadCmt: function(provider) {
        var thread, extraCSS, theJS;
        thread = $('<div id="disqus_thread">');
        theJS = 'https://uglymelon007.disqus.com/embed.js';
        $('#main').append(thread);
        var win = $(window);
        function load() {
            if (win.scrollTop() + win.height() > thread.offset().top - 250) {
			   var tag = '<script src=' + theJS + '></script>';
               $('body').append(tag);
                win.unbind('scroll', load);
            }
        }
        win.bind('scroll', load);
        load();
    }
};

$(document).ready(function() {
	kwiki.loadCmt('disqus');
	$("a[href^='http://']").each(function(){
		this.target = "_blank";
	});
	
	$("a[href^='https://']").each(function(){
		this.target = "_blank";
	});

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
	var url = document.URL;
	if(url.indexOf('diary') == -1) return;
	FaceConvert();
});
function FaceConvert(){
	var p = $('div[role]').find('p');
    p.replaceWith(p.html()
				  .replace(/\/wx/g, '<img src="../images/face/0.gif"/>')
				  .replace(/\/pz/g, '<img src="../images/face/1.gif"/>')
				  .replace(/\/se/g, '<img src="../images/face/2.gif"/>')
				  .replace(/\/fd/g, '<img src="../images/face/3.gif"/>')
				  .replace(/\/dy/g, '<img src="../images/face/4.gif"/>')
				  .replace(/\/ll/g, '<img src="../images/face/5.gif"/>')
				  .replace(/\/hx/g, '<img src="../images/face/6.gif"/>')
				  .replace(/\/bz/g, '<img src="../images/face/7.gif"/>')
				  .replace(/\/shui/g, '<img src="../images/face/8.gif"/>')
				  .replace(/\/dk/g, '<img src="../images/face/9.gif"/>')
				  .replace(/\/tp/g, '<img src="../images/face/12.gif"/>')
				  .replace(/\/cy/g, '<img src="../images/face/13.gif"/>')
				  .replace(/\/jy/g, '<img src="../images/face/14.gif"/>')
				  .replace(/\/lengh/g, '<img src="../images/face/17.gif"/>')
				  .replace(/\/tx/g, '<img src="../images/face/20.gif"/>')
				  .replace(/\/hanx/g, '<img src="../images/face/28.gif"/>')
				  .replace(/\/fendou/g, '<img src="../images/face/30.gif"/>')
				  .replace(/\/xu/g, '<img src="../images/face/33.gif"/>')
				  .replace(/\/shuai/g, '<img src="../images/face/36.gif"/>')
				  .replace(/\/kl/g, '<img src="../images/face/37.gif"/>')
				  .replace(/\/qiao/g, '<img src="../images/face/38.gif"/>')
	 			  .replace(/\/zj/g, '<img src="../images/face/39.gif"/>')
	 			  .replace(/\/ch/g, '<img src="../images/face/40.gif"/>')
	 			  .replace(/\/kb/g, '<img src="../images/face/41.gif"/>')
				  .replace(/\/gz/g, '<img src="../images/face/42.gif"/>')
				  .replace(/\/huaix/g, '<img src="../images/face/44.gif"/>')
				  .replace(/\/bs/g, '<img src="../images/face/48.gif"/>')
				  .replace(/\/wq/g, '<img src="../images/face/49.gif"/>')
				  .replace(/\/kk/g, '<img src="../images/face/50.gif"/>')
				  .replace(/\/yx/g, '<img src="../images/face/51.gif"/>')
				  .replace(/\/qq/g, '<img src="../images/face/52.gif"/>')
				  .replace(/\/xia/g, '<img src="../images/face/53.gif"/>')
				  .replace(/\/kel/g, '<img src="../images/face/54.gif"/>')
				  .replace(/\/zt/g, '<img src="../images/face/62.gif"/>')
				  .replace(/\/lw/g, '<img src="../images/face/77.gif"/>')
				  .replace(/\/tiao/g, '<img src="../images/face/92.gif"/>')
				  .replace(/\/jd/g, '<img src="../images/face/100.gif"/>')
				 );
}
