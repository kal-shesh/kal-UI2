import React, { Component } from 'react';
import Homepage from './HomePage/HomePage';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
        <Router>
            <Route path="/" component={Homepage}/>
        </Router>
    );
  }
}

export default App;
