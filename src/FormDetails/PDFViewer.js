import React, { Component } from 'react';
import PDF from 'react-pdf-js';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

class PDFViewer extends Component {
    constructor(props) {
        super(props);
         this.onDocumentComplete = this.onDocumentComplete.bind(this);
         this.onPageComplete = this.onPageComplete.bind(this);
         this.handlePrevious = this.handlePrevious.bind(this);
         this.handleNext = this.handleNext.bind(this);
         this.state = {page:1};
    }

    onDocumentComplete(pages) {
        this.setState({ page: 1, pages });
    }

    onPageComplete(page) {
        this.setState({ page });
    }

    handlePrevious() {
        this.setState({ page: this.state.page - 1 });
    }

    handleNext() {
        this.setState({ page: this.state.page + 1 });
    }

    renderPagination(page, pages) {
        let previousButton = <div className="previous" onClick={this.handlePrevious}><a href="#"><i className="fa fa-arrow-left"></i> Previous</a></div>;
        if (page === 1) {
            previousButton = <div className="previous disabled"><a href="#"><i className="fa fa-arrow-left"></i> Previous</a></div>;
        }
        let nextButton = <div className="next" onClick={this.handleNext}><a href="#">Next <i className="fa fa-arrow-right"></i></a></div>;
        if (page === pages) {
            nextButton = <div className="next disabled"><a href="#">Next <i className="fa fa-arrow-right"></i></a></div>;
        }
        return (
            <nav>
                <Row>
                    <Col md="3" mdOffset="3">{previousButton}</Col>
                    <Col md="3" mdOffset="3">{nextButton}</Col>
                </Row>
            </nav>
        );
    }
    render() {
         let pagination = null;
          if (this.state.pages) {
              pagination = this.renderPagination(this.state.page, this.state.pages);
          }
        return (
            <div>
                <Grid>
                    <Row>
                        <Col md="3" mdOffset="3">
                            <PDF file={this.props.pdfPath} onDocumentComplete={this.onDocumentComplete} onPageComplete={this.onPageComplete} page={this.state.page}  />
                        </Col>
                    </Row>
                    <Row>
                        <Col md>
                            {pagination}
                        </Col>
                    </Row>
                </Grid>
            </div>);
        }

}

export default PDFViewer;
