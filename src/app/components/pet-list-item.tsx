interface ListItemProps {
  id: string;
  url: string;
  name: string;
}

export default function PetListItem({ id, url, name }: ListItemProps) {
  return (
    <li
      key={id}
      className="hover:translateY(0) relative overflow-hidden rounded-lg"
    >
      <img src={url} alt={name} className="h-full w-full object-cover"></img>
      <h3 className="absolute bottom-0 left-0 w-full bg-green-600 py-5 text-center text-white">
        {name}
      </h3>
    </li>
  );
}
