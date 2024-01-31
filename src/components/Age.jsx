export const Age = ({ years, months, days }) => {
  return (
    <div>
      <div className="age-wrapper">
        <p>{years}</p>
        <p>{years === 1 ? "year" : "years"}</p>
      </div>

      <div className="age-wrapper">
        <p>{months}</p>
        <p>{months === 1 ? "month" : "months"}</p>
      </div>

      <div className="age-wrapper">
        <p>{days}</p>
        <p>{days === 1 ? "day" : "days"}</p>
      </div>
    </div>
  );
};
