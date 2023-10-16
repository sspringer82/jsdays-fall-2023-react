import { ChangeEvent, FormEvent, useState } from 'react';

type FormState = {
  firstName: string;
  lastName: string;
};

const Form2: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    firstName: '',
    lastName: '',
  });

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setFormState((prevFormState) => ({
      ...prevFormState,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <form
      onSubmit={(event: FormEvent) => {
        event.preventDefault();
        console.log(formState);
      }}
    >
      <label>
        Vorname:
        <input
          type="text"
          value={formState.firstName}
          name="firstName"
          onChange={handleChange}
        />
      </label>
      <label>
        Lastname:
        <input
          type="text"
          value={formState.lastName}
          name="lastName"
          onChange={handleChange}
        />
      </label>
      <button type="submit">speichern</button>
    </form>
  );
};

export default Form2;
