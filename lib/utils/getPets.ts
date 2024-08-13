'use client';
import { getCatBreeds } from '../api/cat-api';
import { getDogBreeds } from '../api/dog-api';

interface QuantityProps {
  catQuantity?: number;
  dogQuantity?: number;
}

const getPets = async ({
  catQuantity = 6,
  dogQuantity = 6,
}: QuantityProps = {}) => {
  const cats = await getCatBreeds(catQuantity);
  const dogs = await getDogBreeds(dogQuantity);
  return [...cats, ...dogs];
};

export default getPets;
