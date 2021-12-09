import React from "react";
import {Card, Col, Row,} from "react-bootstrap";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/fontawesome-free-solid'

import 'react-circular-progressbar/dist/styles.css';
import {Link} from "@reach/router";


function CreditLimit(){
    let percentage = 66;
    return(
        <Card >
            <Card.Body>
                <Row>
                    <Col xs={3} className="progressbar-circle">
                        <div style={{ width: 60, height: 60 }}>
                            <CircularProgressbar
                                value={percentage}
                                text={`${percentage}%`}
                                styles={buildStyles({
                                    textColor: "#FFFFFF",
                                    pathColor: "#FFFFFF",
                                    trailColor: "#7471D6"
                                })}
                            />
                        </div>
                    </Col>
                    <Col xs={6} className="credit-text-body">
                        <h4 className="credit-card-title">Your Credit Limit</h4>
                        <h4 className="credit-card-sub">$39,750 of 53,000</h4>
                    </Col>
                    <Col xs={3} className="arrow-to-next">
                        <p>
                            <Link to="/secondScreen"><FontAwesomeIcon icon={faAngleRight} color="#4D69D3" /></Link>
                        </p>

                    </Col>
                </Row>

            </Card.Body>
        </Card>
    )
}
export default CreditLimit