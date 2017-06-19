import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import FormItem from './FormItem';
//import './App.css';

class FormsList extends Component {
    render() {
        return (
            <div>
                <List>
                    {
                        this.props.forms.map((form)=><ListItem ><FormItem item={form}/></ListItem>)
                    }
                </List>
            </div>
        );
    }
}
export default FormsList;
