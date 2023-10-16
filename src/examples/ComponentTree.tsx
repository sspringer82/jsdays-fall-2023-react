type Props = {
  displayName: string;
};

const Child: React.FC<Props> = ({ displayName }) => {
  return <div>{displayName}</div>;
};

const names = ['Klaus', 'Lisa', 'Peter'];

const Parent: React.FC = () => {
  return (
    <div>
      {names.map((name) => (
        <Child displayName={name} />
      ))}
    </div>
  );
};

export default Parent;
