import { Person } from './types/Person';

const List: React.FC = () => {
  const persons: Person[] = [
    {
      id: 1,
      firstName: 'Hans',
      lastName: 'Müller',
      street: 'Hauptstraße 1',
      city: 'Berlin',
      zip: '10115',
      country: 'Deutschland',
    },
    {
      id: 2,
      firstName: 'Anna',
      lastName: 'Schmidt',
      street: 'Musterweg 2',
      city: 'Hamburg',
      zip: '20095',
      country: 'Deutschland',
    },
    {
      id: 3,
      firstName: 'Michael',
      lastName: 'Schulz',
      street: 'Lindenallee 3',
      city: 'München',
      zip: '80331',
      country: 'Deutschland',
    },
  ];

  if (persons.length === 0) {
    return <div>Keine Daten vorhanden.</div>;
  } else {
    return (
      <ul>
        {persons.map((person) => (
          <li key={person.id}>
            {person.firstName} {person.lastName}
          </li>
        ))}
      </ul>
    );
  }
};

export default List;
