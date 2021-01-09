import "./Province.css";
import Header from "../../components/layout/header/pages/Pages";
import Footer from "../../components/layout/footer/Footer";
import { getProvinceData, getProvinceHospital, getZonaIndonesia} from "../../api/Api";
import React, { useState, useEffect } from "react";
import Dropdown from "../../components/dropdowns/DropdownCustom";

function Province() {
  const [curAttr, setCurAttr] = useState({});
  const [curGeom, setCurGeom] = useState({});
  const [curHospital, setCurHospital] = useState({});
  const [curZona, setCurZona] = useState({});
  const [isLoadingData, setLoadingData] = useState(true);
  const [isLoadingHospital, setLoadingHospital] = useState(true);
  const attr = [];
  const geom = [];
  const fetchData = async () => {
    const fetchedData = await getProvinceData();
    const fetchedHospital = await getProvinceHospital();
    const fetchedZona = await getZonaIndonesia();
  	fetchedHospital.sort(sortData("province"));
  	// mengolah fetchedData
    for (let data in fetchedData){
    	attr.push(fetchedData[data].attributes);
    	geom.push(fetchedData[data].geometry);
    }

    setCurAttr(attr);
    setCurGeom(geom);

    setCurHospital(fetchedHospital);
    setCurZona(fetchedZona);

    console.log("fetchedData:");
    console.log("-attr:");
    console.log(attr);
    console.log("-geom:");
    console.log(geom);


  	console.log("fetchedHospital:");
  	console.log(fetchedHospital);

    console.log("fetchedZona:");
    console.log(fetchedZona);

    const resiko = new Set();
    for(let r in fetchedZona){
      resiko.add(fetchedZona[r].status);
    }
    console.log(resiko);

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
