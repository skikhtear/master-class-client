import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Page/Shared/Footer/Footer';
import Header from '../Page/Shared/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg='12'>
                        <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;