import "./Status.css";
import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import CountUp from "react-countup";

function Status({ isLoading, isWorld, same, data, lastUpdate }) {
  const [duration] = useState(2.5);
  if (isLoading) {
    return <div className="mt-3">Loading...</div>;
  }
  let confirmed;
  let active;
  let recovered;
  let deaths;
  if (isWorld) {
    confirmed = data.TotalConfirmed;
    recovered = data.TotalRecovered;
    deaths = data.TotalDeaths;
  } else {
    if (data.length === 0) {
      return (
        <div className="mt-3 p-5">
          Maaf, gagal mengambil data. Silahkan coba sesaat lagi atau mengganti
          dengan negara lain
        </div>
      );
    }
    if (same) {
      confirmed = data[data.length - 1].Confirmed;
      active = data[data.length - 1].Active;
      recovered = data[data.length - 1].Recovered;
      deaths = data[data.length - 1].Deaths;
    } else {
      confirmed = Math.abs(data[data.length - 1].Confirmed - data[0].Confirmed);
      active = Math.abs(data[data.length - 1].Active - data[0].Active);
      recovered = Math.abs(data[data.length - 1].Recovered - data[0].Recovered);
      deaths = Math.abs(data[data.length - 1].Deaths - data[0].Deaths);
    }
  }
  const formatValue = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };
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
            <CountUp
              end={confirmed}
              duration={duration}
              formattingFn={formatValue}
            />
            {isWorld ? (
              <></>
            ) : (
              <>&nbsp; &nbsp; ({confirmed === 0 ? 0 : 100}%)</>
            )}
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
                <CountUp
                  end={active}
                  duration={duration}
                  formattingFn={formatValue}
                />
                {isWorld ? (
                  <></>
                ) : (
                  <>
                    &nbsp; &nbsp; (
                    {confirmed === 0
                      ? 0
                      : ((active / confirmed) * 100).toFixed(2)}
                    %)
                  </>
                )}
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
            <CountUp
              end={recovered}
              duration={duration}
              formattingFn={formatValue}
            />
            {isWorld ? (
              <></>
            ) : (
              <>
                &nbsp; &nbsp; (
                {confirmed === 0
                  ? 0
                  : ((recovered / confirmed) * 100).toFixed(2)}
                %)
              </>
            )}
          </Row>
          <Row className="justify-content-center border-bottom border-left border-right border-success text-white p-4 bg-success rounded-bottom font font-bold">
            Kasus Sembuh
          </Row>
        </Col>
        <Col md={1}></Col>
        <Col md={isWorld ? 3 : 2} sm={12} className="mb-3">
          <Row className="justify-content-center border-top border-left border-right border-secondary text-secondary p-4 rounded-top font">
            <CountUp
              end={deaths}
              duration={duration}
              formattingFn={formatValue}
            />
            {isWorld ? (
              <></>
            ) : (
              <>
                &nbsp; &nbsp; (
                {confirmed === 0 ? 0 : ((deaths / confirmed) * 100).toFixed(2)}
                %)
              </>
            )}
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
