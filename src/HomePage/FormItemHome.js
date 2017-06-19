/**
 * Created by lavi on 6/20/2017.
 */
import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import {
    withRouter
} from 'react-router-dom'

class FormItemHome extends Component {
    goToForm(url){
        this.props.history.push(url)
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
                        </div>
                    </div>
                </Paper>
            </div>
        );
    }
};
export default withRouter(FormItemHome);
