import React, {Component} from 'react';
import Homepage from './HomePage/HomePage';
import MyForms from './MyForms/MyForms';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import CreateFormPage from "./CreateFormPage/CreateFormPage";
import SheshHeader from "./SheshHeader";



class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <SheshHeader/>
                    <Route path="/Home" component={Homepage}/>
                    <Route path="/MyForms" component={MyForms}/>
                    <Route path="/CreateForm" component={CreateFormPage} />
                </div>
            </Router>
        );
    }
}

export default App;
