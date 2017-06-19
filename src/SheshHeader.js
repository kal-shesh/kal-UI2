/**
 * Created by gurr on 19/06/17.
 */

import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class SheshHeader extends Component {
    render() {
        return (
        <MuiThemeProvider>
            <AppBar title="Form-Me" />
        </MuiThemeProvider>
        )
    }
}

export default SheshHeader;