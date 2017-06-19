import React, {Component} from 'react';
import {SchemaForm} from 'react-schema-form';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import FetchClass from '../FetchClass';
import {Tabs, Tab} from 'material-ui/Tabs';
import StepDisplay from './StepDisplay';
import injectTapEventPlugin from "react-tap-event-plugin";


class ViewFormDetails extends Component {
    constructor(props) {
        super(props);
        var component = this;
        var fetch = new FetchClass();
        fetch.getFormDetials(props.match.params.id,function(data){
            console.info(data);
            component.setState({formModel: data.data, steps : data.metadata.steps})
            fetch.getFormDetials(data.metadata.form_type,function(data){
                console.info(data);
                component.setState({mock : data})
            });
        });

        this.state = {
            formModel: {},
            steps:[],
            mock :this.getMockOfTofes()
        };
        injectTapEventPlugin()
    }

    onClickSend(e) {
        // alert("sent")
    }


    getMockOfTofes() {
        return {
            id: this.guid(),
            name: this.props.name,
            description: "some form description",
            pdf: "/pdf/path",
            schema: {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "definitions": {},
                "id": "http://example.com/example.json",
                "properties": {
                    "Soldiers Request": {
                        "id": "/properties/Soldiers Request",
                        "properties": {
                            "Citizenship": {
                                "id": "/properties/Soldiers Request/properties/Citizenship",
                                "type": "string"
                            },
                            "Corps": {
                                "id": "/properties/Soldiers Request/properties/Corps",
                                "type": "string"
                            },
                            "DOB": {
                                "id": "/properties/Soldiers Request/properties/DOB",
                                "type": "string"
                            },
                            "Family Name": {
                                "id": "/properties/Soldiers Request/properties/Family Name",
                                "type": "string"
                            },
                            "Family Status": {
                                "id": "/properties/Soldiers Request/properties/Family Status",
                                "type": "string"
                            },
                            "First Name": {
                                "id": "/properties/Soldiers Request/properties/First Name",
                                "type": "string"
                            },
                            "ID": {
                                "id": "/properties/Soldiers Request/properties/ID",
                                "type": "integer"
                            },
                            "Is Perminent": {
                                "id": "/properties/Soldiers Request/properties/Is Perminent",
                                "type": "boolean"
                            },
                            "Job": {
                                "id": "/properties/Soldiers Request/properties/Job",
                                "type": "string"
                            },
                            "Main Profession": {
                                "id": "/properties/Soldiers Request/properties/Main Profession",
                                "type": "string"
                            },
                            "Main Profession Num": {
                                "id": "/properties/Soldiers Request/properties/Main Profession Num",
                                "type": "integer"
                            },
                            "Main Profession Type": {
                                "id": "/properties/Soldiers Request/properties/Main Profession Type",
                                "type": "string"
                            },
                            "Medical Profile": {
                                "id": "/properties/Soldiers Request/properties/Medical Profile",
                                "type": "integer"
                            }
                        },
                        "type": "object"
                    }
                },
                "type": "object"
            }
        };
    }
    guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }

        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    }

    componentDidMount()
    {
        console.log('aaaaa');
        var schema = document.getElementById("SchemaForm");
        var inputs = schema.getElementsByTagName("input");
        for (var index in inputs){
            if (!isNaN(index)){
                inputs[index].setAttribute("disabled", "true")
            }
        }
    }
    render() {
        const paperStyle = {
            // padding: "8px",
            margin: "32px"
        };

        const formDivStyle = {
            "padding": "8px"
        };

        const formStyle = {
            "margin": "20px",
            "title": {
                "cursor": "pointer"
            }
        };

        //this.setState({mock :this.getMockOfTofes()});
        // console.log(mock);
        return (
            <MuiThemeProvider>
                <Tabs>
                    <Tab label="Status">
                        <StepDisplay steps={this.state.steps}/>
                    </Tab>
                    <Tab label="Form">
                        <Paper style={paperStyle} zDepth={3}>
                            <AppBar title={this.state.mock.name}
                                    />

                            <div id="SchemaForm" style={formDivStyle}>
                                <SchemaForm  dir="rtl" style={formStyle} schema={this.state.mock.schema} model={this.state.formModel}
                                             onModelChange={() => console.log("MODELCHANGE")} formDefaults={this.state.formModel}
                                             refs="myinput"/>
                            </div>

                        </Paper>
                    </Tab>
                </Tabs>

            </MuiThemeProvider>
        );
    }

}

export default ViewFormDetails;