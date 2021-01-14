import React, { useEffect, useState } from "react";
import "./About.css";
import Header from "../../components/layout/header/pages/Pages";
import Footer from "../../components/layout/footer/Footer";
import { getContributors } from "../../api/Api";
import Tentang from "../../components/contributors/Tentang";
import Contributors from "../../components/contributors/Contributors";

function About() {
  const [contributors, setContributors] = useState([]);
  const [loading, setLoading] = useState(true);
  const getDev = async () => {
    setLoading(true);
    let fetchedContributors = await getContributors();
    let contributorsData = [];
    let i = 0;
    for (i; i < fetchedContributors.length; i++) {
      const response = await fetch(fetchedContributors[i].url);
      const json = await response.json();
      contributorsData.push({
        image: json.avatar_url,
        link: json.html_url,
        name: json.name,
      });
    }
    setContributors(contributorsData);
    setLoading(false);
  };
  useEffect(() => {
    getDev();
  }, []);
  return (
    <>
      <Header />
      <Tentang />
      <Contributors isLoading={loading} data={contributors} />
      <Footer />
    </>
  );
}

export default About;
