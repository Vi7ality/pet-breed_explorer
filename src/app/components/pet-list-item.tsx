interface ListItemProps {
  id: string;
  url: string;
  name: string;
}

export default function PetListItem({ id, url, name }: ListItemProps) {
  return (
    <li key={id} className="overflow-hidden rounded-lg">
      <img src={url} alt={name} className="w-full h-full object-cover"></img>
      <h3>{name}</h3>
    </li>
  );
}
