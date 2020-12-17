import axios from 'axios';


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