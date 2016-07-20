/**
 * Created by GloryManU on 04.07.2016.
 */
(function(){
    $("#mainSlider").lightSlider({
        item: 1,
        pager: false
    });
    $("#saleSlider").lightSlider({
        item: 4,
        controls: false,
        slideMargin: 20,
        pager: true
    });
    $("#noveltySlider").lightSlider({
        item: 4,
        controls: false,
        slideMargin: 20,
        pager: true
    });
    $(".cardSlider").lightSlider({
        gallery: true,
        item: 1,
        vertical: true,
        verticalHeight: 666,
        vThumbWidth: 176,
        thumbItem: 3,
        thumbMargin: 12,
        slideMargin: 0
    });
    $(".reviews-textSlider").lightSlider({
        item: 2,
        vertical: true,
        slideMargin: 0,
        pager: false,
        slideMove: 1,
        verticalHeight: 300
    });
})();
