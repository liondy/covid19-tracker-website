import React, { useState } from "react";
import Chart from "react-apexcharts";
import {
  Col,
  Button,
  Row,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import Data from "../tables/Data";

function TopWorldGraph({
  isLoading,
  sortedConfirmedCountry,
  sortedRecoveredCountry,
  sortedDeathsCountry,
}) {
  const [modalConfirmed, setModalConfirmed] = useState(false);
  const [modalRecovered, setModalRecovered] = useState(false);
  const [modalDeath, setModalDeath] = useState(false);
  if (isLoading) {
    return <div className="text-center mt-3">Loading...</div>;
  }
  let confirmedData = sortedConfirmedCountry.slice(0, 10);
  let recoverData = sortedRecoveredCountry.slice(0, 10);
  let deathData = sortedDeathsCountry.slice(0, 10);
  let XconfirmedData = [];
  let XrecoveredData = [];
  let XdeathData = [];
  let YconfirmedData = [];
  let YrecoverData = [];
  let YdeathData = [];
  for (let i = 0; i < 10; i++) {
    XconfirmedData.push(confirmedData[i].Country);
    XrecoveredData.push(recoverData[i].Country);
    XdeathData.push(deathData[i].Country);
    YconfirmedData.push(confirmedData[i].TotalConfirmed);
    YrecoverData.push(recoverData[i].RecoveredPercentage.toFixed(2));
    YdeathData.push(deathData[i].DeathPercentage.toFixed(2));
  }
  let yConfirmedData = [
    {
      name: "konfirmasi",
      data: YconfirmedData,
    },
  ];
  let yRecoverData = [
    {
      name: "sembuh",
      data: YrecoverData,
    },
  ];
  let yDeathsData = [
    {
      name: "meninggal",
      data: YdeathData,
    },
  ];
  let optionsConfirmed = {
    chart: {
      id: "konfirmasi",
      type: "bar",
      height: 350,
      chart: {
        animations: {
          enabled: true,
          easing: "easeinout",
          speed: 800,
          animateGradually: {
            enabled: true,
            delay: 150,
          },
          dynamicAnimation: {
            enabled: true,
            speed: 350,
          },
        },
      },
    },
    colors: ["#008FFB"],
    yaxis: {
      labels: {
        minWidth: 40,
      },
    },
    xaxis: {
      categories: XconfirmedData,
    },
  };
  let optionsRecovered = {
    chart: {
      id: "sembuh",
      type: "bar",
      height: 350,
      chart: {
        animations: {
          enabled: true,
          easing: "easeinout",
          speed: 800,
          animateGradually: {
            enabled: true,
            delay: 150,
          },
          dynamicAnimation: {
            enabled: true,
            speed: 350,
          },
        },
      },
    },
    colors: ["#00E396"],
    yaxis: {
      floating: true,
      min: 0,
      max: 100,
      labels: {
        minWidth: 40,
        formatter: (value) => {
          return value.toFixed(2) + "%";
        },
      },
    },
    xaxis: {
      categories: XrecoveredData,
    },
  };
  let optionsDeaths = {
    chart: {
      id: "meninggal",
      type: "bar",
      height: 350,
      chart: {
        animations: {
          enabled: true,
          easing: "easeinout",
          speed: 800,
          animateGradually: {
            enabled: true,
            delay: 150,
          },
          dynamicAnimation: {
            enabled: true,
            speed: 350,
          },
        },
      },
    },
    colors: ["#546E7A"],
    yaxis: {
      floating: true,
      labels: {
        minWidth: 40,
        formatter: (value) => {
          return value.toFixed(2) + "%";
        },
      },
    },
    xaxis: {
      categories: XdeathData,
    },
  };
  const toggleConfirmed = () => {
    setModalConfirmed(!modalConfirmed);
  };
  const toggleRecovered = () => {
    setModalRecovered(!modalRecovered);
  };
  const toggleDeath = () => {
    setModalDeath(!modalDeath);
  };
  return (
    <div className="p-5">
      <Row className="mb-3">
        <Col md={10} sm={12}>
          <h2>Negara dengan Kasus Terbanyak</h2>
        </Col>
        <Col md={2} sm={12}>
          <Button
            color="primary"
            onClick={toggleConfirmed}
            className="float-right"
          >
            Lihat Semua Urutan
          </Button>
          <Modal isOpen={modalConfirmed} toggle={toggleConfirmed}>
            <ModalHeader toggle={toggleConfirmed} charCode="X">
              <p>Negara dengan Kasus Terbanyak</p>
            </ModalHeader>
            <ModalBody>
              <Data data={sortedConfirmedCountry} status="confirmed" />
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={toggleConfirmed}>
                Tutup
              </Button>
            </ModalFooter>
          </Modal>
        </Col>
      </Row>
      <Row>
        <Col>
          <Chart
            options={optionsConfirmed}
            series={yConfirmedData}
            type="bar"
            height={350}
          />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={10} sm={12}>
          <h2>Negara dengan Tingkat Kesembuhan Tertinggi</h2>
        </Col>
        <Col md={2} sm={12}>
          <Button
            color="primary"
            onClick={toggleRecovered}
            className="float-right"
          >
            Lihat Semua Urutan
          </Button>
          <Modal isOpen={modalRecovered} toggle={toggleRecovered}>
            <ModalHeader toggle={toggleRecovered} charCode="X">
              <p>Negara dengan Tingkat Kesembuhan Tertinggi</p>
            </ModalHeader>
            <ModalBody>
              <Data data={sortedRecoveredCountry} status="recovered" />
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={toggleRecovered}>
                Tutup
              </Button>
            </ModalFooter>
          </Modal>
        </Col>
      </Row>
      <Row>
        <Col>
          <Chart
            options={optionsRecovered}
            series={yRecoverData}
            type="bar"
            height={350}
          />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={10} sm={12}>
          <h2>Negara dengan Tingkat Kematian Tertinggi</h2>
        </Col>
        <Col md={2} sm={12}>
          <Button color="primary" onClick={toggleDeath} className="float-right">
            Lihat Semua Urutan
          </Button>
          <Modal isOpen={modalDeath} toggle={toggleDeath}>
            <ModalHeader toggle={toggleDeath} charCode="X">
              <p>Negara dengan Tingkat Kematian Tertinggi</p>
            </ModalHeader>
            <ModalBody>
              <Data data={sortedDeathsCountry} status="deaths" />
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={toggleDeath}>
                Tutup
              </Button>
            </ModalFooter>
          </Modal>
        </Col>
      </Row>
      <Row>
        <Col>
          <Chart
            options={optionsDeaths}
            series={yDeathsData}
            type="bar"
            height={350}
          />
        </Col>
      </Row>
    </div>
  );
}

export default TopWorldGraph;
