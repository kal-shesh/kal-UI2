import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Checkbox from 'material-ui/Checkbox';
//import './App.css';

class FormItem extends Component {
    goToForm(url){
        console.log(url);
    }
    createAdditionalInfo(){
        if (this.props.creationDate != undefined){
            return (
                <CardText expandable={true}>
                    {
                        this.props.approves.map((approve) => ( <Checkbox
                            label="Simple"
                            checked={approve.isApproved}
                        />))
                    }
                </CardText>)
        }
        return (<span></span>);
    }
    render() {
        return (
            <div className="App" onClick={(e) => this.goToForm(this.props.formUrl)}>
                <Card>
                    <CardMedia>
                        <img src={this.props.imageSrc} alt="" />
                    </CardMedia>
                    <CardTitle title={this.props.title} />
                    {this.createAdditionalInfo()}
                </Card>
            </div>
        );
    }
}
export default FormItem;
