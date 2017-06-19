import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Checkbox from 'material-ui/Checkbox';
//import './App.css';

class FormItem extends Component {
    goToForm(url){
        console.log(url);
    }
    createAdditionalInfo(){
        if (this.props.item.creationDate != undefined){
            return (
                <CardText>
                    {
                        this.props.item.approves.map((approve) => ( <Checkbox
                            label="Simple"
                            checked={approve.isApproved}
                            disabled="true"
                        />))
                    }
                </CardText>)
        }
        return (<span></span>);
    }
    render() {
        return (
            <div className="App" onClick={(e) => this.goToForm(this.props.item.formUrl)}>
                <Card>
                    <CardMedia>
                        <img src={this.props.item.imageSrc} alt="" />
                    </CardMedia>
                    <CardTitle title={this.props.item.title} />
                    {this.createAdditionalInfo()}
                </Card>
            </div>
        );
    }
}
export default FormItem;
