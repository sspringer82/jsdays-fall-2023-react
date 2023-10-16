import './App.css';
import Form from './Form';
import List from './List';
import { PersonProvider } from './PersonProvider';

function App() {
  return (
    <PersonProvider>
      <Form />
      <List />
    </PersonProvider>
  );
}

export default App;
