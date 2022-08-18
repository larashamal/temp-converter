import React from "react";
import "./App.css";
import Input from "./components/Input/Input";
import tryConvert from "./lib/tryConvert";

function App() {
  const [values, setValues] = React.useState({ celsius: 0, fahrenheit: 0 });

  const handleChange = (event) => {
    console.log(event.target.value);

    if (event.target.id === "celsius") {
      setValues({
        ...values,
        celsius: event.target.value,
        fahrenheit: tryConvert(event.target.value, "toFahrenheit"),
      });
    } else {
      setValues({
        ...values,
        celsius: tryConvert(event.target.value, "toCelsius"),
        fahrenheit: event.target.value,
      });
    }
    // TODO: use `tryConvert` to perform the conversion and just log the conversion
    // HINT: Conditional logic is required to handle the conversion
    // HINT: Use the `value` property of the event target to get the value of the Input
    // HINT: Check the id property of the event target to determine which conversion to perform
  };
  return (
    <>
      <h1 className="my-4 text-center text-2xl font-bold">
        Temperature Converter
      </h1>
      <form className="mx-auto mt-8 flex w-1/3 justify-between gap-x-12">
        <Input
          label="Celsius"
          value={values.celsius}
          changeHandler={handleChange}
        />
        <Input
          label="Fahrenheit"
          value={values.fahrenheit}
          changeHandler={handleChange}
        />
      </form>
    </>
  );
}

export default App;
