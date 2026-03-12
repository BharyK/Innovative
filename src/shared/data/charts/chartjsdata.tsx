
import { Chart, ArcElement, Tooltip, Legend, registerables } from "chart.js";
Chart.register(...registerables, ArcElement, Tooltip, Legend);

//Chartjs Line Chart

export const Option = {
	responsive: true,
	maintainAspectRatio: false,
	plugins: {
		legend: {
			display: true,
		},
	},
	scales: {
		y: {
			beginAtZero: true,
			grid: {
				color: "rgba(142, 156, 173,0.1)"
			}
		},
		x: {
			grid: {
				color: "rgba(142, 156, 173,0.1)"
			}
		}
	},
	cutout: 90,
};
export const Data = {
	type: "line",
	labels: [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
	],
	datasets: [{
		label: "My First dataset",
		backgroundColor: 'rgb(3, 181, 98)',
            borderColor: 'rgb(3, 181, 98)',
            data: [0, 10, 5, 2, 20, 30, 45],

	}]
};

//Chartjs Bar Chart

export const Option1 = {

	responsive: true,
	maintainAspectRatio: false,
	plugins: {
		legend: {
			display: true,
		},
	},
	scales: {
		y: {
			beginAtZero: true,
			grid: {
				color: "rgba(142, 156, 173,0.1)"
			}
		},
		x: {
			grid: {
				color: "rgba(142, 156, 173,0.1)"
			}
		}
	}
};
export const Data1 = {
	type: "bar",
	labels: [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
	],
	datasets: [{
		label: "My First Dataset",
		data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
			'rgba(3, 181, 98, 0.2)',
			'rgba(127, 103, 257, 0.2)',
			'rgba(253, 73, 99, 0.2)',
			'rgba(255, 169, 9, 0.2)',
			'rgba(83, 196, 5, 0.2)',
			'rgba(15, 188, 249, 0.2)',
			'rgba(254, 124, 88, 0.2)'
		],
		borderColor: [ 
			'rgb(3, 181, 98)',
			'rgb(127, 103, 257)',
			'rgb(253, 73, 99)',
			'rgb(255, 169, 9)',
			'rgb(83, 196, 5)',
			'rgb(15, 188, 249)',
			'rgb(254, 124, 88)'
		],
		borderWidth: 1
	}]
};

//Chartjs Pie Chart

export const Option2 = {

	responsive: true,
	maintainAspectRatio: false,
	plugins: {
		legend: {
			display: true,
		},
	},
};
export const Data2 = {
	type: "pie",
	labels: [
		"Green",
		"Blue",
		"Red"
	],
	datasets: [{
		label: 'My First Dataset',
		data: [300, 50, 100],
		backgroundColor: [
			'rgb(3, 181, 98)',
			'rgb(127, 103, 257)',
			'rgb(253, 73, 99)'
		],
		hoverOffset: 4
	}]
};

//Chartjs Doughnut Chart

export const Option3 = {

	responsive: true,
	maintainAspectRatio: false,
	plugins: {
		legend: {
			display: true,
		},
	},
};
export const Data3 = {
	type: "donut",
	labels: [
		"Green",
		"Blue",
		"Red"
	],
	datasets: [{
		label: 'My First Dataset',
		data: [300, 50, 100],
		backgroundColor: [
		   'rgb(3, 181, 98)',
			'rgb(127, 103, 257)',
			'rgb(253, 73, 99)'
		],
		hoverOffset: 4
	}]
};

// Mixed Chart 

export const Data9 = {
    labels: ["January", "February", "March", "April"],
    datasets: [{
		type: 'bar',
		label: 'Bar Dataset',
		data: [10, 20, 30, 40],
		borderColor: 'rgb(3, 181, 98)',
		backgroundColor: 'rgba(3, 181, 98, 0.2)'
	}, {
		type: 'line',
		label: 'Line Dataset',
		data: [50, 50, 50, 50],
		fill: false,
		borderColor: 'rgb(127, 103, 257)'
	}]
  };

 export const Options9 = {
    responsive: true,
	scales: {
		y: {
			beginAtZero: true,
			grid: {
				color: "rgba(142, 156, 173,0.1)"
			}
		},
		x: {
			grid: {
				color: "rgba(142, 156, 173,0.1)"
			}
		}
	}
  };


//Chartjs Polar Chart

export const Option5 = {

	responsive: true,
	maintainAspectRatio: false,
	plugins: {
		legend: {
			display: true,
		},
	},
	scales: {
		r: { // Radial scale
			grid: {
				color: "rgba(142, 156, 173, 0.1)", // Grid line color
				circular: true // Makes the grid lines circular
			},
			angleLines: {
				color: "rgba(142, 156, 173, 0.2)", // Lines radiating from the center
			},
		}
	},

};
export const Data5 = {
	type: "polarArea",
	labels: [
		'Green',
		'Blue',
		'Yellow',
		'Red',
		'Grey'
	],
	datasets: [{
		label: 'My First Dataset',
		data: [11, 16, 7, 3, 14],
		backgroundColor: [
			'rgb(3, 181, 98)',
			'rgb(127, 103, 257)',
			'rgb(255, 169, 9)',
			'rgb(253, 73, 99)',
			'rgb(201, 203, 207)'
		]
	}]
};

//Chartjs Radial Chart

export const Option6 = {

	responsive: true,
	maintainAspectRatio: false,
	plugins: {
		legend: {
			display: true,
		},
	},
	scales: {
		r: { // Radial scale
			grid: {
				color: "rgba(142, 156, 173, 0.1)", // Grid line color
				circular: true // Makes the grid lines circular
			},
			angleLines: {
				color: "rgba(142, 156, 173, 0.2)", // Lines radiating from the center
			},
		}
	},

};
export const Data6 = {
	type: "radar",
	labels: [
		"Eating",
		"Drinking",
		"Sleeping",
		"Designing",
		"Coding",
		"Cycling",
		"Running"
	],
	datasets: [{
		label: 'My First Dataset',
		data: [65, 59, 90, 81, 56, 55, 40],
		fill: true,
		backgroundColor: 'rgba(3, 181, 98, 0.2)',
		borderColor: 'rgb(3, 181, 98)',
		pointBackgroundColor: 'rgb(3, 181, 98)',
		pointBorderColor: '#fff',
		pointHoverBackgroundColor: '#fff',
		pointHoverBorderColor: 'rgb(3, 181, 98)'
	}, {
		label: 'My Second Dataset',
		data: [28, 48, 40, 19, 96, 27, 100],
		fill: true,
		backgroundColor: 'rgba(127, 103, 257, 0.2)',
		borderColor: 'rgb(127, 103, 257)',
		pointBackgroundColor: 'rgb(127, 103, 257)',
		pointBorderColor: '#fff',
		pointHoverBackgroundColor: '#fff',
		pointHoverBorderColor: 'rgb(127, 103, 257)'
	}]
};

//Chartjs Scatter Chart

export const Option7 = {
	responsive: true,
	maintainAspectRatio: false,
	plugins: {
		legend: {
			display: true,
		},
		scales: {
			y: {
				beginAtZero: true,
				grid: {
					color: "rgba(142, 156, 173,0.1)"
				}
			},
			x: {
				grid: {
					color: "rgba(142, 156, 173,0.1)"
				}
			}
		}
	},
	scales: {
		x: {
			type: "linear",
			position: "bottom",
			grid: {
				color: "rgba(142, 156, 173,0.1)"
			}
		},
		y: {
			grid: {
				color: "rgba(142, 156, 173,0.1)"
			}
		}
	}

};
export const Data7 = {
	type: "scatter",
	datasets: [{
		label: "Scatter Dataset",
		data: [{
			x: -10,
			y: 0
		}, {
			x: 0,
			y: 10
		}, {
			x: 10,
			y: 5
		}, {
			x: 0.5,
			y: 5.5
		}],
		backgroundColor: 'rgb(3, 181, 98)'
	}],
};

//Chartjs Bubble Chart

export const Option8 = {
	responsive: true,
	maintainAspectRatio: false,
	plugins: {
		legend: {
			display: true,
		},
	},
	scales: {
		x: {
			type: "linear",
			position: "bottom",
			grid: {
				color: "rgba(142, 156, 173,0.1)"
			}
		},
		y: {
			grid: {
				color: "rgba(142, 156, 173,0.1)"
			}
		}
	}

};
export const Data8 = {
	type: "bubble",
	datasets: [{
		label: "First Dataset",
		data: [{
			x: 20,
			y: 30,
			r: 15
		}, {
			x: 40,
			y: 10,
			r: 10
		}],
		backgroundColor: 'rgb(3, 181, 98)'
	}]
};

