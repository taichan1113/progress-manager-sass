google.charts.load('current', { packages: ['gantt'] });
google.charts.setOnLoadCallback(drawChart);

function daysToMilliseconds(days) {
  return days * 24 * 60 * 60 * 1000;
}

function drawChart() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Task ID');
  data.addColumn('string', 'Task Name');
  data.addColumn('string', 'Resource');
  data.addColumn('date', 'Start Date');
  data.addColumn('date', 'End Date');
  data.addColumn('number', 'Duration');
  data.addColumn('number', 'Percent Complete');
  data.addColumn('string', 'Dependencies');

  data.addRows([
    [
      'Research',
      'Find sources',
      null,
      new Date(2015, 0, 1),
      new Date(2015, 0, 5),
      null,
      100,
      null,
    ],
    [
      'Write',
      'Write paper',
      'write',
      null,
      new Date(2015, 0, 9),
      daysToMilliseconds(3),
      25,
      'Research,Outline',
    ],
    [
      'Cite',
      'Create bibliography',
      'write',
      null,
      new Date(2015, 0, 7),
      daysToMilliseconds(1),
      20,
      'Research',
    ],
    [
      'Complete',
      'Hand in paper',
      'complete',
      null,
      new Date(2015, 0, 10),
      daysToMilliseconds(1),
      0,
      'Cite,Write',
    ],
    [
      'Outline',
      'Outline paper',
      'write',
      null,
      new Date(2015, 0, 6),
      daysToMilliseconds(1),
      100,
      'Research',
    ],
  ]);

  var options = {
    height: 275,
    width: "100%",
  };

  let chartQueris = document.querySelectorAll('.chart_div');
  chartQueris.forEach((chartQuery) => {
    let chart = new google.visualization.Gantt(chartQuery);
    chart.draw(data, options);
  });
}
