import "./Province.css";
import Header from "../../components/layout/header/pages/Pages";
import Footer from "../../components/layout/footer/Footer";
import { getProvinceData, getProvinceHospital } from "../../api/Api";
import React, { useState, useEffect } from "react";

function Province() {
  const fetchData = async () => {
    const fetchedData = await getProvinceData();
    console.log(fetchedData);
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
