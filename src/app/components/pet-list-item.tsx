interface ListItemProps {
  id: string;
  url: string;
  name: string;
}

export default function PetListItem({ id, url, name }: ListItemProps) {
  return (
    <li key={id}>
      <img src={url} alt={name}></img>
      <h3>{name}</h3>
    </li>
  );
}
