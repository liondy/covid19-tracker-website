import "./Country.css";
import React, { useState, useEffect } from "react";
import Header from "../../components/layout/header/pages/Pages";
import Footer from "../../components/layout/footer/Footer";
import DropdownCustom from "../../components/dropdowns/DropdownCustom";
import { getAllCountries, getCountriesData } from "../../api/Api";

function Country() {
  const [negara, inputNegara] = useState([]);
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);
  const fetchCountries = async () => {
    const fetchedCountries = await getAllCountries();
    fetchedCountries.sort(sortData("Slug"));
    inputNegara(fetchedCountries);
  };
  const sortData = (property) => {
    return function (a, b) {
      if (a[property] > b[property]) return 1;
      else if (a[property] < b[property]) return -1;
      return 0;
    };
  };
  const changeCountry = async (country) => {
    console.log(country);
    setLoading(true);
    const fetchDataCountry = await getCountriesData(country);
    console.log(fetchDataCountry);
    setData(fetchDataCountry);
    setLoading(false);
    console.log(fetchDataCountry[0].Confirmed);
  };
  useEffect(() => {
    fetchCountries();
  }, []);
  return (
    <>
      <Header />
      <DropdownCustom data={negara} changeCountry={changeCountry} />
      {isLoading ? <div>Loading...</div> : <div>{data[0].Confirmed}</div>}
      <Footer />
    </>
  );
}

export default Country;
