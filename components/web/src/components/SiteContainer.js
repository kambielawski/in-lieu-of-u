import React from 'react';
import {
  Container,
  Col,
  Row,
} from 'react-bootstrap';

import Header from './Header';
import Sidebar from './Sidebar';

const SiteContainer = ({ children }) => {
  return (
    <>
      <Header />
      <Container fluid style={{ marginTop: '20px' }}>
        <Row>
          <Col xs={9}>
            {children}
          </Col>
          <Col xs={3}>
            <Sidebar />
          </Col>
        </Row>
      </Container>

    </>
  );
};

export default SiteContainer;
