import React from 'react';
import {render} from 'react-dom';
require("!style!css!sass!../public/css/style.scss");
import Table from './table.jsx';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state= {
      
    }
  }
  render () {
    return <Table />;
  }
}

render(<App/>, document.getElementById('app'));
