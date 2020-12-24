import "./Status.css";
import React from "react";
import { Col, Container, Row } from "reactstrap";

function Status({ isLoading, isWorld, same, data, lastUpdate }) {
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <Container fluid>
      {isWorld ? (
        <div className="mt-3">Total kasus covid-19 di Dunia saat ini</div>
      ) : (
        <></>
      )}
      <Row className="justify-content-center p-4">
        <Col md={isWorld ? 3 : 2} sm={12} className="mb-3">
          <Row className="justify-content-center color-nav-up p-4 rounded-top font">
            {isWorld
              ? data.TotalConfirmed
              : same
              ? data[data.length - 1].Confirmed
              : data[data.length - 1].Confirmed - data[0].Confirmed}
          </Row>
          <Row className="justify-content-center color-nav-down text-white p-4 bg-nav rounded-bottom font font-bold">
            Kasus Terkonfirmasi
          </Row>
        </Col>
        {!isWorld ? (
          <>
            <Col md={1}></Col>
            <Col md={2} sm={12} className="mb-3">
              <Row className="justify-content-center border-top border-left border-right border-primary text-primary p-4 rounded-top font">
                {same
                  ? data[data.length - 1].Active
                  : data[data.length - 1].Active - data[0].Active}
              </Row>
              <Row className="justify-content-center border-bottom border-left border-right border-primary text-white p-4 bg-primary rounded-bottom font font-bold">
                Kasus Aktif
              </Row>
            </Col>
          </>
        ) : (
          <></>
        )}
        <Col md={1}></Col>
        <Col md={isWorld ? 3 : 2} sm={12} className="mb-3">
          <Row className="justify-content-center border-top border-left border-right border-success text-success p-4 rounded-top font">
            {isWorld
              ? data.TotalRecovered
              : same
              ? data[data.length - 1].Recovered
              : data[data.length - 1].Recovered - data[0].Recovered}
          </Row>
          <Row className="justify-content-center border-bottom border-left border-right border-success text-white p-4 bg-success rounded-bottom font font-bold">
            Kasus Sembuh
          </Row>
        </Col>
        <Col md={1}></Col>
        <Col md={isWorld ? 3 : 2} sm={12} className="mb-3">
          <Row className="justify-content-center border-top border-left border-right border-secondary text-secondary p-4 rounded-top font">
            {isWorld
              ? data.TotalDeaths
              : same
              ? data[data.length - 1].Deaths
              : data[data.length - 1].Deaths - data[0].Deaths}
          </Row>
          <Row className="justify-content-center border-bottom border-left border-right border-secondary text-white p-4 bg-secondary rounded-bottom font font-bold">
            Kasus Meninggal
          </Row>
        </Col>
      </Row>
      Terakhir diperbaharui {lastUpdate}
    </Container>
  );
}

export default Status;
