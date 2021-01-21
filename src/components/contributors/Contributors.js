import React from "react";
import { Container, Row, Col } from "reactstrap";

const Contributors = ({ isLoading, data }) => {
  if (isLoading) return <div className="mt-3 p-5 text-center">Loading...</div>;
  const renderContributors = () => {
    return data.map((contributor, index) => {
      const { image, name, link } = contributor; //destructuring
      return (
        <Col md={2} sm={12}>
          <Row className="justify-content-center">
            <img
              src={image}
              className="img-fluid img-thumbnail rounded-circle"
              alt="avatar-1"
              style={{ width: "35%" }}
            />
          </Row>
          <Row className="justify-content-center mt-3">
            <h5>{name}</h5>
          </Row>
          <Row className="justify-content-center mt-3 mb-3">
            <a href={link}>{link}</a>
          </Row>
        </Col>
      );
    });
  };
  return (
    <Container fluid>
      <Row className="p-5">
        <h2>Contributors</h2>
      </Row>
      <Row className="justify-content-center">{renderContributors()}</Row>
    </Container>
  );
};

export default Contributors;
