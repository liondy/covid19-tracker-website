import React, { useEffect, useState } from "react";
import Header from "../../components/layout/header/pages/Pages";
import Footer from "../../components/layout/footer/Footer";
import Map from "../../components/map/Map";
import { getIndoData } from "../../api/Api";

function Zone() {
  const [isLoading, setIsLoading] = useState(true);
  const [dataMerah, setDataMerah] = useState([]);
  const [dataOranye, setDataOranye] = useState([]);
  const [dataKuning, setDataKuning] = useState([]);
  const [dataHijau, setDataHijau] = useState([]);
  const fetchMapData = async () => {
    setIsLoading(true);
    let fetchedData = await getIndoData();
    let datasetMerah = [];
    let datasetOranye = [];
    let datasetKuning = [];
    let datasetHijau = [];
    let colors = ["#006400", "#FFFF00", "#FFA500", "#FF0000"];
    fetchedData.forEach((element) => {
      if (element.nilai === 3) {
        datasetMerah.push({
          z: element.status,
          keyword: element.name,
          lat: parseFloat(element.latitude),
          lon: parseFloat(element.longitude),
          color: colors[element.nilai],
        });
      } else if (element.nilai === 2) {
        datasetOranye.push({
          z: element.status,
          keyword: element.name,
          lat: parseFloat(element.latitude),
          lon: parseFloat(element.longitude),
          color: colors[element.nilai],
        });
      } else if (element.nilai === 1) {
        datasetKuning.push({
          z: element.status,
          keyword: element.name,
          lat: parseFloat(element.latitude),
          lon: parseFloat(element.longitude),
          color: colors[element.nilai],
        });
      } else if (element.nilai === 0) {
        datasetHijau.push({
          z: element.status,
          keyword: element.name,
          lat: parseFloat(element.latitude),
          lon: parseFloat(element.longitude),
          color: colors[element.nilai],
        });
      }
    });
    setDataMerah(datasetMerah);
    setDataOranye(datasetOranye);
    setDataKuning(datasetKuning);
    setDataHijau(datasetHijau);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchMapData();
  }, []);
  if (isLoading) return <div>Loading..</div>;
  return (
    <>
      <Header />
      <Map
        isLoading={isLoading}
        datasetMerah={dataMerah}
        datasetOranye={dataOranye}
        datasetKuning={dataKuning}
        datasetHijau={dataHijau}
      />
      <Footer />
    </>
  );
}

export default Zone;
