// 마우스오버시 썸네일 확대
$(document).ready(function() {

	//move the image in pixel
	var move = -15;

	//zoom percentage, 1.2 =120%
	var zoom = 1.2;

	//On mouse over those thumbnail
	$('.item').hover(function() {

		//Set the width and height according to the zoom percentage
		width = $('.item').width() * zoom;
		height = $('.item').height() * zoom;

		//Move and zoom the image
		$(this).find('img').stop(false,true).animate({'width':width, 'height':height, 'top':move, 'left':move}, {duration:200});

		//Display the caption
		$(this).find('p.caption').stop(false,true).fadeIn(200);
	},
	function() {
		//Reset the image
		$(this).find('img').stop(false,true).animate({'width':$('.item').width(), 'height':$('.item').height(), 'top':'0', 'left':'0'}, {duration:100});

		//Hide the caption
		$(this).find('p.caption').stop(false,true).fadeOut(200);
	});
});


// gnb 고정
$(document).ready(function(){

    var nav = $('#portpolio_header');
    var navoffset = $('#portpolio_header').offset();
    /* offset을 이용하여 .menu(메뉴영역)의 위치값을 알아내어 navoffset에 넣어둔다 */

    $(window).scroll(function () {
        if ($(this).scrollTop() >= navoffset.top) {  /* 화면 스크롤 값이 메뉴영역의 top보다 값이 커지면 */
            nav.css('position','fixed').css('top',0); /* 화면 위쪽에 고정시킨다. */
        }else {
            nav.css('position','absolute').css('top',0); /* 처음 메뉴영역의 top 값으로 돌리기 */
        }
    });
});