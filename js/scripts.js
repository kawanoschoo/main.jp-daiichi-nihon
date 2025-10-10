//リンクの点線を消す機能
window.onload=function(){
a=document.getElementsByTagName("a");
for(i=0;i<a.length;i++){
a[i].onfocus=function(){this.blur();}
}
area=document.getElementsByTagName("area");
for(i=0;i<area.length;i++){
area[i].onfocus=function(){this.blur();}
}
}

//「トップへ戻る」ボタン機能（この機能を使わないときは、以下を削除）
jQuery(function(){
	var nav = $('#fixedBox'), offset = nav.offset();
	
	$(window).scroll(function () {
		if($(window).scrollTop() > offset.top) {
			nav.addClass('fixed');
		}
		else {
			nav.removeClass('fixed');
		}
	});
	var topBtn = $('.gotop');
	topBtn.hide();

	//スクロールが100に達したら「トップへ戻る」ボタン表示
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			topBtn.fadeIn();
		} else {
			topBtn.fadeOut();
		}
	});
	//スクロールしてトップへ移動
    topBtn.click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
		return false;
    });
});