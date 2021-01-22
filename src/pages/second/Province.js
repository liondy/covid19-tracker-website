import "./Province.css";
import Header from "../../components/layout/header/pages/Pages";
import Footer from "../../components/layout/footer/Footer";
import { getProvinces, getProvinceHospital, getZonaIndonesia } from "../../api/Api";
import React, { useState, useEffect } from "react";
import DataP from "../../components/tables/DataP";
import DataRS from "../../components/tables/DataRS";
import Dropdown from "../../components/dropdowns/DropdownCustom";
import StatusP from "../../components/data-status/StatusP";

function Province() {
  const [province, setProvince] = useState([]);
  const [curGeom, setCurGeom] = useState({});
  const [data, setData] = useState([]);
  const [curHospital, setCurHospital] = useState([]);
  const [curZona, setCurZona] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [isIndo, setIndo] = useState(true);
  const [RSLoading, setRSLoading] = useState(true);


  const fetchData = async () => {
    const fetchedProvinces = await getProvinces();
    const fetchedZona = await getZonaIndonesia();
    fetchedProvinces.sort(sortData("Provinsi"));

    const temp = [];
    for(let prov in fetchedProvinces){
      if(fetchedProvinces[prov].Provinsi!="Indonesia"){
        temp.push(fetchedProvinces[prov]);
      }
    }

    setProvince(fetchedProvinces);
    setData(temp);
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
    setLoading(true);
    const fetchedDataProvince = await getProvinces();
    if(province=="Indonesia"){
      setIndo(true);
      var curProv = {};
      for (let prov in fetchedDataProvince) {
        if (fetchedDataProvince[prov].Provinsi != province) {
          curProv = fetchedDataProvince[prov];
        }
      }
      setData(curProv);
    } else {
      setIndo(false);
      var curProv = {};
      for (let prov in fetchedDataProvince) {
        if (fetchedDataProvince[prov].Provinsi == province) {
          curProv = fetchedDataProvince[prov];
          break;
        }
      }
      setData(curProv);
      setRSLoading(true);
      const fetchedDataHospital = await getProvinceHospital();
      const hospital = [];
      for (let prov in fetchedDataHospital) {
        if (fetchedDataHospital[prov].region.toLowerCase().includes(province.toLowerCase())) {
          var temp = fetchedDataHospital[prov];
          temp.province = province;
          hospital.push(temp);
        }
      }
      setCurHospital(hospital);
      setRSLoading(false);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <Header />
      <Dropdown placeholder="Indonesia" data={province} onChange={changeProvince} />
      {isIndo==true ? (
        <DataP data={data} status={isLoading}/>
      ):(
        <div>
          <StatusP isLoading={isLoading} data={data}/>
          <DataRS data={curHospital} status={RSLoading}/>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Province;
