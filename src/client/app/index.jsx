import React from 'react';
import {render} from 'react-dom';
require("!style!css!sass!../public/css/style.scss");
require('boostrap-loader');

class App extends React.Component {
  render () {
    return <p> Hello! </p>;
  }
}

render(<App/>, document.getElementById('app'));
