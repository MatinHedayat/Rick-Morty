export default function CharacterItem({ character }) {
  const {
    id,
    name,
    gender,
    image,
    status,
    type,
    species,
    origin,
    location,
    episode,
  } = character;

  return <div>{name}</div>;
}
