import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

export default function Layout() {
  return (
    <div>
      <h3>login page </h3>
      <form>
        <label>
          {' '}
          User Name <input type="text" required></input>
        </label>
        <label>
          {' '}
          Email <input type="email"></input>
        </label>
        <label>
          {' '}
          Password <input type="password"></input>
        </label>
        <Button type="submit"> submite</Button>
        <input type="file"></input>
      </form>

      <Row md={6} lg={12} sm={12} xs={12}>
        <Col> first row</Col>
        <Col>second</Col>
        <Col>third</Col>
      </Row>
    </div>
  );
}
