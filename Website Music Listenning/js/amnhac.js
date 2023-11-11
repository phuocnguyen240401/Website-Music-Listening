$('.sort').click(function() {
    var type = $(this).attr('data-sort');


    if (type == "desc") {
        sort(false);
    } else if (type == "insc") {
        sort(true);
    }
});

function sort(isInsc) {
    var list_song = $(document.querySelector(".song.active")).find('.item-song');
    for (var i = 0; i < list_song.length - 1; i++) {
        for (var j = i + 1; j < list_song.length; j++) {

            var author_i = Number($(list_song[i]).attr('data-author'));
            var author_j = Number($(list_song[j]).attr('data-author'));
            // console.log(author_i, author_j);

            if (author_j < author_i == isInsc) {
                swap(list_song[i], list_song[j]);
                console.log(list_song[i], list_song[j]);
                list_song = $(document.querySelector(".song.active")).find('.item-song');
                // console.log("s", author_i, author_j);
            }
            // if(j==4)break;
        }
        // if(i == 0)break;
    }

    var author_i = Number($(list_song[list_song.length - 2]).attr('data-author'));
    var author_j = Number($(list_song[list_song.length - 1]).attr('data-author'));
    console.log(author_i, author_j);
    if (author_j < author_i == isInsc) {
        $(list_song[list_song.length - 2]).insertAfter(list_song[list_song.length - 1]);
    }
}

function swap(elm_a, elm_b) {
    var before = $(elm_b).prev();
    $(elm_b).insertAfter($(elm_a));
    $(elm_a).insertAfter(before);
}

$('.filter-author').click(function() {
    var start = Number($(this).attr("data-start"));
    var end = Number($(this).attr("data-end"));
    var list_song = $('.song.active .item-song');
    for (var i = 0; i < list_song.length; i++)
        $(list_song[i]).hide();
    // $(".space").hide();
    $(".song.active .hetSp").hide();
    var c = 0;
    for (var i = 0; i < list_song.length; i++) {
        var author = Number($(list_song[i]).attr('data-author'));
        if (start <= author && author < end) {
            $(list_song[i]).show();
            c++;
        }
    }
    if (c == 0) {
        $(".song.active .hetSp").show();
    }

});

// function ()