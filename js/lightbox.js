$(document).ready(function() {
    var thisImg = $('.images img');
    var modalImg = $('.modal-body img');
    //    var thisTitle = $('.images .caption h2').text();
    //    var modalTitle = $('.modal-title');

    $()
    $(thisImg).attr('data-toggle', 'modal').attr('data-target', '#myModal');

    thisImg.click(function() {
        var imgSource = $(this).attr('src');
        modalImg.attr('src', imgSource);
        //        function showModal(data)
        //        {
        //            $("#myModal .modal-title").text(data)
        //        }
        //        showModal(thisTitle);

    });

});


