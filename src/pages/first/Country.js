import "./Country.css";
import React, { useState, useEffect } from "react";
import Header from "../../components/layout/header/pages/Pages";
import Footer from "../../components/layout/footer/Footer";
import DropdownCustom from "../../components/dropdowns/DropdownCustom";
import { getSummaryData } from "../../api/Api";

function Country() {
  const [summaryData, setSummaryData] = useState({});
  const [countries, setCountries] = useState([]);
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);
  const fetchSummaryData = async () => {
    const fetchedData = await getSummaryData();
    setData(fetchedData.Global);
    setCountries(fetchedData.Countries);
    setSummaryData(fetchedData);
  };
  const changeCountry = async (slug) => {
    setLoading(true);
    setData(summaryData.Global);
    countries.forEach((country) => {
      if (country.Slug === slug) {
        setData(country);
      }
    });
    setLoading(false);
  };
  useEffect(() => {
    fetchSummaryData();
  }, []);
  return (
    <>
      <Header />
      <DropdownCustom data={countries} onChange={changeCountry} />
      {isLoading ? <div>Loading...</div> : <div>{console.log(data)}</div>}
      <Footer />
    </>
  );
}

export default Country;
