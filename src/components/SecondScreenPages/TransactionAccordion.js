import React from 'react';
import {Accordion, Col, Row} from "react-bootstrap";
import { faHeart, faAngleDown } from '@fortawesome/fontawesome-free-solid';
import { faInvision, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function TransactionAccordion(){
    return(
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>
                    <Col xs={9}>Transactions</Col><Col xs={3} className="all-small ">All&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faAngleDown}/></Col></Accordion.Header>
                <Accordion.Body>
                    <Row className="transaction-accordion-row">
                        <Col xs={3} className="transaction-accordion-icon"><p><FontAwesomeIcon icon={faInvision}/></p></Col>
                        <Col xs={6} className="transaction-accordion-middle">
                            <p className="transaction-accordion-title">Invision</p>
                            <p className="transaction-accordion-sub">13 Nov, 8:34am</p></Col>
                        <Col xs={3} className="transaction-accordion-num">-68.03</Col>
                    </Row>
                    <Row className="transaction-accordion-row">
                        <Col xs={3} className="transaction-accordion-icon"><p><FontAwesomeIcon icon={faGithub}/></p></Col>
                        <Col xs={6} className="transaction-accordion-middle">
                            <p className="transaction-accordion-title">Github</p>
                            <p className="transaction-accordion-sub">9 Nov, 3:52pm</p></Col>
                        <Col xs={3} className="transaction-accordion-num">-21.55</Col>
                    </Row>
                    <Row className="transaction-accordion-row">
                        <Col xs={3} className="transaction-accordion-icon"><p><FontAwesomeIcon icon={faHeart}/></p></Col>
                        <Col xs={6} className="transaction-accordion-middle">
                            <p className="transaction-accordion-title">Medical Center</p>
                            <p className="transaction-accordion-sub">7 Nov, 8:34am</p></Col>
                        <Col xs={3} className="transaction-accordion-num">-385.02</Col>
                    </Row>
                </Accordion.Body>
            </Accordion.Item>

        </Accordion>
    )
}

export default TransactionAccordion