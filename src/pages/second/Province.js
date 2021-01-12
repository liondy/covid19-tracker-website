import "./Province.css";
import Header from "../../components/layout/header/pages/Pages";
import Footer from "../../components/layout/footer/Footer";
import { getProvinces, getProvinceHospital, getZonaIndonesia} from "../../api/Api";
import React, { useState, useEffect } from "react";
import Dropdown from "../../components/dropdowns/DropdownCustom";

function Province() {
  const [curProvince, setCurProvince] = useState({});
  const [curGeom, setCurGeom] = useState({});
  const [curHospital, setCurHospital] = useState({});
  const [curZona, setCurZona] = useState({});
  const [isLoading, setLoading] = useState(true);
  const fetchData = async () => {
    const fetchedProvinces = await getProvinces();
    const fetchedHospital = await getProvinceHospital();
    const fetchedZona = await getZonaIndonesia();
    fetchedHospital.sort(sortData("province"));

    setCurProvince(fetchedProvinces);
    setCurHospital(fetchedHospital);
    setCurZona(fetchedZona);

    // console.log("fetchedProvinces:");
    // console.log(fetchedProvinces);

    // console.log("fetchedHospital:");
    // console.log(fetchedHospital);

    // console.log("fetchedZona:");
    // console.log(fetchedZona);
  };
  const sortData = (property) => {
    return function (a, b) {
      if (a[property] > b[property]) return 1;
      else if (a[property] < b[property]) return -1;
      return 0;
    };
  };
  const changeProvince = async (province) => {
    console.log("p");
    console.log(province);
    setLoading(true);
    const fetchedDataProvince = await getProvinces();
    for (let prov in fetchedDataProvince){
      if(prov.Province==province){
        fetchedDataProvince = prov;
      }
    }
    console.log(fetchedDataProvince);
    setCurProvince(fetchedDataProvince);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Header />
      <Dropdown placeholder="Indonesia" data={curProvince} onChange={changeProvince} />
      <Footer />
    </>
  );
}

export default Province;
