import React, {Component} from 'react';
import Homepage from './HomePage/HomePage';
import MyForms from './MyForms/MyForms';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect
} from 'react-router-dom'
import CreateFormPage from "./CreateFormPage/CreateFormPage";
import SheshHeader from "./SheshHeader";
import ViewFormDetails from './FormDetails/ViewFormDetails';
import VerifyPage from './VerifyPage/VerifyPage';


class App extends Component {
    render() {
        let redirecterToHome = (
            <Redirect> to="/Home"</Redirect>
        );

        return (
            <Router>
                <div>

                    <SheshHeader/>
                    {/*<Route exact path="/" component={redirecterToHome}/>*/}
                    <Route path="/Home" component={Homepage}/>
                    <Route path="/MyForms" component={MyForms}/>
                    <Route path="/CreateForm/:name" component={CreateFormPage} />
                    <Route path="/ViewForm/:id" component={ViewFormDetails} />
                    <Route path="/Waiting" component={VerifyPage}/>
                </div>
            </Router>
        );
    }
}

export default App;
