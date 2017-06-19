import React, { Component } from 'react';
import Col from 'react-bootstrap/lib/Col';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';

import FormItem from './FormItem';
//import './App.css';
const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        overflowY: 'auto',
    }
};

class FormsList extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Row>
                    {
                        this.props.forms.map((form)=><Col md={4}
                            >
                            <FormItem item={form}/>
                        </Col>)
                    }
                    </Row>
                </Grid>
            </div>
        );
    }
}
export default FormsList;
