import API from "./index";
import axios from "axios";

export const getSummaryData = async () => {
  try {
    const response = await API.get("summary");
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getCountriesData = async (country, start, end) => {
  const response = await API.get(
    "country/" + country + "?from=" + start + "&to=" + end
  ).catch((err) => {
    return [];
  });
  return response.data;
};

export const getProvinceData = async () => {
  try {
    const response = await axios.get(
      "https://services5.arcgis.com/VS6HdKS0VfIhv8Ct/arcgis/rest/services/COVID19_Indonesia_per_Provinsi/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json"
    );
    return response.data.features;
  } catch (error) {
    return error;
  }
};

const serverless =
  "https://serverless-covid19-indonesia-api.liondy.vercel.app/api/";
export const getProvinceHospital = async () => {
  try {
    const response = await axios.get(serverless + "hospital");
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getZonaIndonesia = async () => {
  try {
    const response = await axios.get(serverless + "zona-indonesia");
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getContributors = async () => {
  try {
    const response = await axios.get(
      "https://api.github.com/repos/liondy/covid19-tracker-website/contributors"
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
