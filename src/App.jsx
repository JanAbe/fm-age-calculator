import './App.css'
import {Age} from "./components/Age.jsx";
import {Card} from "./components/Card.jsx";
import {Form} from "./components/Form.jsx";
import {useState} from "react";

function App() {
  const [age, setAge] = useState({
    years: '--',
    months: '--',
    days: '--'
  })

  const handleSubmit = (years, months, days) => {
    setAge({
      years,
      months,
      days
    });
  }

  return (
    <main>
      <Card>
        <h1>Age calculator</h1>
        <Form onSubmit={handleSubmit} />
        <Age years={age.years} months={age.months} days={age.days}/>
      </Card>
    </main>
  )
}

export default App
