export type Person = {
  id: number;
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  zip: string;
  country: string;
};

export type CreatePerson = Omit<Person, 'id'>;
