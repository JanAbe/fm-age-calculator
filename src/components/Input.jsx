
export const Input = ({showError, errorMessage, label, ...inputProps}) => {
  return (
    <div className="input-wrapper">
      <label>{label}</label>
      <input {...inputProps} className={showError ? "input-error" : ""} />
      {showError && <p className="error">{errorMessage}</p>}
    </div>
  )
}