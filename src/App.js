import "./App.css";
import Autocomplete from "./components/Autocomplete";

function App() {
  const options = ['Apple', 'Banana', 'Pineapple', 'Orange'];

  return (
    <div className="App">
      <h1 className="text-2xl mb-4">Autocomplete Component</h1>
      <Autocomplete options={options} />
    </div>
  );
}

export default App;
