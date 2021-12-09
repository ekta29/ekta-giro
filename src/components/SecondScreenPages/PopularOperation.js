import React from 'react';
import {Col, Row} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faHeart, faPlane } from '@fortawesome/fontawesome-free-solid'

function PopularOperation(){
    return(
        <div className="row">
            <Col>
            <p className="font-label"><FontAwesomeIcon icon={faHome} /></p>
            <p className="font-caption">All</p>
            </Col>
            <Col>
                <p className="font-label"><FontAwesomeIcon icon={faHeart} /></p>
                <p className="font-caption">Health</p>
            </Col>
            <Col className="icon-plane-font">
                <p className="font-label"><FontAwesomeIcon icon={faPlane} /></p>
                <p className="font-caption">Travel</p>
            </Col>
            <Col className="icon-plane-font">
                <p className="font-label">
                    <FontAwesomeIcon icon={faPlane} /></p>
                <p className="font-caption">Food</p>
            </Col>
        </div>
    )
}

export default PopularOperation