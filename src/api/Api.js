import API from './index';
import axios from 'axios';


// export const getData = async (country) => {
//     let prefix = '/all';
//     if (country) {
//         prefix = '/countries/' + country;
//     }
//     try {
//         const response = await API.get(prefix);
//         return response.data;
//     }
//     catch (error) {
//         return error;
//     }
// }

// export const getCountriesData = async () => {
//     try {
//         const response = await API.get('/countries');
//         return response.data;
//     }
//     catch (error) {
//         return error;
//     }
// }

export const getProvinceData = async () => {
    try {
        const response = await axios.get('https://data.covid19.go.id/public/api/prov.json');
        return response.data;
    } catch (error) {
        return error;
    }
}

export const getProvinceHospital = async () => {
    try {
        const response = await axios.get('https://dekontaminasi.com/api/id/covid19/hospitals');
        return response.data;
    } catch (error) {
        return error;
    }
}