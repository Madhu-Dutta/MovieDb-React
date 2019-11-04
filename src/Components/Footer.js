import React from 'react';
import {Navbar, Table, Row, Col} from 'reactstrap';

export default function Footer() {
    return (
        <Navbar color="dark" dark expand="lg">
            <Table>
                <Row>
                    <Col md="2" style={{color: "white"}}>
                        <img width="50" src="" alt="FooterLogo" />
                    </Col>
                    <Col md="10" style={{color: "white"}}>
                       Footer
                    </Col>
                </Row>
            </Table>
        </Navbar>
    )
}
