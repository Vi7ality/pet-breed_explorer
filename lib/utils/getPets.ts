'use client';
import { getCats } from '../api/cat-api';
import { getDogs } from '../api/dog-api';

interface QuantityProps {
  catQuantity?: number;
  dogQuantity?: number;
}

const getPets = async ({
  catQuantity = 5,
  dogQuantity = 5,
}: QuantityProps = {}) => {
  const cats = await getCats(catQuantity);
  const dogs = await getDogs(dogQuantity);
  return [...cats, ...dogs];
};

export default getPets;
