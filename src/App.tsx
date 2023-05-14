import Counter from "./components/Counter";

function App() {
  return (
    <>
      <Counter label="no limit only positive" />
      <Counter label="5 limit, can be negative" limit={5} isOnlyPositive={false} />
    </>
  );
}

export default App;
