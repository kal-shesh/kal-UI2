import React, { Component } from 'react';
import SearchBar from '../HomePage/SearchBar';
import FormsList from '../HomePage/FormsList';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import FetchClass from '../FetchClass';

class MyForms extends Component {
    constructor(){
        super();
        var user = 'aa';
        var component = this;
        var fetch = new FetchClass();
        fetch.getMyForms(user,function (data) {
            data.forms = data.forms.map(function (form) {
               form.formUrl = '/ViewForm/'+form.uuid;
                return form;
            });
            console.info(data);
            component.setState({forms:data.forms,filtersForms:data.forms});
        });
        var forms = [

        ];
        this.state = {forms:forms,filtersForms:forms};
    }
    updateParentList(value){
        this.setState({filtersForms:this.state.forms.filter((item)=>item.metadata.displayName.indexOf(value) != -1)});
    }
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <Grid>
                        <Row>
                            <SearchBar formsNames={this.state.filtersForms.map((item) => item.metadata.displayName)} updateParentList={(val)=>this.updateParentList(val)}/>
                        </Row>
                        <Row>
                            <FormsList forms={this.state.filtersForms}/>
                        </Row>
                    </Grid>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default MyForms;
