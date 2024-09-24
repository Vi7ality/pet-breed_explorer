import BreedDetails from '@/app/components/breed-info';
import { getCatBreed, getCatBreedList } from '../../../lib/api/cat-api';
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
//   hypoallergenic?: number;
//   intelligence?: number;
//   [key: string]: unknown;
// }

export async function generateStaticParams() {
  const data = await getCatBreedList(12);
  return data;
}

export default async function Page({ params }: PageProps) {
  const breedInfo = await getCatBreed(params.id);

  return (
    <Container>
      {breedInfo && (
        <section className="flex flex-col overflow-hidden bg-white shadow-lg md:flex-row">
          <div className="md:w-1/2">
            <Image
              width={600}
              height={400}
              alt={`${breedInfo.name} image`}
              src={`https://cdn2.thecatapi.com/images/${breedInfo.reference_image_id}.jpg`}
              className="h-full w-full object-cover"
            />
          </div>
          <BreedDetails breedInfo={breedInfo} />
        </section>
      )}
    </Container>
  );
}
