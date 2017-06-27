$(document).ready(() => {
    // Toggle between Boka och Avboka
    var $tabPane = $('.tab-pane'),
        inactiveTabId = $tabPane.attr('id');

    if(!$tabPane.hasClass('active')) {
        // Then activate it
        $tabPane.parents('.tab-content')
            .find('.tab-pane')
            .each(function(index, tab) {
                var tabId = $(tab).attr('id'),
                    $li = $('a[href="#' + tabId + '"][data-toggle="tab"]').parent();

                if(tabId === inactiveTabId) {
                    // activate the tab pane
                    $(tab).addClass('active');
                    // and the associated <li> element
                    $li.addClass('active');
                } else {
                    $(tab).removeClass('active');
                    $li.removeClass('active');
                }
                $('#cancelTab').click(() => {
                    $('#list').hide();
                });
            });

    };

    $("#searchCars").click(() => {
        let val1 = $("#fromDate").val();
        let val2 = $("#toDate").val();

        $("span").text(val1);
        $("span").text(val2);


        //  let str = param({ var1: val1, var2: val2 });
    })



});