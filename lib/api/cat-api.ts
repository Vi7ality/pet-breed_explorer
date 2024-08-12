import axios, { AxiosInstance } from 'axios';

const CAT_API_URL = 'https://api.thecatapi.com/v1';
const API_KEY = process.env.NEXT_PUBLIC_CAT_APIKEY;

const catApi: AxiosInstance = axios.create({
  baseURL: CAT_API_URL,
  headers: { 'x-api-key': API_KEY },
});

export const getCats = async (quantity: number) => {
  try {
    const res = await catApi.get(`images/search?limit=${quantity}`);
    return res.data;
  } catch (error) {}
};
