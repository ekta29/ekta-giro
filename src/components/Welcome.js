import React from 'react';
import './assets/sass/home.scss';

import {Button} from "react-bootstrap";
import {Col} from "react-bootstrap";
import { Link } from "@reach/router";
import {useHistory} from "react-router-dom";
import WelcomeBg from './assets/img/bg.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/fontawesome-free-solid'


function Welcome(){
    let history = useHistory();

    return(
        <div className="homepage" style={{background:`url(${WelcomeBg})`}}>
            <Col className="homepage-center">
                <h1 className="font-weight-bold">Finance App</h1>
                <p>Carrying out financial transactions with the best security</p>
                <Button type="button" variant="primary" className="btn-start">
                <Link to="/firstScreen">Start &nbsp;&nbsp;<FontAwesomeIcon icon={faAngleRight}/></Link>
                    </Button>

            </Col>


        </div>
    )
}

export default Welcome