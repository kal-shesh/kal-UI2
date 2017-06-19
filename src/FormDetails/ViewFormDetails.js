import React, {Component} from 'react';
import {SchemaForm} from 'react-schema-form';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FormSend from 'material-ui/svg-icons/content/send';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import {Tabs, Tab} from 'material-ui/Tabs';
import StepDisplay from './StepDisplay';
import injectTapEventPlugin from "react-tap-event-plugin";


class ViewFormDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formModel: this.getFormDetials(props.match.params.id).data,
            steps:this.getFormDetials(props.match.params.id).metadata.steps
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
                            },
                            "Medical Profile set date": {
                                "id": "/properties/Soldiers Request/properties/Medical Profile set date",
                                "type": "string"
                            },
                            "Permanent Service Start": {
                                "id": "/properties/Soldiers Request/properties/Permanent Service Start",
                                "type": "string"
                            },
                            "Rank": {
                                "id": "/properties/Soldiers Request/properties/Rank",
                                "type": "string"
                            },
                            "Unit": {
                                "id": "/properties/Soldiers Request/properties/Unit",
                                "type": "string"
                            },
                            "education": {
                                "id": "/properties/Soldiers Request/properties/education",
                                "type": "string"
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

    getFormDetials(id){
        return {
            "data": {
                "Soldiers Request": {
                    "ID": 8161702,
                    "Rank": "SLT",
                    "Family Name": "Schreiber",
                    "First Name": "Daniel",
                    "Corps": "Daniel",
                    "Unit": "Daniel",
                    "Citizenship": "Daniel",
                    "Family Status": "S",
                    "DOB": "01/08/1996",
                    "education": "non",
                    "Medical Profile": 64,
                    "Is Perminent": true,
                    "Medical Profile set date": "04/02/2015",
                    "Job": "Programer",
                    "Main Profession": "Officer",
                    "Main Profession Num": 1,
                    "Main Profession Type": "Cyber",
                    "Permanent Service Start": "03/02/2018"
                }},
            "metadata": {
                "steps": [{"step_id": "ddffd", "aprrover": "ssss", "step_name": "ishur rashatz", "status": "approved",
                    "next_steps": [{"step_id": "ddffdads", "step_name": "ishur rashatz222", "aprrover": "aaassss",
                        "status": "waiting"}]}]
            }
        }
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

        const mock = this.getMockOfTofes();
        // console.log(mock);
        return (
            <MuiThemeProvider>
                <Tabs>
                    <Tab label="Status">
                        <StepDisplay steps={this.state.steps}/>
                    </Tab>
                    <Tab label="Form">
                        <Paper style={paperStyle} zDepth={3}>
                            <AppBar title={mock.name}
                                    iconElementRight={<FlatButton label="save" labelStyle={{"fontSize": "18px"}}/>}
                                    iconElementLeft={<div></div>}/>

                            <div id="SchemaForm" style={formDivStyle}>
                                <SchemaForm  dir="rtl" style={formStyle} schema={mock.schema} model={this.state.formModel}
                                             onModelChange={() => console.log("MODELCHANGE")} formDefaults={this.state.formModel}
                                             refs="myinput"/>
                            </div>
                            <FloatingActionButton onClick={(e) => this.onClickSend(e)} style={{
                                "margin": "24px 8px"
                            }}>
                                <FormSend />
                            </FloatingActionButton>
                        </Paper>
                    </Tab>
                </Tabs>

            </MuiThemeProvider>
        );
    }

}

export default ViewFormDetails;