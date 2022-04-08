<script src="https://code.highcharts.com/stock/highstock.js"></script>
    <script src="https://code.highcharts.com/stock/modules/data.js"></script>

    <script>
        Highcharts.stockChart('chartContainer', {
            colors: ['#1570ef'],
            rangeSelector : {
                enabled: false
            },
            yAxis: {
                opposite:false
            },
            scrollbar: {
                enabled: false
            },
            title: {
                text: 'Equity Curve'
            },
            navigator : {
                enabled : false
            },
            credits: {
                enabled: false
            },
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        chart: {
                            height: 300
                        },
                        subtitle: {
                            text: null
                        },
                        navigator: {
                            enabled: false
                        }
                    }
                }]
            },

            tooltip: {
                formatter: function() {
                    return '<b>' + formatDate(this.x) + '</b> </br> <b>Rs.' + localFormat(this.y, 0) + '</b>';
                }
            },


            series: [{
                name: 'Rs',
                data: {!! json_encode($graph) !!},
                tooltip: {
                    valueDecimals: 0
                }
            }]
        });
  </script>
