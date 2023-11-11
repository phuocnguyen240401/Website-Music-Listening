function slide_nhactop() {
    var time = 4000;
    var indx_slide = 0;
    var list_nhactop = document.querySelector(".list-nhactop");
    var pre_scl = 0;
    let sl = setInterval(function() {
        var width = $('.slide').css('width');
        width = Number(width.slice(0, -2));
        var scl = list_nhactop.scrollLeft;
        list_nhactop.scrollTo({
            left: scl + width / 2,
            behavior: 'smooth'
        });
    }, time);
}



function render_nhactop() {
    var list_id = [7, 13, 20, 17, 05, 10];
    var html = '';
    for (var i = 0; i < list_id.length; i++) {

        html += '<div class="slide col-lg-2 col-sm-4 col-6">' +
            '	<a href="chitietamnhac.html?id=' + list_id[i] + '">' +
            '		<img src="' + IMAGE_PATH + data[list_id[i] - 1]["image"] + '">' +
            '	</a>' +
            '	<p><a href="chitietamnhac.html?id=' + list_id[i] + '">' + data[list_id[i] - 1]["name"] + '</a></p>' +
            '	<p>' +
            '		<span class="after-author">Nghệ sĩ: ' + currency_format(data[list_id[i] - 1]["author"]) + '</span>' +
            '	</p>' +
            '</div>';
    }
    $('.list-nhactop').html(html);
}