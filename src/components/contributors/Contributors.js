import React from "react";
import { Container, Row, Col } from "reactstrap";

const Contributors = ({ isLoading, data }) => {
  if (isLoading) return <div className="mt-3 p-5 text-center">Loading...</div>;
  return (
    <Container fluid>
      <Row className="p-5">
        <h2>Contributors</h2>
      </Row>
      <Row className="justify-content-center">
        <Col md={2} sm={12}>
          <Row className="justify-content-center">
            <img
              src={data[0].image}
              className="img-fluid img-thumbnail rounded-circle"
              alt="avatar-1"
              style={{ width: "35%" }}
            />
          </Row>
          <Row className="justify-content-center mt-3">
            <h5>{data[0].name}</h5>
          </Row>
          <Row className="justify-content-center mt-3 mb-3">
            <a href={data[0].link}>{data[0].link}</a>
          </Row>
        </Col>
        <Col md={2} sm={12}>
          <Row className="justify-content-center">
            <img
              src={data[1].image}
              className="img-fluid img-thumbnail rounded-circle"
              alt="avatar-2"
              style={{ width: "35%" }}
            />
          </Row>
          <Row className="justify-content-center mt-3">
            <h5>{data[1].name}</h5>
          </Row>
          <Row className="justify-content-center mt-3 mb-3">
            <a href={data[1].link}>{data[1].link}</a>
          </Row>
        </Col>
        <Col md={2} sm={12}>
          <Row className="justify-content-center">
            <img
              src={data[2].image}
              className="img-fluid img-thumbnail rounded-circle"
              alt="avatar-3"
              style={{ width: "35%" }}
            />
          </Row>
          <Row className="justify-content-center mt-3">
            <h5>{data[2].name}</h5>
          </Row>
          <Row className="justify-content-center mt-3 mb-3">
            <a href={data[2].link}>{data[2].link}</a>
          </Row>
        </Col>
        {/* <Col md={2} sm={12}>
          <Row className="justify-content-center">
            <img
              src={data[3].image}
              className="img-fluid img-thumbnail rounded-circle"
              alt="avatar-4"
            />
          </Row>
          <Row className="justify-content-center mt-3">
            <h5>{data[3].name}</h5>
          </Row>
          <Row className="justify-content-center mt-3 mb-3">
            <a href={data[3].link}>{data[3].link}</a>
          </Row>
        </Col> */}
      </Row>
    </Container>
  );
};

export default Contributors;
