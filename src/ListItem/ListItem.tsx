import { Person } from '../types/Person';
import './ListItem.css';
import style from './ListItem.module.css';

type Props = {
  person: Person;
  onDelete: (id: number) => void;
};

const ListItem: React.FC<Props> = ({ person, onDelete }) => {
  return (
    <li className={style.listItem}>
      {person.firstName} {person.lastName}
      <button
        onClick={() => {
          onDelete(person.id);
        }}
        style={{ backgroundColor: 'hotpink' }}
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
