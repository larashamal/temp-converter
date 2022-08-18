import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";
import Input from "./Input";

it("renders correctly", () => {
  const tree = renderer.create(
    <Input label="" value={0} changeHandler={() => {}} />
  );

  expect(tree).toMatchSnapshot();
});

it("calls changeHandler whenever input is changed", () => {
  // Arrange - create a mock for the changeHandler function
  const changeHandler = jest.fn();

  // Act - render the component
  render(<Input label="celsius" value={0} changeHandler={changeHandler} />);
  const input = screen.getByLabelText("celsius");
  userEvent.type(input, "1");

  // Assert - check that the changeHandler was called
  expect(changeHandler).toHaveBeenCalledTimes(1);
});
