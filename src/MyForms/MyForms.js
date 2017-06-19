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
                title:'title1',
                imageSrc :'/hol.png',
                formUrl :'',
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
                title:'title122222',
                imageSrc :'',
                formUrl :''
            }
        ];
        this.state = {forms:forms,filtersForms:forms};
    }
    updateParentList(value){
        this.setState({filtersForms:this.state.forms.filter((item)=>item.title.indexOf(value) != -1)});
    }
    render() {
        return (
            <MuiThemeProvider>

                <div>
                    <Grid>
                        <Row>
                            <SearchBar formsNames={this.state.filtersForms.map((item) => item.title)} updateParentList={(val)=>this.updateParentList(val)}/>
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
