import { useState } from "react";

import { calculateInvestmentResults } from "./util/investment";
import Header from "./components/Header";
import Result from "./components/Result";
import UserInput from "./components/UserInput";

function App() {
  const [initialInvestment, setInitialInvestment] = useState(0);
  const [annualInvestment, setAnnualInvestment] = useState(0);
  const [expectedReturn, setExpectedReturn] = useState(0);
  const [duration, setDuration] = useState(1);

  const result = calculateInvestmentResults({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
  });

  function handleInitialInvestmentChange(e) {
    setInitialInvestment(Number(e.target.value));
  }

  function handleAnnualInvestmentChange(e) {
    setAnnualInvestment(Number(e.target.value));
  }

  function handleExpectedReturnChange(e) {
    setExpectedReturn(Number(e.target.value));
  }
  function handleDurationChange(e) {
    setDuration(Number(e.target.value));
  }

  return (
    <>
      <Header />
      <UserInput
        initialInvestment={initialInvestment}
        annualInvestment={annualInvestment}
        expectedReturn={expectedReturn}
        duration={duration}
        onInitialInvestmentChange={handleInitialInvestmentChange}
        onAnnualInvestmentChange={handleAnnualInvestmentChange}
        onExpectedReturnChange={handleExpectedReturnChange}
        onDurationChange={handleDurationChange}
      />
      {duration < 1 ? (
        <p className="center warning-message">Duration cannot be less than 0</p>
      ) : (
        <Result result={result} />
      )}
    </>
  );
}

export default App;
