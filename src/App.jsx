import "./App.css";
import Input from "./components/Input/Input";

function App() {
  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <>
      <h1 className="my-4 text-center text-2xl font-bold">
        Temperature Converter
      </h1>
      <form className="mx-auto mt-8 flex w-1/3 justify-between gap-x-12">
        <Input label="Celsius" value={100} changeHandler={handleChange} />
        <Input label="Fahrenheit" value={50} changeHandler={handleChange} />
      </form>
    </>
  );
}

export default App;
