'use client';
import { useCallback, useState, useEffect } from 'react';
import { getCatBreed } from '../../../../lib/api/cat-api';
import Container from '@/app/components/container';

export interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  const [breedInfo, setBreedInfo] = useState([]);

  const getBreedInfo = useCallback(async () => {
    const data = await getCatBreed(params.id);
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
      <Container>
        <h1>Breed page {params.id}</h1>
        <div className="flex">
          <img
            src={`https://cdn2.thecatapi.com/images/${breedInfo.reference_image_id}.jpg`}
          ></img>
          <div>
            <h1>{breedInfo.name}</h1>
            <p>{breedInfo.description}</p>
            <p>Origin: {breedInfo.origin}</p>
            <p>Temperament: {breedInfo.temperament}</p>
          </div>
        </div>
      </Container>
    </main>
  );
}

// adaptability
// :
// 5
// affection_level
// :
// 5
// alt_names
// :
// ""
// cfa_url
// :
// "http://cfa.org/Breeds/BreedsAB/AmericanBobtail.aspx"
// child_friendly
// :
// 4
// country_code
// :
// "US"
// country_codes
// :
// "US"
// description
// :
// "American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. They are extremely interactive cats that bond with their human family with great devotion."
// dog_friendly
// :
// 5
// energy_level
// :
// 3
// experimental
// :
// 0
// grooming
// :
// 1
// hairless
// :
// 0
// health_issues
// :
// 1
// hypoallergenic
// :
// 0
// id
// :
// "abob"
// indoor
// :
// 0
// intelligence
// :
// 5
// lap
// :
// 1
// life_span
// :
// "11 - 15"
// name
// :
// "American Bobtail"
// natural
// :
// 0
// origin
// :
// "United States"
// rare
// :
// 0
// reference_image_id
// :
// "hBXicehMA"
// rex
// :
// 0
// shedding_level
// :
// 3
// short_legs
// :
// 0
// social_needs
// :
// 3
// stranger_friendly
// :
// 3
// suppressed_tail
// :
// 1
// temperament
// :
// "Intelligent, Interactive, Lively, Playful, Sensitive"
// vcahospitals_url
// :
// "https://vcahospitals.com/know-your-pet/cat-breeds/american-bobtail"
// vetstreet_url
// :
// "http://www.vetstreet.com/cats/american-bobtail"
// vocalisation
// :
// 3
// weight
// :
// {imperial: '7 - 16', metric: '3 - 7'}
// wikipedia_url
// :
// "https://en.wikipedia.org/wiki/American_Bobtail"
