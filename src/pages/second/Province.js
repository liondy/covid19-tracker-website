import "./Province.css";
import Header from "../../components/layout/header/pages/Pages";
import Footer from "../../components/layout/footer/Footer";
import { getProvinces, getProvinceHospital, getZonaIndonesia } from "../../api/Api";
import React, { useState, useEffect } from "react";
import DataP from "../../components/tables/DataP";
import Dropdown from "../../components/dropdowns/DropdownCustom";

function Province() {
  const [province, setProvince] = useState([]);
  const [curGeom, setCurGeom] = useState({});
  const [data, setData] = useState([]);
  const [curHospital, setCurHospital] = useState({});
  const [curZona, setCurZona] = useState({});
  const [isLoading, setLoading] = useState(true);


  const fetchData = async () => {
    const fetchedProvinces = await getProvinces();
    const fetchedHospital = await getProvinceHospital();
    const fetchedZona = await getZonaIndonesia();
    fetchedHospital.sort(sortData("province"));
    fetchedProvinces.sort(sortData("Provinsi"));

    setProvince(fetchedProvinces);
    setCurHospital(fetchedHospital);
    setCurZona(fetchedZona);

    console.log("fetchedProvinces:");
    console.log(fetchedProvinces);

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
    setLoading(true);
    const fetchedDataProvince = await getProvinces();

    var curProv = {};
    for (let prov in fetchedDataProvince) {
      if (fetchedDataProvince[prov].Provinsi == province) {
        curProv = fetchedDataProvince[prov];
        break;
      }
    }
    setData(curProv);
    const fetchedDataHospital = await getProvinceHospital();
    const hospital = [];
    for (let prov in fetchedDataHospital) {
      if (fetchedDataHospital[prov].region.toLowerCase().includes(province.toLowerCase())) {
        var temp = fetchedDataHospital[prov];
        temp.province = province;
        hospital.push(temp);
      }
    }
    console.log(hospital);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Header />
      <Dropdown placeholder="Indonesia" data={province} onChange={changeProvince} />
      <DataP data={province} status={isLoading}/>
      <Footer />
    </>
  );
}

export default Province;
