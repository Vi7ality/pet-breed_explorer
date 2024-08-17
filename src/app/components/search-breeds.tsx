'use client';

import { useState, useEffect, useCallback } from 'react';
import Container from './container';
import searchBreeds from '../../../lib/utils/searchBreeds';
import Link from 'next/link';

interface CatBreed {
  id: string;
  name: string;
  species: string;
}

export default function CatSearchAutocomplete() {
  const [query, setQuery] = useState('');
  const [filteredBreeds, setFilteredBreeds] = useState<CatBreed[]>([]);

  useEffect(() => {
    const fetchBreeds = async () => {
      if (query.trim() !== '') {
        try {
          const breeds = await searchBreeds(query);
          setFilteredBreeds(breeds);
        } catch (error) {
          console.error('Error fetching cat breeds:', error);
        }
      } else {
        setFilteredBreeds([]);
      }
    };

    fetchBreeds();
  }, [query]);

  // const handleSelectBreed = (breed: CatBreed) => {
  //   setQuery(breed.name);
  //   setFilteredBreeds([]);
  // };

  return (
    <Container className="flex justify-center">
      <div className="relative w-full max-w-md">
        <input
          type="text"
          className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search cat breeds..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {filteredBreeds.length > 0 && (
          <ul className="absolute z-50 mt-1 max-h-60 w-full overflow-y-auto rounded-md border border-gray-300 bg-white shadow-lg">
            {filteredBreeds.map((breed) => (
              <li
                key={breed.id}
                className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                // onClick={() => handleSelectBreed(breed)}
              >
                <Link
                  href={
                    breed.species === 'cat'
                      ? `/cats/${breed.id}`
                      : `/dogs/${breed.id}`
                  }
                >
                  {breed.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Container>
  );
}
