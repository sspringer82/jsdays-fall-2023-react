import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';
import { Person } from './types/Person';

type ContextType = [Person[], Dispatch<SetStateAction<Person[]>>];

const PersonContext = createContext<ContextType | null>(null);

type Props = {
  children?: React.ReactNode;
};
const PersonProvider: React.FC<Props> = ({ children }) => {
  const state = useState<Person[]>([]);

  return (
    <PersonContext.Provider value={state}>{children}</PersonContext.Provider>
  );
};

function usePersonContext(): ContextType {
  const context = useContext(PersonContext);
  if (!context) {
    throw new Error(
      'Use the usePersonContext hook function within a PersonProvider'
    );
  }
  return context;
}

export { PersonProvider, usePersonContext };
