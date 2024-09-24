import { searchCatBreeds } from '../api/cat-api';
import { searchDogBreeds } from '../api/dog-api';

const searchBreeds = async (query: string) => {
  const cats = await searchCatBreeds(query);
  const dogs = await searchDogBreeds(query);
  return [...cats, ...dogs];
};

export default searchBreeds;
