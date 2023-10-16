import { useEffect, useRef, useState } from 'react';
import ListItem from './ListItem';
import { CreatePerson, Person } from './types/Person';
import Form from './Form';
import { save } from './api/person.api';

const List: React.FC = () => {
  const [persons, setPersons] = useState<Person[]>([]);

  console.log('RENDER');

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

  const filterRef = useRef<HTMLInputElement>(null);
  const [filter, setFilter] = useState<string>('');

  // bei jeder filteränderung loggen:
  // useEffect(() => {
  //   console.log(filter);
  // }, [filter]);

  function handleDelete(id: number): void {
    fetch('http://localhost:3002/persons/' + id, {
      method: 'DELETE',
    }).then(() => {
      setPersons((prevPersons) => {
        return prevPersons.filter((person) => person.id !== id);
      });
    });
  }

  async function handleSave(newPerson: CreatePerson) {
    const createdPerson = await save(newPerson);
    setPersons((prevPersons) => [...prevPersons, createdPerson]);
  }

  if (persons.length === 0) {
    return <div>Keine Daten vorhanden.</div>;
  } else {
    return (
      <>
        <Form onSave={handleSave} />
        <div>
          <label>
            Suche: <input type="text" ref={filterRef} />
          </label>
          <button
            onClick={() => {
              setFilter(filterRef.current!.value);
            }}
          >
            suchen!
          </button>
        </div>
        <ul>
          {persons
            .filter(
              (person) =>
                person.firstName.toLowerCase().includes(filter.toLowerCase()) ||
                person.lastName.toLowerCase().includes(filter.toLowerCase())
            )
            .map((person) => (
              <ListItem
                key={person.id}
                person={person}
                onDelete={handleDelete}
              />
            ))}
        </ul>
      </>
    );
  }
};

export default List;
