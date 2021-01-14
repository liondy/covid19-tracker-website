import React, { useEffect, useState } from "react";
import Header from "../../components/layout/header/pages/Pages";
import Footer from "../../components/layout/footer/Footer";
import Map from "../../components/map/Map";
import ZoneTable from "../../components/tables/ZoneTable";
import { getZonaIndonesia } from "../../api/Api";
import RiskPieChart from "../../components/graphs/RiskPieChart";


function Zone() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [dataMerah, setDataMerah] = useState([]);
  const [dataOranye, setDataOranye] = useState([]);
  const [dataKuning, setDataKuning] = useState([]);
  const [dataHijau, setDataHijau] = useState([]);
  const fetchMapData = async () => {
    setIsLoading(true);
    let fetchedData = await getZonaIndonesia();
    let dataset = [];
    let datasetMerah = [];
    let datasetOranye = [];
    let datasetKuning = [];
    let datasetHijau = [];
    let colors = ["#006400", "#dbc300", "#ff4b0d", "#FF0000"];
    fetchedData.forEach((element) => {
      dataset.push({
        kota: element.name,
        status: element.status,
      });
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
    setData(dataset);
    setDataMerah(datasetMerah);
    setDataOranye(datasetOranye);
    setDataKuning(datasetKuning);
    setDataHijau(datasetHijau);
    setIsLoading(false);
  };
  let dataWarna=[dataMerah.length,dataOranye.length,dataKuning.length,dataHijau.length];
  useEffect(() => {
    fetchMapData();
  }, []);
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
      <RiskPieChart zoneColor={dataWarna}/>
      <ZoneTable isLoading={isLoading} data={data} />
      
      
      <Footer />
    </>
  );
}

export default Zone;
