import React from "react";
import ReactLoading from "react-loading";
import Highcharts from "highcharts";
import highchartsMap from "highcharts/modules/map";
import HighchartsReact from "highcharts-react-official";
import proj4 from "proj4";
import mapDataID from "@highcharts/map-collection/countries/id/id-all.geo.json";
highchartsMap(Highcharts);

function Map({
  isLoading,
  datasetMerah,
  datasetOranye,
  datasetKuning,
  datasetHijau,
}) {
  if (typeof window !== "undefined") {
    window.proj4 = window.proj4 || proj4;
  }
  const options = {
    chart: {
      map: "countries/id/id-all",
      backgroundColor: "#eee",
      animation: true,
      height: "35%",
    },
    title: {
      text: "Peta Zona Resiko Covid19 di Indonesia",
      useHTML: false,
    },
    credits: {
      enabled: false,
    },
    mapNavigation: {
      enabled: true,
    },
    tooltip: {
      headerFormat: "",
      pointFormat: "<b>{point.z}</b><br><b>{point.keyword}</b>",
    },
    series: [
      {
        // Use the gb-all map with no data as a basemap
        name: "Basemap",
        mapData: mapDataID,
        borderColor: "#A0A0A0",
        nullColor: "rgba(200, 200, 200, 0.3)",
        animation: true,
        showInLegend: false,
      },
      {
        // Specify points using lat/lon
        type: "mappoint",
        name: "zona merah (tinggi)",
        color: "#FF0000",
        data: datasetMerah,
        cursor: "pointer",
      },
      {
        // Specify points using lat/lon
        type: "mappoint",
        name: "zona oranye (sedang)",
        color: "#ff4b0d",
        data: datasetOranye,
        cursor: "pointer",
      },
      {
        // Specify points using lat/lon
        type: "mappoint",
        name: "zona kuning (rendah)",
        color: "#dbc300",
        data: datasetKuning,
        cursor: "pointer",
      },
      {
        // Specify points using lat/lon
        type: "mappoint",
        name: "zona hijau (tidak ada kasus)",
        color: "#006400",
        data: datasetHijau,
        cursor: "pointer",
      },
    ],
  };
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
          <h5>Memuat Zona</h5>
        </div>
      </>
    );
  }
  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        constructorType={"mapChart"}
      />
    </div>
  );
}

export default Map;
