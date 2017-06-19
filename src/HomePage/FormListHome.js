import React, { Component } from 'react';
import Col from 'react-bootstrap/lib/Col';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';

import FormItemHome from './FormItemHome';

export class FormsListHome extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Row>
                        {
                            this.props.forms.map((form)=><Col md={4}
                            >
                                <FormItemHome  item={form}/>
                            </Col>)
                        }
                    </Row>
                </Grid>
            </div>
        );
    }
}
export default FormsListHome;