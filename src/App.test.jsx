import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";
import App from "./App";

it("renders correctly", () => {
  const rendered = renderer.create(<App />).toJSON();

  expect(rendered).toMatchSnapshot();
});

describe("App", () => {
  it("converts Celsius to Fahrenheit", () => {
    render(<App />);
    const input = screen.getByLabelText(/celsius/i);
    userEvent.type(input, "100");

    expect(screen.getByLabelText(/fahrenheit/i).value).toBe("212");
  });

  it("converts Fahrenheit to Celsius", () => {
    render(<App />);
    const input = screen.getByLabelText(/fahrenheit/i);
    userEvent.type(input, "212");

    expect(screen.getByLabelText(/celsius/i).value).toBe("100");
  });
});
