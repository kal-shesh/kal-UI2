import React, { Component } from 'react';
import SearchBar from '../HomePage/SearchBar';
import FormsList from '../HomePage/FormsList';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Col from 'react-bootstrap/lib/Col';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';

class MyForms extends Component {
    constructor(){
        super();
        //this.updateParentList = this.updateParentList.bind(this);
        var forms = [
            {
                "displayName": "tofesHul",
                "id": "hul",
                "jpeg": "http://files.softicons.com/download/web-icons/free-web-icon-pack-1-by-rockettheme/png/128x128/earth.png",
                "description": "a form to ask premission to hul",
                creationDate : new Date(),
                updateDate : new Date(),
                approves:[
                    {
                        isApproved:true,
                        name:'approve 1'
                    },
                    {
                        isApproved:false,
                        name:'approve 2'
                    }
                ]
            },
            {
                "displayName": "tofes haarachat keva",
                "id": "haaracha",
                "jpeg": "http://files.softicons.com/download/holidays-icons/desktop-halloween-icons-by-aha-soft/png/128x128/Death.png",
                "description": "a form to ask premission to hul"
            }
        ];
        this.state = {forms:forms,filtersForms:forms};
    }
    updateParentList(value){
        this.setState({filtersForms:this.state.forms.filter((item)=>item.displayName.indexOf(value) != -1)});
    }
    render() {
        return (
            <MuiThemeProvider>

                <div>
                    <Grid>
                        <Row>
                            <SearchBar formsNames={this.state.filtersForms.map((item) => item.displayName)} updateParentList={(val)=>this.updateParentList(val)}/>
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
