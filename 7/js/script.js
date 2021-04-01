// (function($) {

//     var discoverBtn = $('.discover');

//     discoverBtn.on('click', function(e) {
//         e.preventDefault();

//         var id = this.hash;

//         $('html').animate({
//             scrollTop: $(id).offset().top
//         }, 1500, function() {
//             window.location.hash = id;
//         });
       
//     });

//     var navigaiton = $('.navigation__nav'),
//         navCheck = $('.navigation__checkbox');

//     // $('.navigation__button').on('click', function() {
//     //     navCheck.toggle().prop('checked');
//     // })

//     navigaiton.find('.navigation__link').on('click', function(e) {
//         e.preventDefault();

//         var id = this.hash;

//         navCheck.attr('checked', false);
//         $('html').animate({
//             scrollTop: $(this.hash).offset().top,
//         }, 2000);
//     })

// })(jQuery)

(function($) {

    var popupBook = $('#booking'),
        discoverBtn = $('.discover'),
        navBtn = $('.navigation__link'),
        navCheck = $('.navigation__checkbox');

    popupBook.on('click', function(e) {
        var hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 2000);
    });

    discoverBtn.on('click', function(e) {
        e.preventDefault();

        var ID = this.hash;

        $('html, body').animate({ scrollTop: $(this.hash).offset().top }, 2000, function() {
            window.location.hash = ID;
        });
    });

    
    navBtn.on('click', function(e) {
        e.preventDefault();

        var ID = this.hash

        navCheck.prop('checked', false);
        $('html, body').animate({ scrollTop: $(ID).offset().top }, 1500, function() {
            window.location.hash = ID;
        });
    });


})(jQuery)