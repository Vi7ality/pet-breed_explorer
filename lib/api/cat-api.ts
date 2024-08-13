import axios, { Axios, AxiosInstance } from 'axios';

const CAT_API_URL = 'https://api.thecatapi.com/v1';
const API_KEY = process.env.NEXT_PUBLIC_CAT_APIKEY;

const catApi: AxiosInstance = axios.create({
  baseURL: CAT_API_URL,
  headers: { 'x-api-key': API_KEY },
});

export const getCatBreedList = async (quantity: number) => {
  try {
    const res = await catApi.get(`breeds?limit=${quantity}`);
    const breeds = res.data.map((breed) => {
      return { species: 'cat', ...breed };
    });

    return breeds;
  } catch (error) {
    console.error(error);
  }
};

export const getCatBreed = async (id: string) => {
  try {
    const res = await catApi.get(`breeds/${id}`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
