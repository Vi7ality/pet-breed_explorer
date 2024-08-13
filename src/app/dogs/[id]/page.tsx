'use client';
import { useCallback, useEffect, useState } from 'react';
import { getDogBreed } from '../../../../lib/api/dog-api';

export interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  const [breedInfo, setbreedInfo] = useState([]);
  const getBreedInfo = useCallback(async () => {
    const data = await getDogBreed(params.id);
    data && setbreedInfo(data);
  }, [params.id]);
  useEffect(() => {
    getBreedInfo();
  });
  console.log('breedInfo', breedInfo);
  return (
    <main>
      <h1>Breed page {params.id}</h1>
    </main>
  );
}
