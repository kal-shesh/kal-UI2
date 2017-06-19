import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
//import './App.css';

class FormItem extends Component {
    goToForm(url){
        console.log(url);
    }
    render() {
        return (
            <div className="App" onClick={(e) => this.goToForm(this.props.formUrl)}>
                <Card>
                    <CardMedia>
                        <img src={this.props.imageSrc} alt="" />
                    </CardMedia>
                    <CardTitle title={this.props.title} />
                </Card>
            </div>
        );
    }
}
export default FormItem;
