import axios, { AxiosInstance } from 'axios';

const DOG_API_URL = 'https://api.thedogapi.com/v1';
const API_KEY = process.env.NEXT_PUBLIC_DOG_APIKEY;

const dogApi: AxiosInstance = axios.create({
  baseURL: DOG_API_URL,
  headers: { 'x-api-key': API_KEY },
});

export const getDogs = async (quantity: number) => {
  try {
    const res = await dogApi.get(`images/search?limit=${quantity}`);
    return res.data;
  } catch (error) {}
};
