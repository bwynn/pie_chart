const React = require('react');
const LineChart = require('react-d3-basic').LineChart;

const ChartApp = React.createClass({
  render: function () {
    var data = [
          {
              "age": 39,
              "index": 0
          },
          {
              "age": 38,
              "index": 1
          },
          {
              "age": 34,
              "index": 2
          },
          {
              "age": 12,
              "index": 3
          }
      ];

      var chartSeries = [
          {
            field: 'age',
            name: 'Age',
            color: '#ff7f0e',
            style: {
              "strokeWidth": 2,
              "strokeOpacity": .2,
              "fillOpacity": .2
            }
          }
        ];

      var x = function(d) {
          return d.index;
        }

    return (
      <div>
        <LineChart width= {600} height= {300} data= {data} chartSeries= {chartSeries} x= {x} />
      </div>
    );
  },
});

module.exports = ChartApp;
