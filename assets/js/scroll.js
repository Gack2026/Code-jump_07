// BY KAREN GRIGORYAN

$(document).ready(function () {
    /******************************
      BOTTOM SCROLL TOP BUTTON
   ******************************/

    // declare variable
    var scrollTop = $('.scrollTop');

    $(window).scroll(function () {
        // declare variable
        var topPos = $(this).scrollTop();

        // if user scrolls down - show scroll to top button
        if (topPos > 100) {
            $('.scrollTop').removeClass('is-clicked is-active');
            $('.scrollTop').css({ bottom: '20px', opacity: '1' });
        } else {
            $('.scrollTop').addClass('is-clicked').removeClass('is-active');
            $('.scrollTop').css({ bottom: '-50px', opacity: '0' });
            $('.scrollTop a').attr('style', 'color: #fff !important;');
        }
    }); // scroll END

    //Click event to scroll to top
    $(scrollTop).click(function () {
        var $this = $(this);

        // クリックした瞬間にホバー状態を固定するクラスを付与
        $this.addClass('is-active is-clicked');
        $('.scrollTop a').attr('style', 'color: #0dc0c0 !important;'); // 変更箇所（クリックした瞬間に文字色を指定）

        $('html, body').animate(
            {
                scrollTop: 0,
            },
            0,
            function () {
                // スクロール完了（200ms後）にホバー固定を解除
                $this.removeClass('is-active'); //（スクロール完了時に削除）
                // $('.scrollTop a').attr('style', 'color: #fff !important;');
            },
        );

        return false;
    }); // click() scroll top EMD
}); // ready() END
