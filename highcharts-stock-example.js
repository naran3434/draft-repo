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

        function localFormat(number, allowedDecimal) {
            if (allowedDecimal === 0) {
                return Math.round(number).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
            }
            const parts = number.split(".");
            return parts[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") +
                (parts[1] ? "." + parts[1] : "");
        }

        function formatDate(value){
            const dateObject = new Date(value);
            return dateObject.toLocaleString("en-US", {day: "numeric"}) + ', '
            + dateObject.toLocaleString("en-US", {month: "short"}) + ' '
                + dateObject.toLocaleString("en-US", {year: "numeric"});
        }
  </script>
