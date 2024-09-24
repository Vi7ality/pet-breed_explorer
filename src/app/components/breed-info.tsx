import { IBreedInfo } from '../lib/types/types';

interface IBreedInfoProps {
  breedInfo: IBreedInfo;
}

export default function BreedDetails({ breedInfo }: IBreedInfoProps) {
  console.log(breedInfo);
  return (
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
      {breedInfo.breed_group && (
        <p className="text-gray-600">
          <strong>Breed group:</strong> {breedInfo.breed_group}
        </p>
      )}
      {breedInfo.hypoallergenic && (
        <p className="text-gray-600">
          <strong>hypoallergenic:</strong> {breedInfo.hypoallergenic}
        </p>
      )}
      {breedInfo.intelligence && (
        <p className="text-gray-600">
          <strong>intelligence:</strong> {breedInfo.intelligence}
        </p>
      )}
      {breedInfo.life_span && (
        <p className="text-gray-600">
          <strong>Life span:</strong> {breedInfo.life_span}
        </p>
      )}
      {breedInfo.weight.metric && (
        <p className="text-gray-600">
          <strong>Weight:</strong> {breedInfo.weight.metric} kg
        </p>
      )}
    </div>
  );
}
