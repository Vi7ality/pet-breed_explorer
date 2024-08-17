import Image from 'next/image';
import Link from 'next/link';

interface ListItemProps {
  id: string;
  url: string;
  name: string;
  species: string;
}

export default function PetListItem({ id, url, name, species }: ListItemProps) {
  const pageTo = species === 'cat' ? 'cats' : 'dogs';
  return (
    <li
      key={id}
      className="hover:translateY(0) relative overflow-hidden rounded-lg"
    >
      <Link href={`/${pageTo}/${id}`}>
        <Image
          width={600}
          height={600}
          src={url}
          alt={name}
          className="h-full w-full object-cover"
        ></Image>
        <h3 className="absolute bottom-0 left-0 w-full bg-green-600 py-5 text-center text-white">
          {name}
        </h3>
      </Link>
    </li>
  );
}
