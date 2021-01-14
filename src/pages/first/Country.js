import React, { useState, useEffect } from "react";
import Header from "../../components/layout/header/pages/Pages";
import Footer from "../../components/layout/footer/Footer";
import CountryPicker from "../../components/dropdowns/DropdownCustom";
import DateFilter from "../../components/RangeFilter/DateFilter";
import Status from "../../components/data-status/Status";
import { getSummaryData, getCountriesData } from "../../api/Api";
import GraphStatus from "../../components/graphs/GraphStatus";
import TopWorldGraph from "../../components/graphs/TopWorldGraph";

function Country() {
  const [curSlug, setCurSlug] = useState();
  const [curCountry, setCurCountry] = useState();
  const [summaryData, setSummaryData] = useState({});
  const [lastUpdate, setLastUpdate] = useState();
  const [countries, setCountries] = useState([]);
  const [dateInterval, setInterval] = useState([]);
  const [selectedDate, setSelectedDate] = useState([]);
  const [sortedConfirmedCountry, setConfirmedSorted] = useState([]);
  const [sortedRecoveredCountry, setRecoveredSorted] = useState([]);
  const [sortedDeathsCountry, setDeathsSorted] = useState([]);
  const [same, setSame] = useState(true);
  const [data, setData] = useState([]);
  const [world, setWorld] = useState(true);
  const [isLoadingDate, setLoadingDate] = useState(true);
  const [isLoadingData, setLoadingData] = useState(true);
  let days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  let months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  const fetchSummaryData = async () => {
    const fetchedData = await getSummaryData();
    setData(fetchedData.Global);
    setCountries(fetchedData.Countries);
    setSummaryData(fetchedData);
    setWorld(true);
    setUpdated(fetchedData.Date);
    sortCountry([...fetchedData.Countries]);
    setLoadingData(false);
  };
  const sortCountry = (countries) => {
    let newCountries = countPercentage([...countries]);
    let sortByConfirmed = [...newCountries];
    sortByConfirmed.sort(sortCountryBasedOn("TotalConfirmed"));
    setConfirmedSorted(sortByConfirmed);
    let sortByRecovered = [...newCountries];
    sortByRecovered.sort(sortCountryBasedOn("RecoveredPercentage"));
    setRecoveredSorted(sortByRecovered);
    let sortByDeaths = [...newCountries];
    sortByDeaths.sort(sortCountryBasedOn("DeathPercentage"));
    setDeathsSorted(sortByDeaths);
  };
  const countPercentage = (countries) => {
    let countriesToBeSet = [...countries];
    countriesToBeSet.forEach((county) => {
      if (county.TotalConfirmed === 0) {
        county.RecoveredPercentage = 0.0;
        county.DeathPercentage = 0.0;
      } else {
        county.RecoveredPercentage =
          (county.TotalRecovered / county.TotalConfirmed) * 100;
        county.DeathPercentage =
          (county.TotalDeaths / county.TotalConfirmed) * 100;
      }
    });
    return countriesToBeSet;
  };
  const sortCountryBasedOn = (property) => {
    return function (a, b) {
      if (a[property] < b[property]) return 1;
      else if (a[property] > b[property]) return -1;
      return 0;
    };
  };
  const setUpdated = (tanggalUpdate) => {
    let date = new Date(tanggalUpdate);
    let tahun = date.getFullYear();
    let bulan = date.getMonth();
    let tanggal = date.getDate();
    tanggal = tanggal < 10 ? "0" + tanggal : tanggal;
    let hari = date.getDay();
    let jam = date.getHours();
    jam = jam < 10 ? "0" + jam : jam;
    let menit = date.getMinutes();
    menit = menit < 10 ? "0" + menit : menit;
    let detik = date.getSeconds();
    detik = detik < 10 ? "0" + detik : detik;
    let updated =
      days[hari] +
      ", " +
      tanggal +
      " " +
      months[bulan] +
      " " +
      tahun +
      " " +
      jam +
      ":" +
      menit +
      ":" +
      detik;
    setLastUpdate(updated);
  };
  const changeCountry = async (slug, country) => {
    setLoadingDate(true);
    setLoadingData(true);
    if (slug !== "world") {
      setWorld(false);
      setCurSlug(slug);
      setCurCountry(country);
      const fetchedData = await getCountriesData(slug);
      console.log(fetchedData);
      if (fetchedData === undefined) {
        console.log("masuk");
        setData([]);
        setLoadingData(false);
      } else {
        countries.forEach((negara) => {
          if (negara.Slug === slug) {
            setUpdated(negara.Date);
          }
        });
        let all = true;
        let firstDate = new Date(fetchedData[0].Date);
        let lastDate = new Date(fetchedData[fetchedData.length - 1].Date);
        let interval = [];
        interval.push(firstDate);
        interval.push(lastDate);
        setSelectedDate(interval);
        setInterval(interval);
        getData(slug, firstDate, lastDate, all);
      }
    } else {
      setWorld(true);
      setData(summaryData.Global);
      setUpdated(summaryData.Date);
      setLoadingData(false);
    }
    setLoadingDate(false);
  };
  const changeDate = (date) => {
    setSelectedDate(date);
    getData(curSlug, date[0], date[1]);
  };
  const getData = async (slug, firstDate, lastDate, all = false) => {
    setLoadingData(true);
    setSame(true);
    let from;
    if (all) {
      from = firstDate.toISOString().split(".")[0] + "Z";
    } else {
      if (firstDate.getTime() !== dateInterval[0].getTime()) {
        setSame(false);
        let dayBefore = new Date(firstDate);
        dayBefore.setDate(firstDate.getDate() - 1);
        from = dayBefore.toISOString().split(".")[0] + "Z";
      } else {
        from = firstDate.toISOString().split(".")[0] + "Z";
      }
    }
    let to = lastDate.toISOString().split(".")[0] + "Z";
    const fetchedData = await getCountriesData(slug, from, to);
    setData(fetchedData);
    setLoadingData(false);
  };
  useEffect(() => {
    fetchSummaryData();
  }, []);
  return (
    <div>
      <Header />
      <div className="text-center">
        <CountryPicker placeholder="Dunia" data={countries} onChange={changeCountry} />
        <DateFilter
          country={curCountry}
          isLoading={isLoadingDate}
          onChange={changeDate}
          selectedDate={selectedDate}
          minDate={dateInterval[0]}
          maxDate={dateInterval[1]}
          isWorld={world}
        />
        <Status
          isLoading={isLoadingData}
          isWorld={world}
          same={same}
          data={data}
          lastUpdate={lastUpdate}
        />
      </div>
      <div>
        {world ? (
          <TopWorldGraph
            isLoading={isLoadingData}
            sortedConfirmedCountry={sortedConfirmedCountry}
            sortedRecoveredCountry={sortedRecoveredCountry}
            sortedDeathsCountry={sortedDeathsCountry}
          />
        ) : (
          <GraphStatus
            isLoading={isLoadingData}
            data={data}
            curCountry={curCountry}
          />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Country;
