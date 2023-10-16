import { useEffect, useState } from 'react';
import ListItem from './ListItem';
import { Person } from './types/Person';

const List: React.FC = () => {
  console.log('RENDER');
  const [persons, setPersons] = useState<Person[]>([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch('http://localhost:3002/persons');
  //     const data = await response.json();
  //     setPersons(data);
  //   }
  //   fetchData();
  // }, []);

  useEffect(() => {
    fetch('http://localhost:3002/persons')
      .then((response) => response.json())
      .then((data) => setPersons(data));
  }, []);

  if (persons.length === 0) {
    return <div>Keine Daten vorhanden.</div>;
  } else {
    return (
      <ul>
        {persons.map((person) => (
          <ListItem key={person.id} person={person} />
        ))}
      </ul>
    );
  }
};

export default List;
