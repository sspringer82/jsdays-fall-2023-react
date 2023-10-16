import { Person } from './types/Person';

type Props = {
  person: Person;
};

const ListItem: React.FC<Props> = ({ person }) => {
  return (
    <li>
      {person.firstName} {person.lastName}
    </li>
  );
};

// export function ListItem2({ person }: Props): ReactNode {
//   return <div>{person.firstName}</div>;
// }

export default ListItem;
