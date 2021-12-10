import React from "react";
import Welcome from "./Welcome";
import CardList from "./SecondScreenPages/CardList";
import Layout from "./Layouts/layout";
import PopularOperation from "./SecondScreenPages/PopularOperation";
import './secondScreen.scss';
import {Col, Row} from "react-bootstrap";
import TransactionAccordion from "./SecondScreenPages/TransactionAccordion";



function SecondScreen(){
    return(
        <Layout>
            <div className="card-list-slider">
                <Row className="card-list-heading">
                    <h2>My Cards</h2>
                </Row>
                <Row>
                    <Col>
                        <CardList/>
                    </Col>

                </Row>

            </div>
            <div className="popular-operation-sec">
                <Row className="popular-operation-heading">
                    <h2>Popular Operations</h2>
                </Row>
                <Row className="popular-operation-body">
                    <Col>
                        <PopularOperation/>
                    </Col>
                </Row>
            </div>
            <div className="transaction-accordion">

                <TransactionAccordion/>
            </div>

        </Layout>

    )
}

export default SecondScreen