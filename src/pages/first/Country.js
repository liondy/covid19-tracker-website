import React, { useState, useEffect } from "react";
import Header from "../../components/layout/header/pages/Pages";
import Footer from "../../components/layout/footer/Footer";
import DropdownCustom from "../../components/dropdowns/DropdownCustom";
import DateFilter from "../../components/RangeFilter/DateFilter";
import { getSummaryData, getCountriesData } from "../../api/Api";

function Country() {
  const [curCountry, setCurrCountry] = useState();
  const [summaryData, setSummaryData] = useState({});
  const [countries, setCountries] = useState([]);
  const [dateInterval, setInterval] = useState([]);
  const [selectedDate, setSelectedDate] = useState([]);
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const fetchSummaryData = async () => {
    const fetchedData = await getSummaryData();
    setData(fetchedData.Global);
    setCountries(fetchedData.Countries);
    setSummaryData(fetchedData);
  };
  const changeCountry = async (slug) => {
    setLoading(true);
    setCurrCountry(slug);
    if (slug !== "world") {
      const fetchedData = await getCountriesData(slug);
      let firstDate = new Date(fetchedData[0].Date);
      let lastDate = new Date(fetchedData[fetchedData.length - 1].Date);
      let interval = [];
      interval.push(firstDate);
      interval.push(lastDate);
      setSelectedDate(interval);
      setInterval(interval);
      getData(slug, firstDate, lastDate);
    }
    // setData(summaryData.Global);
    setLoading(false);
  };
  const changeDate = (date) => {
    setSelectedDate(date);
    getData(curCountry, date[0], date[1]);
  };
  const getData = async (slug, firstDate, lastDate) => {
    let from = firstDate.toISOString().split("T")[0];
    let to = lastDate.toISOString().split("T")[0];
    const fetchedData = await getCountriesData(slug, from, to);
    setData(fetchedData);
  };
  useEffect(() => {
    fetchSummaryData();
  }, []);
  return (
    <div className="text-center">
      <Header />
      <DropdownCustom country data={countries} onChange={changeCountry} />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <DateFilter
          changeDate={changeDate}
          selectedDate={selectedDate}
          minDate={dateInterval[0]}
          maxDate={dateInterval[1]}
        />
      )}
      <Footer />
    </div>
  );
}

export default Country;
