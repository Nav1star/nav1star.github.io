app.controller('DashboardCtrl', function($scope, $route, $location){


    $scope.$on('$routeChangeSuccess', function() {


    //Widgets count
    $('.count-to').countTo();

    //Sales count to
    $('.sales-count-to').countTo({
        formatter: function (value, options) {
            return '$' + value.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, ' ').replace('.', ',');
        }
    });

     //Tooltip Initialize
    $('[data-toggle="tooltip"]').tooltip({
        container: 'body'
    });

    //Popover Initialize
    $('[data-toggle="popover"]').popover({
        container: 'body'
    });

    // ChartJS Initialize
    new Chart(document.getElementById("pie_chart").getContext("2d"), getChartJs('doughnut'));
    new Chart(document.getElementById("bar_chart").getContext("2d"), getChartJs('bar'));

    

    // initSparkline();
    // initDonutChart();
    // initRealTimeChart();


    //Sweet Alerts Initialzie

    $('.js-sweetalert a').on('click', function () {
        var type = $(this).data('type');
        if (type === 'basic') {
            showBasicMessage();
        }
        else if (type === 'with-title') {
            showWithTitleMessage();
        }
        else if (type === 'success') {
            showSuccessMessage();
        }
        else if (type === 'confirm') {
            showConfirmMessage();
        }
        else if (type === 'cancel') {
            showCancelMessage();
        }
        else if (type === 'with-custom-icon') {
            showWithCustomIconMessage();
        }
        else if (type === 'html-message') {
            showHtmlMessage();
        }
        else if (type === 'autoclose-timer') {
            showAutoCloseTimerMessage();
        }
        else if (type === 'prompt') {
            showPromptMessage();
        }
        else if (type === 'ajax-loader') {
            showAjaxLoaderMessage();
        }
    });

    // setTimeout(function () { $('.page-loader-wrapper').fadeOut(); }, 100);


    // $.AdminBSB.browser.activate();
    // $.AdminBSB.leftSideBar.activate();
    // $.AdminBSB.rightSideBar.activate();
    // $.AdminBSB.navbar.activate();
    // $.AdminBSB.dropdownMenu.activate();
    // $.AdminBSB.input.activate();
    $.AdminBSB.select.activate();
    // $.AdminBSB.search.activate();
    

    });




});


    //     var anno3 = new Anno({
    //   target  : '#one',
    //   position: 'center-left',
    //   content : "Anno buttons are completely customizable; you can even have none!",
    //   buttons : [AnnoButton.NextButton]
    // })
    
