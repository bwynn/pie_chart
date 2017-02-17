const React = require('react');
const ReactDOM = require('react-dom');

const ChartApp = require('ChartApp');

// app css
require('style-loader!css-loader!sass-loader!ApplicationStyles');

ReactDOM.render(
  <ChartApp/>,
  document.getElementById('app')
);
