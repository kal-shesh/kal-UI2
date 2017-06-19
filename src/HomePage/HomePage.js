import React, {Component} from 'react';
import SearchBar from './SearchBar';
import FormsList from './FormsList';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import styles from './HomePage.css';
import FetchClass from '../FetchClass';
//import './App.css';

class HomePage extends Component {
    constructor() {
        super();
        var component = this;

        var fetch = new FetchClass();
        fetch.getForms((data)=> component.setState({forms: data.forms, filtersForms: data.forms}));

        var forms = [
                {
                    "displayName": "tofesHul111",
                    "id": "hul",
                    "jpeg": "http://files.softicons.com/download/web-icons/free-web-icon-pack-1-by-rockettheme/png/128x128/earth.png",
                    "description": "a form to ask premission to hul"
                },
                {
                    "displayName": "tofes haarachat keva",
                    "id": "haaracha",
                    "jpeg": "http://files.softicons.com/download/holidays-icons/desktop-halloween-icons-by-aha-soft/png/128x128/Death.png",
                    "description": "a form to ask premission to hul"
                }
            ]
        ;

        this.state = {forms: forms, filtersForms: forms};
    }

    updateParentList(value) {
        this.setState({filtersForms: this.state.forms.filter((item) => item.displayName.indexOf(value) != -1)});
    }

    render() {
        return (
            <MuiThemeProvider>
                <div style={styles}>

                    <SearchBar formsNames={this.state.filtersForms.map((item) => item.displayName)}
                               updateParentList={(val) => this.updateParentList(val)}/>
                    <FormsList forms={this.state.filtersForms}/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default HomePage;
