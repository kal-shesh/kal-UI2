import React, {Component} from 'react';
import {SchemaForm} from 'react-schema-form';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import FetchClass from '../FetchClass';
import {Tabs, Tab} from 'material-ui/Tabs';
import StepDisplay from './StepDisplay';
import injectTapEventPlugin from "react-tap-event-plugin";
import PDFViewer from  './PDFViewer';

class ViewFormDetails extends Component {
    constructor(props) {
        super(props);
        var component = this;
        var fetch = new FetchClass();
        fetch.getFormDetials(props.match.params.id,function(data){
            console.info(data);
            component.setState({formModel: data.data, steps : data.metadata.steps});
             fetch.getFormType(data.metadata.form_type,function(data1){
                 console.info(data1);
                 component.setState({mock : data1})
             });
        });

        this.state = {
            formModel: {},
            steps:[],
            mock : undefined//this.getMockOfTofes()
        };
        injectTapEventPlugin()
    }

    onClickSend(e) {
        // alert("sent")
    }

    componentDidUpdate()
    {
        try
        {
            var schema = document.getElementById("SchemaForm");
            var inputs = schema.getElementsByTagName("input");
            for (var index in inputs){
                if (!isNaN(index)){
                    inputs[index].setAttribute("disabled", "true")
                }
            }
        }
        catch (e){
            console.error(e);
        }
    }
    createSchema(){

        const formDivStyle = {
            "padding": "8px"
        };

        const formStyle = {
            "margin": "20px",
            "title": {
                "cursor": "pointer"
            }
        };

        if (this.state.mock != undefined){
            return (
                <div>
            <AppBar style={{float: "left"}} title={this.state.mock.displayName} iconElementLeft={<div></div>}
            />
                <div id="SchemaForm" style={formDivStyle}>
                <SchemaForm  dir="rtl" style={formStyle} schema={this.state.mock.schema} model={this.state.formModel}
                             onModelChange={() => console.log("MODELCHANGE")} formDefaults={this.state.formModel}
                             refs="myinput"/>
            </div>
                </div>)
        }

    }
    render() {
        const paperStyle = {
            // padding: "8px",
            margin: "32px"
        };

        //this.setState({mock :this.getMockOfTofes()});
        // console.log(mock);
        return (
            <MuiThemeProvider>
                <Paper style={{'margin-top': '1em','margin-left': '1em','margin-right': '1em'}} zDepth={2}>
                <Tabs >
                    <Tab label="PDF">
                        <PDFViewer pdfPath="/a.pdf"></PDFViewer>
                    </Tab>
                    <Tab label="Form">
                        <Paper style={paperStyle} zDepth={3}>

                            {
                                this.createSchema()
                            }

                        </Paper>
                    </Tab>
                    <Tab label="Status">
                        <StepDisplay steps={this.state.steps}/>
                    </Tab>
                </Tabs>
                </Paper>
            </MuiThemeProvider>
        );
    }

}

export default ViewFormDetails;