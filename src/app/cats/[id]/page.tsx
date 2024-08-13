'use client';
import { useCallback, useState, useEffect } from 'react';
import { getCatBreed } from '../../../../lib/api/cat-api';

export interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  const [breedInfo, setBreedInfo] = useState([]);

  const getBreedInfo = useCallback(async () => {
    const data = await getCatBreed(params.id);
    console.log('Fetched data:', data);
    if (data) {
      setBreedInfo(data);
    }
  }, [params.id]);

  useEffect(() => {
    getBreedInfo();
  }, [getBreedInfo]);

  console.log('breedInfo', breedInfo);

  return (
    <main>
      <h1>Breed page {params.id}</h1>
    </main>
  );
}
