import PetListItem from '@/app/components/pet-list-item';
import { getDogBreedList } from '../../../../lib/api/dog-api';
import { PetInterface } from '../../../../lib/utils/types';

interface Pet extends PetInterface {
  species: 'cat' | 'dog;';
}

export default async function PetList() {
  const petList = await getDogBreedList(12);

  return (
    <ul className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {petList.length > 0 &&
        petList.map((item: Pet) => (
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
