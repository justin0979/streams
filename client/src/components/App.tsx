import { useAppSelector } from '&hooks';

const App: React.FC = () => {
  const erase = useAppSelector((state) => state.erase);

  return (
    <div>
      <h1>App</h1>
      {erase}
    </div>
  );
};

export default App;
