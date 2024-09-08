;

(function($) {

    var btn_menu = $('.menu-wrapper .menu-button');

    if (btn_menu.length > 0) {
        /*
            Attach click event listener to the menu button
        */
        btn_menu.click(function(e) {
            // 
            e.stopImmediatePropagation();
            //
            HandleMenuClick();
            // e.stopPropagation & e.preventDefault()
            return false;
        });
    }

    /*
        The click event handler for the menu button
    */
    function HandleMenuClick()
    {
        var menu = $('.menu-wrapper .menu');
        
        if (menu.length > 0) 
        {
            menu.toggleClass('showing');
        }
        else
        {
            console.log("Did not find menu!");
        }
    }
    
    // $('body').click(function(e) {
    //     var menu = $('.menu-wrapper .menu');
    //     if (menu.length > 0) 
    //     {
    //         console.log("Found", menu[0]);
    //         if(e.target !== menu[0]) {
    //             menu.removeClass('showing');
    //         }
    //     }
    // });



    // Fix the horizontal nav (Icons Bar) to top, when you scroll past it
    var icons_bar = $('.icons-bar');
    if (icons_bar.length > 0) {

        var top = icons_bar.offset().top - parseFloat(icons_bar.css('marginTop').replace(/auto/, 0));
        
        $(window).scroll(function (event) {
            // what the y position of the scroll is
            var y = $(this).scrollTop();
            
            // whether that's below the form
            if (y >= top) {
                // if so, ad the fixed class
                icons_bar.addClass('fixed');
            } else {
                // otherwise remove it
                icons_bar.removeClass('fixed');
            }
        });
        
    }



})(jQuery);