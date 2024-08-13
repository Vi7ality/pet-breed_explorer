'use client';
import { useCallback, useState } from 'react';

export interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  const [data, setData] = useState([]);
  console.log(typeof params.id);
  // const getBreedInfo = useCallback(async () => {}, []);
  // useState();
  return (
    <main>
      <h1>Breed page {params.id}</h1>
    </main>
  );
}
