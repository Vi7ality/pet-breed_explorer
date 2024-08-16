'use client';

import { useCallback, useEffect, useState } from 'react';
import getPets from '../../../lib/utils/getPets';
import PetListItem from './pet-list-item';

interface Pet {
  id: string;
  name: string;
  image: {
    url: string;
  };
  species: 'cat' | 'dog';
  [key: string]: unknown;
}

export default function PetList() {
  const [petList, setPetList] = useState<Pet[]>([]);

  const getPetList = useCallback(async () => {
    try {
      const pets: Pet[] = await getPets();
      pets && setPetList(pets);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getPetList();
  }, [getPetList]);
  return (
    <ul className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {petList.length > 0 &&
        petList.map((item) => (
          <PetListItem
            key={item.id}
            name={item.name}
            id={item.id}
            url={item.image.url}
            species={item.species}
          />
        ))}
    </ul>
  );
}
