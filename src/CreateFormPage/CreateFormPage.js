import React, {Component} from 'react';
import {SchemaForm} from 'react-schema-form';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FormSend from 'material-ui/svg-icons/content/send';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';



class CreateFormPage extends Component {
    constructor() {
        super();
        this.state = {
            formModel:{}
        }
    }

    render() {
        const paperStyle = {
            // padding: "8px",
            margin: "32px"
        };

        const formStyle = {
            "margin": "20px",
            "title": {
                "cursor": "pointer"
            }
        };

        const formSchema = {
            "$schema": "http://json-schema.org/draft-04/schema#",
            "definitions": {},
            "id": "http://example.com/example.json",
            "properties": {
                "first_name": {
                    "id": "/properties/first_name",
                    "type": "string",
                    "title": "שם פרטי"
                },
                "last_name": {
                    "id": "/properties/last_name",
                    "type": "string",
                    "title": "שם משפחה"
                }
            },
            "type": "object"
        };

        return (
            <MuiThemeProvider>
                <Paper style={paperStyle}>
                    <AppBar title="טופס קיצור שירות" dir="rtl" iconElementRight={<FlatButton label="Save" />} iconElementLeft={<div></div>}></AppBar>
                    <SchemaForm dir="rtl" style={formStyle} schema={formSchema} model={this.state.formModel}/>
                    <FloatingActionButton dir="rtl" style={{
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