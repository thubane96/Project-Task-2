

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});

//line graph
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawLineChart);

function drawLineChart() {
  var data = google.visualization.arrayToDataTable([
    ['Month', 'Percent'],
    ['Jan',  0],
    ['Feb',  46],
    ['Mar',  35],
    ['Apr',  10],
    ['May',  38],
    ['Jun',  70],
    ['Jul',  30],
    ['Aug',  40],
    ['Sep',  70],
    ['Oct',  65],
    ['Nov',  50],
    ['Dec',  96]
  ]);

  var options = {
    title: 'Overall Satisfaction by Month',
    curveType: 'function',
    legend: { position: 'none' },
  };

  var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

  chart.draw(data, options);
}

//Bar graph

google.charts.load('current', {'packages':['corechart', 'bar']});
google.charts.setOnLoadCallback(drawStuff);

function drawStuff() {

  var chartDiv = document.getElementById('chart_div');

  var data = google.visualization.arrayToDataTable([
      ['', 'Attendees', 'Registrants'],
      ['Negotiation', 27, 47],
      ['Persuasion', 15, 20],
      ['Power', 53, 75],
      ['Time management', 68, 70]
  ]);

  var materialOptions = {
    width: 485,
    height: 260,
    chart: {
      title: 'N° Attendees and Registrant by Course'
    },
    series: {
      0: { axis: 'distance' }, // Bind series 0 to an axis named 'distance'.
      1: { axis: 'brightness' } // Bind series 1 to an axis named 'brightness'.
    },
  };
  var materialChart = new google.charts.Bar(chartDiv);
  materialChart.draw(data, google.charts.Bar.convertOptions(materialOptions));
};


//Second Bar graph

google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawBar);

function drawBar() {
  var data = google.visualization.arrayToDataTable([
    ['', 'Attendees', 'Registrants'],
    ['Session 1', 10, 46],
    ['Session 2', 43, 45],
    ['Session 3', 26 ,46],
    ['Session 4', 35, 50],
    ['Session 5', 5, 15],
    ['Session 6', 50, 57],
  ]);

  var options = {
    width: 485,
    height: 258,
    chart: {
      title: 'N° Attendees and Registrants by Session'
    }
  };

  var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

  chart.draw(data, google.charts.Bar.convertOptions(options));
};

// Map charts
google.charts.load('current', {
  'packages':['geochart'],
  'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
});
google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
  var data = google.visualization.arrayToDataTable([
    ['Country', 'Users'],
    ['Australia', 2400],
    ['United States', 3700],
    ['India', 962],
    ['Canada', 532],
    ['Germany', 346],
    ['Netherlands', 221]
  ]);

  var options = {
    width: 467,
    legend: { position: 'none' }
  };

  var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

  chart.draw(data, options);
}

//other chart
google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = new google.visualization.arrayToDataTable([
    ['COUNTRY', 'USERS'],
    ["United States", 3700],
    ["Australia", 2400],
    ["India", 962],
    ["United kingdom", 532],
    ["Canada", 346],
    ["Netherlands", 221]
  ]);

  var options = {
    width: 250,
    legend: { position: 'none' },
    bars: 'horizontal', // Required for Material Bar Charts.
    axes: {
      x: {
        0: { side: 'top', label: 'USERS'} // Top x-axis.
      }
    },
    bar: { groupWidth: "90%" }
  };

  var chart = new google.charts.Bar(document.getElementById('top_x_div'));
  chart.draw(data, options);
};
