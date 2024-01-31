export const Input = ({ showError, label, ...inputProps }) => {
  return (
    <div className="input-wrapper">
      <label>{label}</label>
      <input {...inputProps} className={showError ? "input-error" : ""} />
    </div>
  );
};
