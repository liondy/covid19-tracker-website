import React from "react";
import Chart from "react-apexcharts";

function GraphStatus({ isLoading, data, curCountry }) {
  if (isLoading) {
    return <div className="text-center mt-3">Loading...</div>;
  }
  let xData = [];
  let activeData = [];
  let recoverData = [];
  let deathData = [];
  data.forEach((dataElement) => {
    let curDate = new Date(dataElement.Date).toLocaleString().split(",")[0];
    xData.push(curDate);
    activeData.push(dataElement.Active);
    recoverData.push(dataElement.Recovered);
    deathData.push(dataElement.Deaths);
  });
  let yActiveData = [
    {
      name: "aktif",
      data: activeData,
    },
  ];
  let yRecoverData = [
    {
      name: "sembuh",
      data: recoverData,
    },
  ];
  let yDeathsData = [
    {
      name: "meninggal",
      data: deathData,
    },
  ];
  let optionsActive = {
    chart: {
      id: "aktif",
      group: "negara",
      type: "line",
      height: 160,
      zoom: {
        type: "x",
        enabled: true,
        autoScaleYaxis: true,
      },
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
    colors: ["#008FFB"],
    yaxis: {
      labels: {
        minWidth: 40,
      },
    },
    xaxis: {
      categories: xData,
      type: "datetime",
    },
  };
  let optionsRecovered = {
    chart: {
      id: "sembuh",
      group: "negara",
      type: "line",
      height: 160,
      zoom: {
        type: "x",
        enabled: true,
        autoScaleYaxis: true,
      },
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
    colors: ["#00E396"],
    yaxis: {
      labels: {
        minWidth: 40,
      },
    },
    xaxis: {
      categories: xData,
      type: "datetime",
    },
  };
  let optionsDeaths = {
    chart: {
      id: "meninggal",
      group: "negara",
      type: "line",
      height: 160,
      zoom: {
        type: "x",
        enabled: true,
        autoScaleYaxis: true,
      },
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
    colors: ["#546E7A"],
    yaxis: {
      labels: {
        minWidth: 40,
      },
    },
    xaxis: {
      categories: xData,
      type: "datetime",
    },
  };
  return (
    <div className="p-5">
      <h2>Grafik Kasus Covid-19 Aktif di {curCountry}</h2>
      <Chart
        options={optionsActive}
        series={yActiveData}
        type="line"
        height={160}
      />
      <h2>Grafik Kasus Kesembuhan dari Covid-19 di {curCountry}</h2>
      <Chart
        options={optionsRecovered}
        series={yRecoverData}
        type="line"
        height={160}
      />
      <h2>Grafik Kasus Kematian akibat Covid-19 di {curCountry}</h2>
      <Chart
        options={optionsDeaths}
        series={yDeathsData}
        type="line"
        height={160}
      />
    </div>
  );
}

export default GraphStatus;
