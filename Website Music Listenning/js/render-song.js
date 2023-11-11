// apple = document.querySelectorAll("div.apple");
song_nhactre = $("div.nhactre div.list-song");
song_nhacbolero = $("div.nhacbolero div.list-song");
song_nhacnn = $("div.nhacnn div.list-song");
// song_apple = $("div.apple div.list-song");
// console.log(song_apple);
function render_song(data, type) {
    // apple
    html = "";
    for (var i = 0; i < data.length; i++) {
        if (data[i]["type"] != type)
            continue;
        if (i % 5 == 0)
            html += space();

        html += song_html(data[i]);

        if ((i + 1) % 5 == 0)
            html += space();
    }

    if (type == "nhactre")
        song_nhactre.html(html);
    else if (type == "nhacbolero")
        song_nhacbolero.html(html);
    else if (type == "nhacnn")
        song_nhacnn.html(html);

}

function space() {
    return '<div class="col-lg-1 space"></div>\n';
}