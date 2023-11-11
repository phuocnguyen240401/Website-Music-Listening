var IMAGE_PATH = "../images/song/";

function reverse(s) {
    return s.split("").reverse().join("");
}

function currency_format(author) {
    author = reverse(String(author));
    currency = "";
    for (var i = 0; i < author.length; i++) {
        if (i != 0 && i % 3 == 0)
            currency += "";
        currency += author[i];
    }
    currency = reverse(String(currency));
    return currency
}

function get_song(id) {
    for (var i = 0; i < data.length; i++) {
        if (data[i]["id"] == id) {
            id_song = id;
            return data[i];
        }
    }
    window.location.href = "index.html";
}

function remove_song(id) {
    var cart = get_cart();
    for (var i = 0; i < cart.length; i++) {
        if (cart[i]["id"] == String(id)) {
            cart.splice(i, 1);
            localStorage["cart"] = JSON.stringify(cart);
            return;
        }
    }
}

function update_cart(id, count, color) {
    var cart = get_cart();
    for (var i = 0; i < cart.length; i++) {
        if (cart[i]["id"] == String(id)) {
            cart[i]["count"] = count;
            cart[i]["color"] = color;
            localStorage["cart"] = JSON.stringify(cart);
            return;
        }
    }
}

function get_cart() {
    var cart;
    try {
        cart = JSON.parse(localStorage["cart"]);
    } catch {
        cart = new Array();
    }
    return cart;
}

function removeAscent(str) {
    if (str === null || str === undefined) return str;
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    return str;
}

function check_regex(elm, pattern, msg) {
    var str = $(elm).val().trim();
    str = removeAscent(str);
    if (pattern.test(str) == false) {
        $(elm).parent().find("div").text(msg);
        return false;
    }
    return true;
}

function check_fullname() {
    return check_regex($("[name=fullname]"), /^[a-zA-Z ]+$/, "Họ tên chỉ chứa các ký tự và khoảng trắng.");
}

function check_phone() {
    return check_regex($("[name=phone]"), /^0[1-9]\d{8}$/, "Số điện thoại không hợp lệ.");
}

function check_diachi() {
    return check_regex($("[name=address]"), /^[a-zA-Z0-9_/|\\\.@#!\?\$\^, ]+$/, "Địa chỉ không hợp lệ.");
}

function check_pass() {
    return check_regex($("[name=pass]"), /^[^0-9]{4,}$/, "Mật khẩu không hợp lệ.");
}

function song_html(data) {

    return '<div class="col-lg-2 col-md-4 item col-sm-6 item-song" data-id="' + data["id"] + '" data-author="' + data["author"] + '">\n' +
        '	<a href="chitietamnhac.html?id=' + data["id"] + '">\n' +
        '		<img src="' + IMAGE_PATH + data["image"] + '">\n' +
        '	</a>\n' +
        '	<p><a href="chitietamnhac.html?id=' + data["id"] + '">' + data["name"] + '</a></p>\n' +
        '	<p>\n' +
        '		<span class="after-author">Nghệ sĩ: ' + currency_format(data["author"]) + '</span>\n' +
        '	</p>\n'

    +'</div>\n';
}



$('.btn-logout').click(function() {
    localStorage["login"] = 0;
    localStorage["phone"] = "";
    localStorage["password"] = "";
    console.log(localStorage["login"]);
    window.location.href = "";
});

function renderConstraint() {
    // check login
    console.log(localStorage["login"]);
    if (localStorage["login"] == 1) { // đã đăng nhập
        $('.acction-user').text(localStorage["phone"]);
        $('.item-dangky').hide();
        $('.item-dangnhap').hide();
    } else {
        console.log(localStorage["login"]);
        $('.item-dangxuat').hide();

    }


}

renderConstraint();

$('.amnhac').click(function() {
    localStorage["type"] = $(this).attr('data-type');
    window.location.href = "amnhac.html";
});

$('.btn-search').click(function() {
    localStorage["search"] = $('#txt-search').val();
    window.location.href = "timkiem.html";
});

$(".a-login").click(function() {
    var url = window.location.href;
    var arr = url.split("/");
    var refer = arr[arr.length - 1];
    if (refer != "dangnhap.html" && refer != "dangky.html")
        localStorage["refer"] = refer;
});

$(".a-register").click(function() {
    var url = window.location.href;
    var arr = url.split("/");
    var refer = arr[arr.length - 1];
    console.log(refer);
    if (refer != "dangnhap.html" && refer != "dangky.html")
        localStorage["refer"] = refer;
});