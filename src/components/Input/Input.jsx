import PropTypes from "prop-types";

export default function Input({ label, value, changeHandler }) {
  return (
    <div className="flex flex-col gap-y-1">
      <label htmlFor={label.toLowerCase()}>{label}</label>
      <input
        type="number"
        id={label.toLowerCase()}
        className="w-36 rounded border border-black bg-purple-300"
        value={value}
        onChange={changeHandler}
      />
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  changeHandler: PropTypes.func.isRequired,
};
