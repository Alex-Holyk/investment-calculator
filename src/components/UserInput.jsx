export default function UserInput({ userInput, onUserInputChange }) {
  const { initialInvestment, annualInvestment, expectedReturn, duration } =
    userInput;

  return (
    <section id="user-input">
      <div className="input-group">
        <div>
          <label htmlFor="initial-investment">Initial Investment</label>
          <input
            required
            id="initial-investment"
            type="number"
            value={initialInvestment}
            min="0"
            onChange={(e) =>
              onUserInputChange("initialInvestment", e.target.value)
            }
          />
        </div>
        <div>
          <label htmlFor="annual-investment">Annual Investment</label>
          <input
            required
            id="annual-investment"
            type="number"
            value={annualInvestment}
            min="0"
            onChange={(e) =>
              onUserInputChange("annualInvestment", e.target.value)
            }
          />
        </div>
      </div>
      <div className="input-group">
        <div>
          <label htmlFor="expected-return">Expected Return</label>
          <input
            required
            id="expected-return"
            type="number"
            value={expectedReturn}
            min="0"
            onChange={(e) =>
              onUserInputChange("expectedReturn", e.target.value)
            }
          />
        </div>
        <div>
          <label htmlFor="duration">Duration</label>
          <input
            required
            id="duration"
            type="number"
            value={duration}
            min="0"
            onChange={(e) => onUserInputChange("duration", e.target.value)}
          />
        </div>
      </div>
    </section>
  );
}
