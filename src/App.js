import React, { Component } from 'react';
import Homepage from './HomePage/HomePage';
import MyForms from './MyForms/MyForms';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
        <Router>
            <div>

            <Route path="/Home" component={Homepage}/>
            <Route path="/MyForms" component={MyForms}/>
                </div>
        </Router>
    );
  }
}

export default App;
