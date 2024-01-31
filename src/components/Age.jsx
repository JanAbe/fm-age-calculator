import CountUp from "react-countup";

export const Age = ({ years, months, days }) => {
  return (
    <div>
      <div className="age-wrapper">
        <CountUp className="counter" start={"DD"} end={years} />
        <p>{years === 1 ? "year" : "years"}</p>
      </div>

      <div className="age-wrapper">
        <CountUp className="counter" start={0} end={months} />
        <p>{months === 1 ? "month" : "months"}</p>
      </div>

      <div className="age-wrapper">
        <CountUp className="counter" start={0} end={days} />
        <p>{days === 1 ? "day" : "days"}</p>
      </div>
    </div>
  );
};
