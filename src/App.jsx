import { useState } from "react";

import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";

const INITIAL_USER_INPUT = {
  initialInvestment: 10_000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

export default function App() {
  const [userInput, setUserInput] = useState(INITIAL_USER_INPUT);

  function handleUserInputChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      [inputIdentifier]: Number(newValue),
    }));
  }

  return (
    <>
      <Header />
      <UserInput
        userInput={userInput}
        onUserInputChange={handleUserInputChange}
      />
      {userInput.duration < 1 ? (
        <p className="center warning-message">Duration cannot be less than 0</p>
      ) : (
        <Results userInput={userInput} />
      )}
    </>
  );
}
