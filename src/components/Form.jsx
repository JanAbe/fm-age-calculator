import { Input } from "./Input.jsx";
import { useState } from "react";
import { DateTime } from "luxon";
import arrow from "../assets/images/icon-arrow.svg";

export const Form = ({ onSubmit }) => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [dobIsValid, setDobIsValid] = useState(true);
  const [emptyDob, setEmptyDob] = useState(false);

  const dayIsValid = (day <= 31 && day >= 1) || day === "";
  const monthIsValid = (month <= 12 && month >= 1) || month === "";
  const yearIsValid = year <= DateTime.now().year;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!dayIsValid || !monthIsValid || !yearIsValid) {
      return;
    }

    if (day === "" || month === "" || year === "") {
      setEmptyDob(true);
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
    setDobIsValid(true);
    setEmptyDob(false);
  };

  const calculateAge = (dateOfBirth) => {
    const age = DateTime.now().diff(dateOfBirth, ["years", "months", "days"]);

    return {
      years: age.years,
      months: age.months,
      days: Math.floor(age.days),
    };
  };

  const handleSetDay = (event) => {
    const input = event.target.value;
    setDay(input.replace(/\D/g, ''));
  }

  const handleSetMonth = (event) => {
    const input = event.target.value;
    setMonth(input.replace(/\D/g, ''));
  }

  const handleSetYear = (event) => {
    const input = event.target.value;
    setYear(input.replace(/\D/g, ''));
  }

  return (
    <>
      <form className="age-form" onSubmit={handleSubmit}>
        <Input
          showError={!dayIsValid}
          placeholder="DD"
          label="day"
          onChange={handleSetDay}
          value={day}
        />
        <Input
          showError={!monthIsValid}
          placeholder="MM"
          label="month"
          onChange={handleSetMonth}
          value={month}
        />
        <Input
          showError={!yearIsValid}
          placeholder="YYYY"
          label="year"
          onChange={handleSetYear}
          value={year}
        />
        <button hidden>submit</button>
      </form>
      {!dobIsValid && <p className="error">The date is invalid!</p>}
      {emptyDob && <p className="error">Date of birth can&apos;t be empty</p>}
      {!dayIsValid && <p className="error">Day must be between 1-31</p>}
      {!monthIsValid && <p className="error">Month must be between 1-12</p>}
      {!yearIsValid && <p className="error">Year can&apos;t be in the future</p>}
      <div className="img-wrapper">
        <img className="img-submit" src={arrow} alt="purple down arrow" onClick={handleSubmit}/>
      </div>
    </>
  );
};
