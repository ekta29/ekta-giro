import React from 'react';
import {Col, Nav, Row, Tab} from "react-bootstrap";

import ExpenseGraph from "./ExpenseGraph";

function Tracker(){
    return(
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
                <Col xs={12}>
                    <Nav variant="pills" >
                        <Col xs={2}></Col>
                        <Col xs={8} className="pill-outside-border">
                            <Row>
                                <Col xs={6}>
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">Income</Nav.Link>
                                    </Nav.Item>
                                </Col>
                                <Col xs={6}>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Expense</Nav.Link>
                                    </Nav.Item>
                                </Col>
                            </Row>
                        </Col>

                        <Col xs={2}></Col>
                    </Nav>
                </Col>
                <Col xs={12}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <ExpenseGraph/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <ExpenseGraph/>
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    )
}

export default Tracker;