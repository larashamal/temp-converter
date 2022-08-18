import renderer from "react-test-renderer";
import Input from "./Input";

it("renders correctly", () => {
  const tree = renderer
    .create(<Input label="" value={0} changeHandler={() => {}} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
