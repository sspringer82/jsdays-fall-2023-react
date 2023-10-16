function Jsx() {
  // bedingungen
  // schleifen

  const name = 'Klaus';
  const name2: string = 'Lisa';
  const noName = <div>Kein Name</div>;
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
    'Julia',
  ];

  // eslint-disable-next-line no-constant-condition
  if (false) {
    return <div>Will never show</div>;
  } else {
    return (
      <>
        <div>JSX works {name}</div>
        <div>{name2 === '' ? noName : <div>{name2}</div>}</div>
        {noName && <div>wirklich kein Name</div>}

        {/* <div>{[<div>lala</div>, <div>lala</div>, <div>lala</div>]}</div> */}
        <ul>
          {names.map((namesName) => (
            <li key={namesName}>{namesName}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default Jsx;
