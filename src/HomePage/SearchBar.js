import React, { Component } from 'react';
import AutoComplete from 'material-ui/AutoComplete';
//import './App.css';

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {dataSource:props.formsNames}
    }
    handleUpdateInput = (value,propObject) => {
        this.setState({
            dataSource:
                propObject.formsNames.filter((item) => item.indexOf(value) != -1)

        });
        propObject.updateParentList(value);
    };
    render() {
        return (
            <div >
                <AutoComplete
                    hintText="Search"
                    dataSource={this.state.dataSource}
                    onUpdateInput={(e)=>this.handleUpdateInput(e,this.props)}
                />

            </div>
        );
    }
}
export default SearchBar;
