import { Person } from './types/Person';

type Props = {
  person: Person;
  onDelete: (id: number) => void;
};

const ListItem: React.FC<Props> = ({ person, onDelete }) => {
  return (
    <li>
      {person.firstName} {person.lastName}
      <button
        onClick={() => {
          onDelete(person.id);
        }}
      >
        löschen
      </button>
    </li>
  );
};

// export function ListItem2({ person }: Props): ReactNode {
//   return <div>{person.firstName}</div>;
// }

export default ListItem;
