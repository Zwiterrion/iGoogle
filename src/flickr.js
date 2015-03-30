function showpics() {

    var pic = $("#box").val();
    $.getJSON('http://api.flickr.com/services/feeds/photos_public.gne?lang=fr-fr&tags='
            + pic + "&tagmode=any&format=json&jsoncallback=?",
        function(data) {
            $("#images").hide().html(data).fadeIn('fast');

            $.each(data.items, function(i, item) {
                $("<img/>").attr("src", item.media.m).attr("width", "50px;").attr("height", "50px;").attr("margin-right", "15px;").appendTo("#images");

                if (i == 0)
                    return false;
            });
       })
};