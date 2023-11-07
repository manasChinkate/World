

const link = "https://restcountries.com/v2";
import axios from 'axios';

export  async function getData(){
   
     return await axios.get(`${link}/all` ,{
      timeout:5000
     });
}

export function getdetails(countryCode){
   return axios.get(`${link}/alpha/${countryCode}` ,{
      timeout:5000
   });
}

