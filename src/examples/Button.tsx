type Props = {
  onClick: (id: number) => void;
};

const Button: React.FC<Props> = ({ onClick }) => {
  const id = 42;
  return <button onClick={() => onClick(id)}>click me if you can</button>;
};

const ButtonContainer: React.FC = () => {
  return (
    <Button
      onClick={(id: number) => {
        console.log('you click', id);
      }}
    />
  );
};

export default ButtonContainer;
