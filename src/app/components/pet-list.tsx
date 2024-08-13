'use client';

import { useCallback, useEffect, useState } from 'react';
import getPets from '../../../lib/utils/getPets';

export default function PetList() {
  const [petList, setPetList] = useState([]);
  console.log(petList);

  const getPetList = useCallback(async () => {
    try {
      const pets = await getPets();
      pets && setPetList(pets);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getPetList();
  }, [getPetList]);
  return <ul></ul>;
}
