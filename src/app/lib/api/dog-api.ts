import axios, { AxiosInstance } from 'axios';
import { PetInterface } from '../types/types';

const DOG_API_URL = 'https://api.thedogapi.com/v1';
const API_KEY = process.env.NEXT_PUBLIC_DOG_APIKEY;

const dogApi: AxiosInstance = axios.create({
  baseURL: DOG_API_URL,
  headers: { 'x-api-key': API_KEY },
});

export const getDogBreedList = async (quantity: number) => {
  try {
    const res = await dogApi.get(`breeds?limit=${quantity}`);
    const breeds = res.data.map((breed: PetInterface) => {
      return { species: 'dog', ...breed, id: String(breed.id) };
    });
    return breeds;
  } catch (error) {
    console.error(error);
  }
};

export const getDogBreed = async (id: string) => {
  try {
    const res = await dogApi.get(`breeds/${id}`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const searchDogBreeds = async (query: string) => {
  const res = await dogApi.get(`breeds/search?q=${query}`);
  const breeds = res.data.map((breed: PetInterface) => {
    return { species: 'dog', ...breed };
  });
  return breeds;
};
