$(window).scroll(menuBackgroundColor);

function menuBackgroundColor() {
    var a = $(window).scrollTop();
    if (a >= 0) {
        if (a < 200) {
            $("header").css({
                "background": "rgba(46, 138, 138," + a / 200 + ")"
            });
        } else {
            $("header").css({
                "background": "rgba(46, 138, 138, 1.0)"
            });
        }
    }
}