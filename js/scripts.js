//�����N�̓_���������@�\
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

//�u�g�b�v�֖߂�v�{�^���@�\�i���̋@�\���g��Ȃ��Ƃ��́A�ȉ����폜�j
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

	//�X�N���[����100�ɒB������u�g�b�v�֖߂�v�{�^���\��
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			topBtn.fadeIn();
		} else {
			topBtn.fadeOut();
		}
	});
	//�X�N���[�����ăg�b�v�ֈړ�
    topBtn.click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
		return false;
    });
});