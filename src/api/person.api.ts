import { CreatePerson, Person } from '../types/Person';

export async function save(data: CreatePerson): Promise<Person> {
  const response = await fetch('http://localhost:3002/persons', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const newPerson = await response.json();
  return newPerson;
}
