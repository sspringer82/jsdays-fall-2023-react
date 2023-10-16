import { useRef, useState } from 'react';
import ListItem from './ListItem/ListItem';
import './List.scss';
import useList from './useList';

const List: React.FC = () => {
  const { persons, handleDelete } = useList();

  const filterRef = useRef<HTMLInputElement>(null);
  const [filter, setFilter] = useState<string>('');

  if (persons.length === 0) {
    return <div>Keine Daten vorhanden.</div>;
  } else {
    return (
      <>
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
        <ul className="listItemContainer">
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
