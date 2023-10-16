import { useEffect, useState } from 'react';
import { Person } from '../types/Person';

const names = [
  'Alice',
  'Bob',
  'Charlie',
  'David',
  'Eva',
  'Frank',
  'Grace',
  'Hannah',
  'Isaac',
];

function State() {
  console.log('RENDER');
  const [persons, setPersons] = useState<string[]>(names);

  // Mount: useEffect(() => {}, []); - 1x initial, weil keine Abhängigkeiten
  // Update: useEffect(() => {}, [myVar]); - jedes Mal callback ausführen, wenn myVar geändert
  // Unmount: useEffect(() => {return function() {}}); - innere callback wird beim unmount ausgeführt

  // useEffect(() => {
  //   setTimeout(() => {
  //     setPersons([...persons, 'Julia']);
  //   }, 1000);
  // }, []);

  useEffect(() => {
    fetch('http://localhost:3002/persons')
      .then((response) => response.json())
      .then((data) => {
        setPersons((previousPersons) => {
          return data.map(
            (person: Person) => person.firstName + ' ' + person.lastName
          );
        });
      });
  }, []);

  return (
    <div>
      {persons.map((name) => (
        <div key={name}>{name}</div>
      ))}
    </div>
  );
}

export default State;
