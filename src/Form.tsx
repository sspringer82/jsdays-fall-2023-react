import { ChangeEvent, FormEvent, useState } from 'react';
import { CreatePerson } from './types/Person';

type Props = {
  onSave: (person: CreatePerson) => void;
};

const Form: React.FC<Props> = ({ onSave }) => {
  const [formState, setFormState] = useState<CreatePerson>({
    firstName: '',
    lastName: '',
    street: '',
    city: '',
    zip: '',
    country: '',
  });

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setFormState((prevFormState) => ({
      ...prevFormState,
      [event.target.name]: event.target.value,
    }));
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    onSave(formState);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Vorname:{' '}
          <input
            type="text"
            name="firstName"
            value={formState.firstName}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Nachname:{' '}
          <input
            type="text"
            name="lastName"
            value={formState.lastName}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Straße:{' '}
          <input
            type="text"
            name="street"
            value={formState.street}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Stadt:{' '}
          <input
            type="text"
            name="city"
            value={formState.city}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          PLZ:{' '}
          <input
            type="text"
            name="zip"
            value={formState.zip}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Land:{' '}
          <input
            type="text"
            name="country"
            value={formState.country}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit">speichern</button>
    </form>
  );
};

export default Form;
