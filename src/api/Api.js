import API from "./index";
import API2 from "./index2";
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
    const response = await API2.get("/");
    return response.data;
  } catch (error) {
    console.log("error");
    console.log(error);
    return error;
  }
};

export const getProvinceHospital = async () => {
  try {
    const response = await axios.get("/api/id/covid19/hospitals", {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};
