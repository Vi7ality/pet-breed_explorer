'use client';
import { getCatBreedList } from '../api/cat-api';
import { getDogBreedList } from '../api/dog-api';

interface QuantityProps {
  catQuantity?: number;
  dogQuantity?: number;
}

export default async function getPets({
  catQuantity = 6,
  dogQuantity = 6,
}: QuantityProps = {}) {
  const cats = await getCatBreedList(catQuantity);
  const dogs = await getDogBreedList(dogQuantity);
  return [...cats, ...dogs];
}
