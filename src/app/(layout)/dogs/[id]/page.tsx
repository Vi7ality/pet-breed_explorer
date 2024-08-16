'use client';
import { useCallback, useEffect, useState } from 'react';
import { getDogBreed } from '../../../../../lib/api/dog-api';
import Container from '@/app/components/container';
import Image from 'next/image';

export interface PageProps {
  params: { id: string };
}

interface BreedInfo {
  reference_image_id: string;
  name: string;
  description: string;
  origin: string;
  temperament: string;
  breed_group: string;
  life_span: string;
  weight: {
    imperial: string;
    metric: string;
  };
  [key: string]: unknown;
}

export default function Page({ params }: PageProps) {
  const [breedInfo, setBreedInfo] = useState<BreedInfo | null>(null);

  const getBreedInfo = useCallback(async () => {
    const data = await getDogBreed(params.id);
    if (data) {
      setBreedInfo(data);
    }
  }, [params.id]);

  useEffect(() => {
    getBreedInfo();
  }, [getBreedInfo]);
  return (
    <Container>
      {breedInfo && (
        <section className="flex flex-col overflow-hidden bg-white shadow-lg md:flex-row">
          <div className="md:w-1/2">
            <Image
              width={600}
              height={400}
              alt={`${breedInfo.name} image`}
              src={`https://cdn2.thedogapi.com/images/${breedInfo.reference_image_id}.jpg`}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center p-6 md:w-1/2">
            <h1 className="mb-4 text-3xl font-bold text-gray-900">
              {breedInfo.name}
            </h1>
            <p className="mb-4 text-gray-700">{breedInfo.description}</p>
            <p className="mb-2 text-gray-600">
              <strong>Origin:</strong> {breedInfo.origin}
            </p>
            <p className="text-gray-600">
              <strong>Temperament:</strong> {breedInfo.temperament}
            </p>
            <p className="text-gray-600">
              <strong>Breed group:</strong> {breedInfo.breed_group}
            </p>
            <p className="text-gray-600">
              <strong>Life span:</strong> {breedInfo.life_span}
            </p>
            <p className="text-gray-600">
              <strong>Weight:</strong> {breedInfo.weight.metric} kg
            </p>
          </div>
        </section>
      )}
    </Container>
  );
}
