$("#navbar").on('click', 'a', function (event) {
    event.preventDefault();
    if ($(this).attr("href") != undefined) {
        var element = $($.attr(this, 'href'));
        if (element.length > 0) {
            var body = $("html, body");
            body.stop().animate({ scrollTop: element.offset().top - 50 }, 500, 'swing', function () {
                //alert("Finished animating");
            });
        }
    }
});

//Mapa
$(".iframe-container").on("click", function () {
    $(this).children("iframe").addClass("active")
});

$(".iframe-container").on("mouseleave", function () {
    $(this).children("iframe").removeClass("active")
});