/**
 * Created by gurr on 20/06/17.
 */
import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {
    Table,
    TableBody,
    TableFooter,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import YesIcon from 'material-ui/svg-icons/action/done';
import RejectIcon from 'material-ui/svg-icons/content/block';
import WaitIcon from 'material-ui/svg-icons/alert/warning';
import FetchClass from '../FetchClass';
import User from '../User';
import IconButton from 'material-ui/IconButton';

class VerifyPage extends Component {

    fetcher = new FetchClass();

    mockData = [{
        metadata: {
            displayName: 'hul',
            creatorId: 315632666,
            lastUpdateDate: '2017-01-01 00:00:00'
        }
    }, {
        metadata: {
            displayName: 'hul2',
            creatorId: 315632612,
            lastUpdateDate: '2017-01-06 00:00:00'
        }
    }];

    constructor() {
        super();
        this.state = {
            formData: []
        };

        this.fetcher.getWaitingApprovals(new User().id, (raw) => this.setState({formData: raw}));

    }

    applyButton(behaviour, userId, uuid, lastUpdateTime) {
        let result = {
            status: behaviour,
            user_id: userId,
            form_id: uuid
        };

        this.fetcher.postStatusOfForm(result, userId, uuid);

    }

    mapForms(waitingForms) {
        if (waitingForms.length === 0) {
            return <div></div>;
        }
        console.log(JSON.stringify(waitingForms));
        return waitingForms['forms'].map((item) => (
            <TableRow>
                <TableRowColumn>{item.metadata.displayName}</TableRowColumn>
                <TableRowColumn>{item.metadata['creator_id']}</TableRowColumn>
                <TableRowColumn>{item.metadata['last_update_time']}</TableRowColumn>
                <TableRowColumn><IconButton onClick={(e) => this.applyButton("APPROVED", new User().id, item.metadata.uuid, new Date())}><YesIcon/></IconButton></TableRowColumn>
                <TableRowColumn><IconButton><RejectIcon/></IconButton></TableRowColumn>
                <TableRowColumn><IconButton><WaitIcon/></IconButton></TableRowColumn>
            </TableRow>
            )

        );
    }

    componentWillMount() {

        // this.setRequestedApprovals()
    }

    render() {
        return (
            <MuiThemeProvider>
                <Paper zDepth={2} style={{margin: '8px'}}>
                    <AppBar title="FormMatch"/>
                    <Table selectable={false}>
                        <TableHeader>
                            <TableRow>
                                <TableHeaderColumn tooltip="Form Name">Form Name</TableHeaderColumn>
                                <TableHeaderColumn tooltip="Creator ID">Creator ID</TableHeaderColumn>
                                <TableHeaderColumn tooltip="Last Update Date">Last Update Date</TableHeaderColumn>
                                <TableHeaderColumn tooltip="Approve">Approve</TableHeaderColumn>
                                <TableHeaderColumn tooltip="Decline">Decline</TableHeaderColumn>
                                <TableHeaderColumn tooltip="Postpone">Postpone</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {this.mapForms(this.state.formData)}
                        </TableBody>
                    </Table>
                </Paper>
            </MuiThemeProvider>
        )
    }
}

export default VerifyPage;