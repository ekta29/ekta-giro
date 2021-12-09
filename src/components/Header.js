import React from "react";
import {Col, Nav, Navbar, Row} from "react-bootstrap";
import {Container} from "react-bootstrap";
import backArrowNav from './assets/img/navArrow.png';
import toggleNav from './assets/img/navToggle.png';
import './assets/sass/header.scss';



function Header(){
    return(
        <Navbar>
            <Container fluid>
                <Nav>
                    <Col xs={6}>
                        <Nav.Link href="/"><img src={backArrowNav} alt="back-navigation" height={35} width={40}/></Nav.Link>
                    </Col>
                    <Col xs={6} className="align-content-end">
                        <Nav.Link href="#"><img src={toggleNav} alt="toggle-navigation" height={35} width={40}/></Nav.Link>
                    </Col>

                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header