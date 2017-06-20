import React, {Component} from 'react';
import SearchBar from './SearchBar';
import FormsListHome from './FormListHome';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import styles from './HomePage.css';
import FetchClass from '../FetchClass';
//import './App.css';

class HomePage extends Component {
    constructor() {
        super();
        var component = this;

        var fetch = new FetchClass();
        fetch.getForms(function(data){
            data = data.map(function (item) {
               item.formUrl = '/createform/'+item.id;
               return item;
            });
            component.setState({forms: data, filtersForms: data})
        });

        var forms = [

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
                    <FormsListHome forms={this.state.filtersForms}/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default HomePage;
