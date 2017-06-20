/**
 * Created by gurr on 19/06/17.
 */

import React, {Component} from 'react';
// import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import ActionHome from 'material-ui/svg-icons/action/home'
// import ActionHome from 'material-ui/svg-icons/action/br'
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarTitle, ToolbarSeparator} from 'material-ui/Toolbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {cyanA700, green600} from 'material-ui/styles/colors'
import { Link } from 'react-router-dom';

class SheshHeader extends Component {
    render() {
        const linkStyle = {
            paddingLeft: '8px'
        };

        return (
            <MuiThemeProvider>
                <Toolbar style={{backgroundColor: cyanA700}}>
                    <ToolbarGroup firstChild={true}>
                        <ToolbarTitle text="FormMe" style={{"padding-left": "20px"}}/>
                        <ToolbarSeparator/>
                        <Link style={linkStyle} to="/Home">Home</Link>
                        <Link style={linkStyle} to="/MyForms">MyForms</Link>
                        <Link style={linkStyle} to="/Waiting">Waiting</Link>
                        <IconButton>
                            <ActionHome/>
                        </IconButton>
                    </ToolbarGroup>
                </Toolbar>
                {/*<AppBar title="Form-Me" iconElementRight={<FlatButton label="Save" />}>*/}
                {/*</AppBar>*/}
            </MuiThemeProvider>
        )
    }
}

export default SheshHeader;