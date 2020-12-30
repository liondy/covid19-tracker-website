import "./Province.css";
import Header from "../../components/layout/header/pages/Pages";
import Footer from "../../components/layout/footer/Footer";
import { getProvinceData, getProvinceHospital } from "../../api/Api";
import React, { useState, useEffect } from "react";
import Dropdown from "../../components/dropdowns/DropdownCustom";

function Province() {
  const [curAttr, setCurAttr] = useState({});
  const [curGeom, setCurGeom] = useState({});
  const [curHospital, setCurHospital] = useState({});
  const [isLoadingData, setLoadingData] = useState(true);
  const [isLoadingHospital, setLoadingHospital] = useState(true);
  const attr = [];
  const geom = [];
  const fetchData = async () => {
    const fetchedData = await getProvinceData();
    const fetchedHospital = await getProvinceHospital();
  	fetchedHospital.sort(sortData("province"));
  	// mengolah fetchedData
    for (let data in fetchedData){
    	attr.push(fetchedData[data].attributes);
    	geom.push(fetchedData[data].geometry);
    }
    setCurAttr(attr);
    setCurGeom(geom);
    console.log("fetchedData:");
    console.log("-attr:");
    console.log(attr);
    console.log("-geom:");
    console.log(geom);
    // mengolah fetchedHospital
  	setCurHospital(fetchedHospital);
  	console.log("fetchedHospital:");
  	console.log(fetchedHospital);
  };
  const sortData = (property) => {
    return function (a, b) {
      if (a[property] > b[property]) return 1;
      else if (a[property] < b[property]) return -1;
      return 0;
    };
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Header />
      {/* Place content here */}
      <Footer />
    </>
  );
}

export default Province;
