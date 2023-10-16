import { useEffect } from 'react';
import { usePersonContext } from './PersonProvider';
import { Person } from './types/Person';

export default function useList(): {
  persons: Person[];
  handleDelete: (id: number) => void;
} {
  const [persons, setPersons] = usePersonContext();

  useEffect(() => {
    fetch('http://localhost:3002/persons')
      .then((response) => response.json())
      .then((data) => setPersons(data));
  }, []);

  function handleDelete(id: number): void {
    fetch('http://localhost:3002/persons/' + id, {
      method: 'DELETE',
    }).then(() => {
      setPersons((prevPersons) => {
        return prevPersons.filter((person) => person.id !== id);
      });
    });
  }

  return {
    persons,
    handleDelete,
  };
}
