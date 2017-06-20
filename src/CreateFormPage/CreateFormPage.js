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
import empty from 'json-schema-empty';


var defaults = {
    "Soldiers Details":{
        "Personal Info":{
            "Start Of Next Permanent Service":"1988-10-22T02:15:51.298Z",
            "Citizenship":"sunt eiusmod ea Duis",
            "Corps":"minim laborum i",
            "End of Current Commitment":"4890-03-13T00:41:00.890Z",
            "Permanent Service Start":"4281-02-22T14:36:28.908Z",
            "Main Profession Type":"ea dese",
            "Family Name":"occaec",
            "Family Status":"incididunt ullamco sed ut",
            "Rank":"Lieutenant",
            "Rank Before Position":"Corporal",
            "First Name":"sunt ut elit oc",
            "Job":"commo",
            "Is Permanent":true,
            "Medical Profile set date":"2454-12-21T08:06:40.054Z",
            "Date Of Birth":"2881-07-20T03:08:29.840Z",
            "Main Profession":"vel",
            "education":"quis anim tem",
            "Main Profession Num":25628665,
            "ID":4408783,
            "Unit":"cupidatat nul",
            "Medical Profile":53521427
        }

    }
};
class CreateFormPage extends Component {

    constructor(props) {
        super(props);

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

        fetchClass.submitForms(id, this.state.formModel, new User().id, (e) => this.success(e))

    }

    successfulSend() {

    }

    success(e) {
        console.log(e);
        window.location.replace("http://localhost:3000/Home");
    }


    getSchemaFromServer() {
        const fetcher = new FetchClass();
        // const updateState = this.setState;
        var comp = this;
        fetcher.getFormType(this.props.match.params.name, function(data){
            let emptyDef = empty(data.schema);
            fetcher.getUserData(new User().id,function (user) {
                emptyDef["Soldiers Details"]["Personal Info"].Job = user.Job;
                emptyDef["Soldiers Details"]["Personal Info"].ID = parseInt(user.ID);
                emptyDef["Soldiers Details"]["Personal Info"]["First Name"] = user["First Name"];
                emptyDef["Soldiers Details"]["Personal Info"]["Family Name"] = user["Last Name"];
                emptyDef["Soldiers Details"]["Personal Info"]["Date Of Birth"] = user["Date Of Birth"];
                emptyDef["Soldiers Details"]["Personal Info"]["Personal Number"]= user["Personal Number"];
                emptyDef["Soldiers Details"]["Personal Info"]["Rank"]= user.Rank;
                comp.setState({
                    formData: data,
                    formModel: emptyDef
                })

            });

        });
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

            const schemaForm = (
            <SchemaForm  dir="rtl" style={formStyle} schema={this.state.formData.schema} model={this.state.formModel}
                         onModelChange={(keys, values) => this.onModelChangeIt(keys, values)}
                         refs="myinput"/>);

            //LEVI GEY
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
                            iconElementRight={<div></div>}/>
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