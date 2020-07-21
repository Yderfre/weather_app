import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';

const API_KEY ='63d2f71d5a3e8e39e005d84d8e13dcbc'

export const fetchWeather = async (query)=>{
    const { data } = await axios.get(URL, {
        params:{
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }

    } );
    return data;
}