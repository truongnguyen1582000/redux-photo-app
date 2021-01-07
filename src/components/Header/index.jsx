import React from 'react';
import {NavLink} from 'react-router-dom';
import {Container, Row, Col} from 'reactstrap';
import './header.scss'

function Header(props) {
    return (
        <div className="header">
            <Container>
                <Row className="justify-content-between">
                    <Col xs="auto">
                        <a href="#"
                        className="header__link header__title">
                            Easy Frontend
                        </a>
                    </Col>
                    <Col xs="auto">
                        <NavLink href="#"
                        exact
                        to="/photos"
                        className="header__link"
                        activeClassName="header__link--active">
                            Redux Project
                        </NavLink>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Header;