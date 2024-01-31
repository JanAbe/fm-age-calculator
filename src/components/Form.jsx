import { Input } from "./Input.jsx";
import { useState } from "react";
import { DateTime } from "luxon";
import arrow from "../assets/images/icon-arrow.svg";

export const Form = ({ onSubmit }) => {
  const [day, setDay] = useState(1);
  const [month, setMonth] = useState(1);
  const [year, setYear] = useState(1900);
  const [dobIsValid, setDobIsValid] = useState(true);

  const dayIsValid = (day <= 31 && day >= 1) || day === "";
  const monthIsValid = (month <= 12 && month >= 1) || month === "";
  const yearIsValid = year <= DateTime.now().year;
  console.log(year);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!dayIsValid || !monthIsValid || !yearIsValid) {
      return;
    }

    const dob = DateTime.fromObject({
      day: day,
      month: month,
      year: year,
    });

    const isValid = dob > DateTime.now() || dob.isValid;
    setDobIsValid(isValid);
    if (!isValid) {
      return;
    }

    const { years, months, days } = calculateAge(dob);
    onSubmit(years, months, days);
  };

  const calculateAge = (dateOfBirth) => {
    const age = DateTime.now().diff(dateOfBirth, ["years", "months", "days"]);

    return {
      years: age.years,
      months: age.months,
      days: Math.floor(age.days),
    };
  };

  return (
    <>
      <form className="age-form" onSubmit={handleSubmit}>
        <Input
          showError={!dayIsValid}
          errorMessage="Day must be between 1-31"
          placeholder="DD"
          label="day"
          onChange={(e) => setDay(e.target.value)}
        />
        <Input
          showError={!monthIsValid}
          errorMessage="Month must be between 1-12"
          placeholder="MM"
          label="month"
          onChange={(e) => setMonth(e.target.value)}
        />
        <Input
          showError={!yearIsValid}
          errorMessage="Year can't be in the future"
          placeholder="YYYY"
          label="year"
          onChange={(e) => setYear(e.target.value)}
        />
        <button hidden>submit</button>
      </form>
      {!dobIsValid && <p className="error">The date is invalid!</p>}
      <div className="img-wrapper">
        <img className="img-submit" src={arrow} alt="purple down arrow" onClick={handleSubmit}/>
      </div>
    </>
  );
};
