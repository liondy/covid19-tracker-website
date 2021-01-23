import "./Status.css";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import ReactLoading from "react-loading";

function Status({ data, isLoading }) {
  if (isLoading) {
    return (
      <>
        <div className="d-flex justify-content-center">
          <ReactLoading
            type={"spinningBubbles"}
            color={"#2d6187"}
            height={"10%"}
            width={"10%"}
            className="mt-3 p-5"
          />
        </div>
        <div className="d-flex justify-content-center">
          <h5>Tunggu Sebentar, Sedang Mengambil Data 😁 ✌️</h5>
        </div>
      </>
    );
  }
  let positif = data.Kasus_Posi;
  let sembuh = data.Kasus_Semb;
  let meninggal = data.Kasus_Meni;
  return (
    <Container fluid>
      <Row className="justify-content-center p-4">
        <Col md={3} sm={12} className="mb-3">
          <Row className="justify-content-center color-nav-up p-4 rounded-top font">
            <>&nbsp; &nbsp; {positif}</>
          </Row>
          <Row className="justify-content-center color-nav-down text-white p-4 bg-nav rounded-bottom font font-bold">
            Kasus Positif
          </Row>
        </Col>
        <Col md={1}></Col>
        <Col md={3} sm={12} className="mb-3">
          <Row className="justify-content-center border-top border-left border-right border-primary text-primary p-4 rounded-top font">
            <>
              {" "}
              &nbsp; &nbsp; {sembuh} ({((sembuh / positif) * 100).toFixed(2)}%)
            </>
          </Row>
          <Row className="justify-content-center border-bottom border-left border-right border-primary text-white p-4 bg-primary rounded-bottom font font-bold">
            Kasus Sembuh
          </Row>
        </Col>
        <Col md={1}></Col>
        <Col md={3} sm={12} className="mb-3">
          <Row className="justify-content-center border-top border-left border-right border-success text-success p-4 rounded-top font">
            <>
              {" "}
              &nbsp; &nbsp; {meninggal} (
              {((meninggal / positif) * 100).toFixed(2)}%)
            </>
          </Row>
          <Row className="justify-content-center border-bottom border-left border-right border-success text-white p-4 bg-success rounded-bottom font font-bold">
            Kasus Meninggal
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Status;
