import React from "react";
import { Container, Row } from "reactstrap";

const Tentang = () => {
  return (
    <Container fluid>
      <Row className="p-5">
        <h2>Tentang Covid-19 Tracker</h2>
      </Row>
      <Row className="ml-5 mr-5">
        <p className="text-justify">
          Maraknya pandemi Covid-19 di seluruh dunia membuat aktivitas
          orang-orang menjadi terbatas. Hal ini membuat banyak orang yang sudah
          tidak sabar akan kapan pandemi ini berakhir dan mencari cara untuk
          memantau perkembangan virus Covid-19 secara real-time dari seluruh
          dunia. Covid-19 Tracker memberikan grafik pemantauan perkembangan
          covid-19 di seluruh dunia terutama di Indonesia. Visualisasi dibuat
          publik agar orang-orang dapat terus memantau perkembangannya serta
          melihat grafik apakah situasi dunia semakin aman atau tidak aman.
        </p>
        <p>
          Data yang digunakan pada aplikasi ini diambil dari: <br />- Negara dan
          Dunia: <a href="covid19api.com">Covid 19 API</a> <br />- Provinsi:
          <a href="https://bnpb-inacovid19.hub.arcgis.com/datasets/data-harian-kasus-per-provinsi-covid-19-indonesia/geoservice">
            BNPB Open Data
          </a>
          <br />- Rumah Sakit Rujukan:
          <a href="https://dekontaminasi.com/api/id/covid19/hospitals">
            Dekontaminasi
          </a>
          <br />- Zona Resiko:
          <a href="https://covid19.go.id/peta-risiko">
            Satgas Penanganan Covid 19 Peta Resiko Indonesia
          </a>
        </p>
      </Row>
    </Container>
  );
};

export default Tentang;
