import React, {useState} from 'react';
import {Card, Row, Col, ButtonGroup} from "react-bootstrap";
import {CircularProgressbar} from "react-circular-progressbar";
import CardBg from "../assets/img/card-bg.jpeg";

class MyCards extends React.Component {
    constructor() {
        super();
        this.state = { toggleActive: false };
        this.onToggle = this.onToggle.bind(this);
    }

    onToggle() {
        this.setState({ toggleActive: !this.state.toggleActive });
    }

    render() {
        return(
            <Card style={{background:`url(${CardBg})`}}>
                <Card.Body>
                    <Row className="card-top">
                        <Col>
                            <h6>....1234</h6>
                        </Col>
                        <Col className="align-content-end">
                            {/*<Toggle*/}
                            {/*    onClick={this.onToggle}*/}

                            {/*    width={20} height={20}*/}
                            {/*    offstyle="#FFF"*/}
                            {/*    active={this.state.toggleActive}*/}
                            {/*/>*/}
                        </Col>
                    </Row>
                    <Row className="card-bottom">
                        <Col><p>Balance</p>
                        <h5>$ 1524</h5></Col>
                    </Row>
                </Card.Body>
            </Card>
        );
    }
}

export default MyCards