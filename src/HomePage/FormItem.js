import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import {
    withRouter
} from 'react-router-dom'


//import './App.css';

class FormItem extends Component {
    goToForm(url){
        this.props.history.push(url)
    }
    createAdditionalInfo(){
        if (this.props.item.creation_time != undefined){
            return (
                <div>
                    <div>Creation Date :{this.props.item.creation_time.toDateString()}</div>
                    <div>Last update date:{this.props.item.last_update_time.toDateString()}</div>
                </div>)
        }
        return (<span></span>);
    }
    render() {
        return (
            <div onClick={(e) => this.goToForm(this.props.item.formUrl)}>
                <Paper zDepth={3}>
                    <div style={{ 'background-color': 'rgb(61, 187, 229)'}}>
                        <img src={this.props.item.metadata.jpeg} alt="" width='100%' />
                        <div style={{'margin-left': '1em'}}>
                            <h2> {this.props.item.metadata.displayName} </h2>
                            <h3> {this.props.item.metadata.description}</h3>
                            {this.createAdditionalInfo()}
                        </div>
                    </div>
                </Paper>
            </div>
        );
    }
};
export default withRouter(FormItem);
