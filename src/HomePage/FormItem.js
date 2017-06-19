import React, { Component } from 'react';
import Checkbox from 'material-ui/Checkbox';
import Paper from 'material-ui/Paper';


//import './App.css';

class FormItem extends Component {
    goToForm(url){
        console.log(url);
    }
    createAdditionalInfo(){
        if (this.props.item.creationDate != undefined){
            return (
                <div>
                    <div>Creation Date :{this.props.item.creationDate.toDateString()}</div>
                    <div>Last update date:{this.props.item.updateDate.toDateString()}</div>
                    {
                        this.props.item.approves.map((approve) => ( <Checkbox
                            label="Simple"
                            checked={approve.isApproved}
                            disabled="true"
                        />))
                    }
                </div>)
        }
        return (<span></span>);
    }
    render() {
        return (
            <div onClick={(e) => this.goToForm(this.props.item.formUrl)}>
                <Paper>
                    <img src={this.props.item.imageSrc} alt="" />
                    <h3> {this.props.item.title} </h3>
                    {this.createAdditionalInfo()}
                </Paper>
            </div>
        );
    }
}
export default FormItem;
