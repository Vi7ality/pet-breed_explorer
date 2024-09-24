import BreedDetails from '@/app/components/breed-info';
import { getDogBreed, getDogBreedList } from '../../../lib/api/dog-api';
import Container from '@/app/components/container';
import Image from 'next/image';

export interface PageProps {
  params: { id: string };
}

// interface BreedInfo {
//   reference_image_id: string;
//   name: string;
//   description: string;
//   origin: string;
//   temperament: string;
//   breed_group: string;
//   life_span: string;
//   weight: {
//     imperial: string;
//     metric: string;
//   };
//   [key: string]: unknown;
// }

export async function generateStaticParams() {
  const data = await getDogBreedList(12);
  return data;
}

export default async function Page({ params }: PageProps) {
  const breedInfo = await getDogBreed(params.id);

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
          <BreedDetails breedInfo={breedInfo} />
        </section>
      )}
    </Container>
  );
}
