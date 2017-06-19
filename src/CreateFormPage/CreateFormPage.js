import React, {Component} from 'react';
import {SchemaForm} from 'react-schema-form';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FormSend from 'material-ui/svg-icons/content/send';
import AppBar from 'material-ui/AppBar';
import FetchClass from "../FetchClass";
import User from '../User';
// import _ from 'underscore';
import utils from "react-schema-form/lib/utils";
// import FlatButton from 'material-ui/FlatButton';


class CreateFormPage extends Component {

    constructor() {
        super();
        this.state = {
            formModel: {},
            // formObj: {}
        };
    }

    onClickSend(e, id) {
        // alert(JSON.stringify(this.state.formModel));
        const fetchClass = new FetchClass();

        fetchClass.submitForms(id, this.state.formModel, new User().id, (e) => console.log(e))
    }


    getMockOfTofes() {
        return {
            id: this.guid(),
            displayName: this.props.match.params.name,
            description: "some form description",
            jpeg: "/pdf/path",
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
                                "type": "string",
                                "title": "weoithweoih"
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


    onModelChangeIt(key, val) {
        let newFormModel = this.state.formModel;
        utils.selectOrSet(key, newFormModel, val);

        this.setState({
            formModel: newFormModel
        });
    }
    render() {
        const paperStyle = {
            // padding: "8px",
            margin: "32px 600px"
        };

        const formDivStyle = {
            "padding": "16px 16px"
        };

        const formStyle = {
            "margin": "20px",
            "title": {
                "cursor": "pointer"
            }
        };

        const mock = this.getMockOfTofes();

        return (
            <MuiThemeProvider>
                <Paper style={paperStyle} zDepth={3}>
                    <AppBar style={{float: "left"}} title={mock.displayName} iconElementLeft={<div></div>}/>

                    <div style={formDivStyle}>
                        <SchemaForm style={formStyle} schema={mock.schema} model={this.state.formModel}
                                    onModelChange={(keys, values) => this.onModelChangeIt(keys, values)}/>
                    </div>
                    <FloatingActionButton onClick={(e) => this.onClickSend(e, mock.id)} style={{
                        "margin": "24px 8px"
                    }}>
                        <FormSend />
                    </FloatingActionButton>
                </Paper>
            </MuiThemeProvider>
        );
    }
}

export default CreateFormPage;