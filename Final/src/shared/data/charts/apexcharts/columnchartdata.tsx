
// Basic Column Chart

export const Columnbasicseries = [{
    name: "Net Profit",
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
}, {
    name: "Revenue",
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
}, {
    name: "Free Cash Flow",
    data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
}]
export const Columnbasicoptions = {
    chart: {
        type: "bar",
        height: 320,
        events: {
            mounted: (chart: { windowResizeHandler: () => void; }) => {
                chart.windowResizeHandler();
            }
        },
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '60%',
            borderRadius: 2,
        },
    },
    grid: {
        borderColor: "#f2f5f7",
    },
    dataLabels: {
        enabled: false
    },
    colors: ["#03b562", "#7f67ff", "#fd4963"],
    stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
    },
    xaxis: {
        categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
        labels: {
            show: true,
            style: {
                colors: "#8c9097",
                fontSize: "11px",
                fontWeight: 600,
                cssClass: "apexcharts-xaxis-label",
            },
        }
    },
    yaxis: {
        title: {
            text: "$ (thousands)",
            style: {
                color: "#8c9097",
            }
        },
        labels: {
            show: true,
            style: {
                colors: "#8c9097",
                fontSize: "11px",
                fontWeight: 600,
                cssClass: "apexcharts-xaxis-label",
            },
        }
    },
    fill: {
        opacity: 1
    },
    tooltip: {
        y: {
            formatter: function (val: string) {
                return "$ " + val + " thousands";
            }
        }
    }
}

//Column Chart With Datalabels

export const Columnchartseries = [{
    name: "Inflation",
    data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
}]
export const Columnchartoptions = {
    chart: {
        height: 320,
        type: "bar",
        events: {
            mounted: (chart: { windowResizeHandler: () => void; }) => {
                chart.windowResizeHandler();
            }
        },
    },
    grid: {
        borderColor: "#f2f5f7",
    },
    plotOptions: {
        bar: {
            columnWidth: '30%',
            borderRadius: 3,
            dataLabels: {
                position: 'top', // top, center, bottom
            },
        }
    },
    dataLabels: {
        enabled: true,
        formatter: function (val: string) {
            return val + "%";
        },
        offsetY: -20,
        style: {
            fontSize: "12px",
            colors: ["#8c9097"]
        }
    },
    colors: ["#03b562"],
    xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        position: "top",
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false
        },
        crosshairs: {
            fill: {
                type: "gradient",
                gradient: {
                    colorFrom: "#D8E3F0",
                    colorTo: "#BED1E6",
                    stops: [0, 100],
                    opacityFrom: 0.4,
                    opacityTo: 0.5,
                }
            }
        },
        tooltip: {
            enabled: true,
        },
        labels: {
            show: true,
            style: {
                colors: "#8c9097",
                fontSize: "11px",
                fontWeight: 600,
                cssClass: "apexcharts-xaxis-label",
            },
        }
    },
    yaxis: {
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false,
        },
        labels: {
            show: false,
            formatter: function (val: string) {
                return val + "%";
            }
        }

    },
    title: {
        text: "Monthly Inflation in Argentina, 2002",
        floating: true,
        offsetY: 330,
        align: "center",
        style: {
            color: "#444"
        }
    }
}

//Stacked Column Chart

export const Stackcolumnseries = [{
    name: 'PRODUCT A',
    data: [44, 55, 41, 67, 22, 43]
}, {
    name: 'PRODUCT B',
    data: [13, 23, 20, 8, 13, 27]
}, {
    name: 'PRODUCT C',
    data: [11, 17, 15, 15, 21, 14]
}, {
    name: 'PRODUCT D',
    data: [21, 7, 25, 13, 22, 8]
}]
export const Stackcolumnoptions = {
    chart: {
        type: 'bar',
        height: 320,
        stacked: true,
        toolbar: {
            show: true
        },
        zoom: {
            enabled: true
        },
        
    },
    grid: {
        borderColor: '#f2f5f7',
    },
    colors: ["#03b562", "#7f67ff", "#fd4963", "#ffa909"],
    responsive: [{
        breakpoint: 480,
        options: {
            legend: {
                position: 'bottom',
                offsetX: -10,
                offsetY: 0
            }
        }
    }],
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '30%',
            borderRadius: 2,
        },
    },
    xaxis: {
        type: 'datetime',
        categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT',
            '01/05/2011 GMT', '01/06/2011 GMT'
        ],
        labels: {
            show: true,
            style: {
                colors: "#8c9097",
                fontSize: '11px',
                fontWeight: 600,
                cssClass: 'apexcharts-xaxis-label',
            },
        }
    },
    legend: {
        position: 'right',
        offsetY: 40
    },
    fill: {
        opacity: 1
    },
    yaxis: {
        labels: {
            show: true,
            style: {
                colors: "#8c9097",
                fontSize: '11px',
                fontWeight: 600,
                cssClass: 'apexcharts-xaxis-label',
            },
        }
    }
}

//100% Stacked Column Chart

export const Columnstack1series = [{
    name: 'Revenue by Product Line',
    data: [44, 55, 41, 67, 22, 43, 21, 49]
}, {
    name: 'Revenue by Channel',
    data: [13, 23, 20, 8, 13, 27, 33, 12]
}, {
    name: 'Subscription Growth',
    data: [11, 17, 15, 15, 21, 14, 15, 13]
}]

export const Columnstack1options = {
    chart: {
        type: 'bar',
        height: 320,
        stacked: true,
        stackType: '100%'
    },
    grid: {
        borderColor: '#f2f5f7',
    },
    responsive: [{
        breakpoint: 480,
        options: {
            legend: {
                position: 'bottom',
                offsetX: -10,
                offsetY: 0
            }
        }
    }],
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '40%',
            borderRadius: 2,
        },
    },
    colors:  ["#03b562", "#7f67ff", "#fd4963"],
    xaxis: {
        categories: ['2011 Q1', '2011 Q2', '2011 Q3', '2011 Q4', '2012 Q1', '2012 Q2',
            '2012 Q3', '2012 Q4'
        ],
        labels: {
            show: true,
            style: {
                colors: "#8c9097",
                fontSize: '11px',
                fontWeight: 600,
                cssClass: 'apexcharts-xaxis-label',
            },
        }
    },
    yaxis: {
        labels: {
            show: true,
            style: {
                colors: "#8c9097",
                fontSize: '11px',
                fontWeight: 600,
                cssClass: 'apexcharts-xaxis-label',
            },
        }
    },
    fill: {
        opacity: 1
    },
    legend: {
        position: 'right',
        offsetX: 0,
        offsetY: 50,
            markers: {
                size: 4,
                strokeWidth: 0,
                strokeColor: '#fff',
                fillColors: undefined,
                radius: 12,
                customHTML: undefined,
                onClick: undefined,
                offsetX: 0,
                offsetY: 0
            },
    },
}

//Column Chart With Markers

export const Columnmakerseries = [
    {
        name: 'Actual',
        data: [
            {
                x: '2011',
                y: 1292,
                goals: [
                    {
                        name: 'Expected',
                        value: 1400,
                        strokeHeight: 5,
                        strokeColor: '#03b562'
                    }
                ]
            },
            {
                x: '2012',
                y: 4432,
                goals: [
                    {
                        name: 'Expected',
                        value: 5400,
                        strokeHeight: 5,
                        strokeColor: '#03b562'
                    }
                ]
            },
            {
                x: '2013',
                y: 5423,
                goals: [
                    {
                        name: 'Expected',
                        value: 5200,
                        strokeHeight: 5,
                        strokeColor: '#03b562'
                    }
                ]
            },
            {
                x: '2014',
                y: 6653,
                goals: [
                    {
                        name: 'Expected',
                        value: 6500,
                        strokeHeight: 5,
                        strokeColor: '#03b562'
                    }
                ]
            },
            {
                x: '2015',
                y: 8133,
                goals: [
                    {
                        name: 'Expected',
                        value: 6600,
                        strokeHeight: 13,
                        strokeWidth: 0,
                        strokeLineCap: 'round',
                        strokeColor: '#03b562'
                    }
                ]
            },
            {
                x: '2016',
                y: 7132,
                goals: [
                    {
                        name: 'Expected',
                        value: 7500,
                        strokeHeight: 5,
                        strokeColor: '#03b562'
                    }
                ]
            },
            {
                x: '2017',
                y: 7332,
                goals: [
                    {
                        name: 'Expected',
                        value: 8700,
                        strokeHeight: 5,
                        strokeColor: '#03b562'
                    }
                ]
            },
            {
                x: '2018',
                y: 6553,
                goals: [
                    {
                        name: 'Expected',
                        value: 7300,
                        strokeHeight: 2,
                        strokeDashArray: 2,
                        strokeColor: '#03b562'
                    }
                ]
            }
        ]
    }
]
export const Columnmakeroptions = {
    chart: {
        height: 320,
        type: 'bar'
    },
    plotOptions: {
        bar: {
            columnWidth: '30%',
            borderRadius: 3,
        }
    },
    colors: ['#7f67ff'],
    dataLabels: {
        enabled: false
    },
    grid: {
        borderColor: '#f2f5f7',
    },
    legend: {
        show: true,
        showForSingleSeries: true,
        customLegendItems: ['Actual', 'Expected'],
        markers: {
            fillColors: ['#7f67ff', '#03b562']
        }
    },
    xaxis: {
        labels: {
            show: true,
            style: {
                colors: "#8c9097",
                fontSize: '11px',
                fontWeight: 600,
                cssClass: 'apexcharts-xaxis-label',
            },
        }
    },
    yaxis: {
        labels: {
            show: true,
            style: {
                colors: "#8c9097",
                fontSize: '11px',
                fontWeight: 600,
                cssClass: 'apexcharts-xaxis-label',
            },
        }
    }
}

//Column Chart With Rotated Labels

export const Columnrotateseries = [{
    name: 'Servings',
    data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65, 35]
}]

export const Columnrotateoptions = {
    chart: {
        height: 320,
        type: 'bar',
    },
    plotOptions: {
        bar: {
            borderRadius: 3,
            columnWidth: '40%',
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ["#03b562"],
    stroke: {
        width: 2
    },
    grid: {
        borderColor: '#f2f5f7',
    },
    xaxis: {
        labels: {
            rotate: -45,
            rotateAlways: true,
            style: {
                colors: "#8c9097",
                fontSize: '11px',
                fontWeight: 600,
                cssClass: 'apexcharts-xaxis-label',
            }
        },
        categories: ['Apples', 'Oranges', 'Strawberries', 'Pineapples', 'Mangoes', 'Bananas',
            'Blackberries', 'Pears', 'Watermelons', 'Cherries', 'Pomegranates', 'Tangerines', 'Papayas'
        ],
        tickPlacement: 'on'
    },
    yaxis: {
        labels: {
            style: {
                colors: "#8c9097",
                fontSize: '11px',
                fontWeight: 600,
                cssClass: 'apexcharts-yaxis-label',
            }
        },
        title: {
            text: 'Servings',
            style: {
                color: "#8c9097",
            }
        },
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'light',
            type: "horizontal",
            shadeIntensity: 0.25,
            gradientToColors: undefined,
            inverseColors: true,
            opacityFrom: 0.85,
            opacityTo: 0.85,
            stops: [50, 0, 100]


        }
    },
    annotations: {
        points: [{
            x: 'Bananas',
            seriesIndex: 0,
            label: {
                borderColor: '#7f67ff',
                offsetY: 0,
                style: {
                    color: '#fff',
                    background: '#7f67ff',
                },
                text: 'Bananas are good',
            }
        }]
    },
}

//Column Chart With Negative Values

export const Columnvalueseries = [{
    name: 'Cash Flow',
    data: [1.45, 5.42, 5.9, -0.42, -12.6, -18.1, -18.2, -14.16, -11.1, -6.09, 0.34, 3.88, 13.07,
        5.8, 2, 7.37, 8.1, 13.57, 15.75, 17.1, 19.8, -27.03, -54.4, -47.2, -43.3, -18.6, -
        48.6, -41.1, -39.6, -37.6, -29.4, -21.4, -2.4
    ]
}]
export const Columnvalueoptions = {
    chart: {
        type: 'bar',
        height: 320
    },
    plotOptions: {
        bar: {
            colors: {
                ranges: [{
                    from: -100,
                    to: -46,
                    color: '#7f67ff'
                }, {
                    from: -45,
                    to: 0,
                    color: '#fd4963'
                }]
            },
            columnWidth: '80%',
            borderRadius: 3,
        }
    },
    grid: {
        borderColor: '#f2f5f7',
    },
    colors: ["#03b562"],
    dataLabels: {
        enabled: false,
    },
    yaxis: {
        title: {
            text: 'Growth',
            style: {
                color: "#8c9097",
            }
        },
        labels: {
            formatter: function (y: number) {
                return y.toFixed(0) + "%";
            },
            // labels: {
            //     show: true,
            //     style: {
            //         colors: "#8c9097",
            //         fontSize: '11px',
            //         fontWeight: 600,
            //         cssClass: 'apexcharts-xaxis-label',
            //     },
            // }
        }
    },
    xaxis: {
        type: 'datetime',
        categories: [
            '2011-01-01', '2011-02-01', '2011-03-01', '2011-04-01', '2011-05-01', '2011-06-01',
            '2011-07-01', '2011-08-01', '2011-09-01', '2011-10-01', '2011-11-01', '2011-12-01',
            '2012-01-01', '2012-02-01', '2012-03-01', '2012-04-01', '2012-05-01', '2012-06-01',
            '2012-07-01', '2012-08-01', '2012-09-01', '2012-10-01', '2012-11-01', '2012-12-01',
            '2013-01-01', '2013-02-01', '2013-03-01', '2013-04-01', '2013-05-01', '2013-06-01',
            '2013-07-01', '2013-08-01', '2013-09-01'
        ],
        labels: {
            rotate: -90,
            style: {
                colors: "#8c9097",
                fontSize: '11px',
                fontWeight: 600,
                cssClass: 'apexcharts-xaxis-label',
            },
        }
    }
}

//Range Column Chart

export const Columnseries = [{
    data: [{
        x: 'Team A',
        y: [1, 5]
    }, {
        x: 'Team B',
        y: [4, 6]
    }, {
        x: 'Team C',
        y: [5, 8]
    }, {
        x: 'Team D',
        y: [3, 11]
    }]
}, {
    data: [{
        x: 'Team A',
        y: [2, 6]
    }, {
        x: 'Team B',
        y: [1, 3]
    }, {
        x: 'Team C',
        y: [7, 8]
    }, {
        x: 'Team D',
        y: [5, 9]
    }]
}]
export const Columnoptions = {
    chart: {
        type: 'rangeBar',
        height: 320
    },
    grid: {
        borderColor: '#f2f5f7',
    },
    colors: ["#03b562", "#7f67ff"],
    plotOptions: {
        bar: {
            horizontal: false,
            borderRadius:3,
            columnWidth: '30%',
        }
    },
    xaxis: {
        labels: {
            show: true,
            style: {
                colors: "#8c9097",
                fontSize: '11px',
                fontWeight: 600,
                cssClass: 'apexcharts-xaxis-label',
            },
        }
    },
    yaxis: {
        labels: {
            show: true,
            style: {
                colors: "#8c9097",
                fontSize: '11px',
                fontWeight: 600,
                cssClass: 'apexcharts-xaxis-label',
            },
        }
    },
    dataLabels: {
        enabled: true
    }
}

//Distributed Columns Chart

export const Column1series = [{
    data: [21, 22, 10, 28, 16, 21, 13, 30]
}]
export const Column1options = {
    chart: {
        height: 320,
        type: "bar",
        events: {
            click: function () {
            },
            mounted: (chart: { windowResizeHandler: () => void; }) => {
                chart.windowResizeHandler();
            }
        },

    },
    colors:['#03b562', '#7f67ff', '#fd4963', '#ffa909', '#0fbcf9', 'rgb(254, 124, 88)',"rgb(254, 84, 155)","rgb(0, 216, 216)"],
    plotOptions: {
        bar: {
            columnWidth: '30%',
            distributed: true,
            borderRadius:3,
        }
    },
    dataLabels: {
        enabled: false
    },
    legend: {
        show: false
    },
    grid: {
        borderColor: "#f2f5f7",
    },
    xaxis: {
        categories: [
            ["John", "Doe"],
            ["Joe", "Smith"],
            ["Jake", "Williams"],
            "Amber",
            ["Peter", "Brown"],
            ["Mary", "Evans"],
            ["David", "Wilson"],
            ["Lily", "Roberts"],
        ],
        labels: {
            style: {
                // colors: colors,
                fontSize: "12px"
            }
        }
    },
    yaxis: {
        labels: {
            show: true,
            style: {
                colors: "#8c9097",
                fontSize: "11px",
                fontWeight: 600,
                cssClass: "apexcharts-yaxis-label",
            },
        }
    }
}