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
                </div>)
        }
        return (<span></span>);
    }
    render() {
        return (
            <div onClick={(e) => this.goToForm(this.props.item.formUrl)}>
                <Paper zDepth={3}>
                    <div style={{ 'background-color': 'rgb(61, 187, 229)'}}>
                        <img src={this.props.item.jpeg} alt="" width='100%' />
                        <div style={{'margin-left': '1em'}}>
                            <h2> {this.props.item.displayName} </h2>
                            <h3> {this.props.item.description}</h3>
                            {this.createAdditionalInfo()}
                        </div>
                    </div>
                </Paper>
            </div>
        );
    }
}
export default FormItem;
