import React, { Component } from 'react';
import AutoComplete from 'material-ui/AutoComplete';
//import './App.css';

class SearchBar extends Component {
    constructor(){
        super();
        this.state = {forms:['form1','form2','form3']}
    }
    handleUpdateInput = (value) => {
        this.setState({
            dataSource: [
                this.state.forms.filter()
            ],
        });
    };
    render() {
        return (
            <div className="App">
                <AutoComplete
                    hintText="Type anything"
                    dataSource={this.state.dataSource}
                    onUpdateInput={this.handleUpdateInput}
                />
            </div>
        );
    }
}
export default SearchBar;
