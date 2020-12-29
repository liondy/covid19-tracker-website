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
  try {
    const response = await API.get(
      "country/" + country + "?from=" + start + "&to=" + end
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getProvinceData = async () => {
  try {
    const response = await axios.get(
      "https://api.kawalcorona.com/indonesia/provinsi"
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getProvinceHospital = async () => {
  try {
    const response = await axios.get(
      "https://dekontaminasi.com/api/id/covid19/hospitals"
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
