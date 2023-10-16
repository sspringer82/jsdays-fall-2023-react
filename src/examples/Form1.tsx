import { useRef } from 'react';

const Form1: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <label>
        Name: <input type="text" ref={inputRef} />
      </label>
      <button
        onClick={() => {
          console.log('Wert: ', inputRef.current!.value);
        }}
      >
        speichern
      </button>
    </div>
  );
};

export default Form1;
