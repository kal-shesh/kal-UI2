import React, {Component} from "react";
import {SchemaForm} from "react-schema-form";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Paper from "material-ui/Paper";
import FloatingActionButton from "material-ui/FloatingActionButton";
import FormSend from "material-ui/svg-icons/content/send";
import AppBar from "material-ui/AppBar";
import FetchClass from "../FetchClass";
import User from "../User";
import _ from "underscore";
import utils from "react-schema-form/lib/utils";
import FlatButton from 'material-ui/FlatButton';
import jsonSchemaFaker from 'json-schema-faker';


const defaults = {
    "Soldier Details": {
        "Personal Info":
            {
                "Job" :"AAAA"
            }

    }
};
class CreateFormPage extends Component {

    constructor() {
        super();

        this.state = {
            formModel: defaults,
            formData: {
                displayName: '',
                schema: {},
                id: '',

            }
        };

        this.getSchemaFromServer()
    }

    onClickSend(e, id) {
        // alert(JSON.stringify(this.state.formModel));
        const fetchClass = new FetchClass();

        fetchClass.submitForms(id, this.state.formModel, new User().id, (e) => console.log(e))
    }

    successfulSend() {

    }


    getSchemaFromServer() {
        const fetcher = new FetchClass();
        // const updateState = this.setState;
        fetcher.getFormType("extendService", (data) => this.setState({
            formData: data
        }));
    }


    // guid() {
    //     function s4() {
    //         return Math.floor((1 + Math.random()) * 0x10000)
    //             .toString(16)
    //             .substring(1);
    //     }
    //
    //     return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    //         s4() + '-' + s4() + s4() + s4();
    // }


    onModelChangeIt(key, val) {
        let newFormModel = this.state.formModel;
        utils.selectOrSet(key, newFormModel, val);

        this.setState({
            formModel: newFormModel
        });

    }

    getSchemaObject() {
        const formStyle = {
            "margin": "20px",
            "title": {
                "cursor": "pointer"
            }
        };

        if (_.isEmpty(this.state.formData.schema)) {
            return;
        } else {
            let userId = new User().id;

            const fetcher = new FetchClass();
            let userData;

            fetcher.getUserData(userId, (data) => userData = data);

            let defaults = {
                "Soldier Details": {
                    "Personal Info":
                        userData

                }
            };

      //      this.state['formModel'] = defaults;


            const schemaForm = (
            <SchemaForm  dir="rtl" style={formStyle} schema={this.state.formData.schema} model={this.state.formModel}
                         onModelChange={(keys, values) => this.onModelChangeIt(keys, values)} formDefaults={defaults}
                         refs="myinput"/>)


            return schemaForm;
        }
    }

    // autoFill()

    render() {
        const paperStyle = {
            // padding: "8px",
            margin: "32px 480px"
        };

        const formDivStyle = {
            "padding": "16px 16px"
        };

        return (
            <MuiThemeProvider>
                <Paper style={paperStyle} zDepth={3}>
                    <AppBar style={{float: "left"}}
                            title={this.state.formData.displayName}
                            iconElementLeft={<div></div>}
                            iconElementRight={<div><FlatButton label="Auto Fill" onClick={(e) => console.log(e)}/>
                            </div>}/>
                    <div style={formDivStyle}>
                        {this.getSchemaObject()}
                    </div>
                    <FloatingActionButton onClick={(e) => this.onClickSend(e, this.state.formData.id)} style={{
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