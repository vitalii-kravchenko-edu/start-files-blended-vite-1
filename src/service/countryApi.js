import axios from 'axios';
import { transformCountriesData, transformCountryData } from 'helpers';

axios.defaults.baseURL = 'https://restcountries.com/v3.1';



export const fetchCountry = async id => {
  const { data } = await axios.get(`/name/${id}`);
  const country = transformCountryData(data);

  return country[0];
};

export const fetchByRegion = async region => {
  const { data } = await axios.get(`/region/${region}`);
  const countries = transformCountriesData(data);

  return countries;
};
