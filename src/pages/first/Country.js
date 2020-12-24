import React, { useState, useEffect } from "react";
import Header from "../../components/layout/header/pages/Pages";
import Footer from "../../components/layout/footer/Footer";
import DropdownCustom from "../../components/dropdowns/DropdownCustom";
import DateFilter from "../../components/RangeFilter/DateFilter";
import Status from "../../components/data-status/Status";
import { getSummaryData, getCountriesData } from "../../api/Api";

function Country() {
  const [curSlug, setCurSlug] = useState();
  const [curCountry, setCurCountry] = useState();
  const [summaryData, setSummaryData] = useState({});
  const [lastUpdate, setLastUpdate] = useState();
  const [countries, setCountries] = useState([]);
  const [dateInterval, setInterval] = useState([]);
  const [selectedDate, setSelectedDate] = useState([]);
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
  };
  const setUpdated = (tanggalUpdate) => {
    let date = new Date(tanggalUpdate);
    let tahun = date.getFullYear();
    let bulan = date.getMonth();
    let tanggal = date.getDate();
    let hari = date.getDay();
    let jam = date.getHours();
    let menit = date.getMinutes();
    let detik = date.getSeconds();
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
    setCurSlug(slug);
    setCurCountry(country);
    if (slug !== "world") {
      const fetchedData = await getCountriesData(slug);
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
      setWorld(false);
      getData(slug, firstDate, lastDate, all);
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
    <div className="text-center">
      <Header />
      <DropdownCustom country data={countries} onChange={changeCountry} />
      {!world ? (
        <DateFilter
          country={curCountry}
          isLoading={isLoadingDate}
          onChange={changeDate}
          selectedDate={selectedDate}
          minDate={dateInterval[0]}
          maxDate={dateInterval[1]}
        />
      ) : (
        <></>
      )}
      <Status
        isLoading={isLoadingData}
        isWorld={world}
        same={same}
        data={data}
        lastUpdate={lastUpdate}
      />
      <Footer />
    </div>
  );
}

export default Country;
