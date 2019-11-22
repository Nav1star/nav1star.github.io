$(function () {
    //Widgets count
    $('.count-to').countTo();

    //Sales count to
    $('.sales-count-to').countTo({
        formatter: function (value, options) {
            return '$' + value.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, ' ').replace('.', ',');
        }
    });

    $('[data-toggle="tooltip"]').tooltip({
        container: 'body'
    });

    //Popover
    $('[data-toggle="popover"]').popover({
        container: 'body'
    });

    // new Chart(document.getElementById("pie_chart").getContext("2d"), getChartJs('doughnut'));
    // new Chart(document.getElementById("bar_chart").getContext("2d"), getChartJs('bar'));
    
    // initSparkline();
    // initDonutChart();
    // initRealTimeChart();

});

var realtime = 'on';
function initRealTimeChart() {
    //Real time ==========================================================================================
    var plot = $.plot('#real_time_chart', [getRandomData()], {
        series: {
            shadowSize: 0,
            color: 'rgb(0, 188, 212)'
        },
        grid: {
            borderColor: '#f3f3f3',
            borderWidth: 1,
            tickColor: '#f3f3f3'
        },
        lines: {
            fill: true
        },
        yaxis: {
            min: 0,
            max: 100
        },
        xaxis: {
            min: 0,
            max: 100
        }
    });

    function updateRealTime() {
        plot.setData([getRandomData()]);
        plot.draw();

        var timeout;
        if (realtime === 'on') {
            timeout = setTimeout(updateRealTime, 320);
        } else {
            clearTimeout(timeout);
        }
    }

    updateRealTime();

    $('#realtime').on('change', function () {
        realtime = this.checked ? 'on' : 'off';
        updateRealTime();
    });
    //====================================================================================================
}

function initSparkline() {
    $(".sparkline").each(function () {
        var $this = $(this);
        $this.sparkline('html', $this.data());
    });
}

function initDonutChart() {
    Morris.Donut({
        element: 'donut_chart',
        data: [{
            label: 'Plans to Test',
            value: 8
        }, {
            label: 'Not Testing',
            value: 30
        }, {
            label: 'Incomplete',
            value: 50
        }, {
            label: 'Completed',
            value: 12
        }],
        colors: ['rgb(0, 188, 212)', 'rgb(233, 30, 99)', 'rgb(255, 152, 0)', 'rgb(0, 150, 136)'],
        formatter: function (y) {
            return y + '%'
        }
    });
}

var data = [], totalPoints = 110;
function getRandomData() {
    if (data.length > 0) data = data.slice(1);

    while (data.length < totalPoints) {
        var prev = data.length > 0 ? data[data.length - 1] : 50, y = prev + Math.random() * 10 - 5;
        if (y < 0) { y = 0; } else if (y > 100) { y = 100; }

        data.push(y);
    }

    var res = [];
    for (var i = 0; i < data.length; ++i) {
        res.push([i, data[i]]);
    }

    return res;
}


function getChartJs(type) {
    var config = null;

    if (type === 'doughnut') {
        config = {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [300, 130, 250, 112],
                    backgroundColor: [
                        "rgb(233, 30, 99)",
                        "rgb(255, 193, 7)",
                        "rgb(0, 188, 212)",
                        "rgb(139, 195, 74)"
                    ]
                }],
                labels: [
                    "Plans to Test",
                    "Not Testing",
                    "Incomplete",
                    "Completed",
                ]

            },
            options: {
                responsive: true,
                legend: {
                    display: false
                    // position: 'bottom'
                },
                tooltips: {
                    bodyFontSize: 16,
                    callbacks: {
                        label: function(tooltipItem, data) {
                            var allData = data.datasets[tooltipItem.datasetIndex].data;
                            var tooltipLabel = data.labels[tooltipItem.index];
                            var tooltipData = allData[tooltipItem.index];
                            var total = 0;
                            for (var i in allData) {
                                total += allData[i];
                            }
                            var tooltipPercentage = Math.round((tooltipData / total) * 100);
                            return tooltipLabel + ': ' + tooltipData + ' (' + tooltipPercentage + '%)';
                        }
                    }
                }

            }
        }
        
    }
    else if (type === 'bar') {
        config = {
            type: 'bar',
            data: {
                labels: ["CWF", "PA-MOI"],
                datasets: [{
                    label: "New",
                    data: [19, 34],
                    backgroundColor: 'rgba(1, 176, 239, 0.8)'
                }, {
                        label: "Major",
                        data: [28, 48],
                        backgroundColor: 'rgba(47, 116, 182, 0.8)'
                    },
                        {
                            label: "Minor",
                            data: [8, 28],
                            backgroundColor: 'rgba(31, 78, 120, 0.8)'
                        }]
            },
            options: {
                responsive: true,
                legend: {
                    display: true,
                    position: 'bottom',
                    
                },
                tooltips: {
                    bodyFontSize: 14
                }

            }
            
        }
    }
    return config;
}


// Notification Message Dialog

$(function () {
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
});

function showBasicMessage() {
    swal("Password of the Month", "Pdk83kD");
}