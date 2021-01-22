import "./Province.css";
import Header from "../../components/layout/header/pages/Pages";
import Footer from "../../components/layout/footer/Footer";
import { getProvinces, getProvinceHospital } from "../../api/Api";
import React, { useState, useEffect } from "react";
import DataP from "../../components/tables/DataP";
import DataRS from "../../components/tables/DataRS";
import Dropdown from "../../components/dropdowns/DropdownCustom";
import StatusP from "../../components/data-status/StatusP";

function Province() {
  const [province, setProvince] = useState([]);
  const [data, setData] = useState([]);
  const [curHospital, setCurHospital] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isIndo, setIndo] = useState(true);
  const [RSLoading, setRSLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    const fetchedProvinces = await getProvinces();
    fetchedProvinces.sort(sortData("Provinsi"));

    const temp = [];
    for (let prov in fetchedProvinces) {
      if (fetchedProvinces[prov].Provinsi !== "Indonesia") {
        temp.push(fetchedProvinces[prov]);
      }
    }

    setProvince(fetchedProvinces);
    setData(temp);
    setLoading(false);
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
    if (province === "Indonesia") {
      setIndo(true);
      let provs = [];
      for (let prov in fetchedDataProvince) {
        if (fetchedDataProvince[prov].Provinsi !== province) {
          provs.push(fetchedDataProvince[prov]);
        }
      }
      setData(provs);
    } else {
      setIndo(false);
      let curProv = {};
      for (let prov in fetchedDataProvince) {
        if (fetchedDataProvince[prov].Provinsi === province) {
          curProv = fetchedDataProvince[prov];
          break;
        }
      }
      setData(curProv);
      setRSLoading(true);
      const fetchedDataHospital = await getProvinceHospital();
      const hospital = [];
      for (let prov in fetchedDataHospital) {
        if (
          fetchedDataHospital[prov].region
            .toLowerCase()
            .includes(province.toLowerCase())
        ) {
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
      <h3 className="text-center">Pilih Provinsi Anda</h3>
      <Dropdown
        placeholder="Indonesia"
        data={province}
        onChange={changeProvince}
      />
      {isIndo ? (
        <div className="p-5">
          <DataP data={data} status={isLoading} />
        </div>
      ) : (
        <div className="p-5">
          <StatusP isLoading={isLoading} data={data} />
          <h2>Rumah Sakit Rujukan Pasien Covid-19</h2>
          <DataRS data={curHospital} status={RSLoading} />
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Province;
