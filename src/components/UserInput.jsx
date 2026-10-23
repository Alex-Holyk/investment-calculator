export default function UserInput({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
  onInitialInvestmentChange,
  onAnnualInvestmentChange,
  onExpectedReturnChange,
  onDurationChange,
}) {
  return (
    <div id="user-input">
      <div className="input-group">
        <div>
          <label htmlFor="initial-investment">Initial Investment</label>
          <input
            id="initial-investment"
            type="number"
            value={initialInvestment}
            min="0"
            onChange={onInitialInvestmentChange}
          />
        </div>
        <div>
          <label htmlFor="annual-investment">Annual Investment</label>
          <input
            id="annual-investment"
            type="number"
            value={annualInvestment}
            min="0"
            onChange={onAnnualInvestmentChange}
          />
        </div>
      </div>
      <div className="input-group">
        <div>
          <label htmlFor="expected-return">Expected Return</label>
          <input
            id="expected-return"
            type="number"
            value={expectedReturn}
            min="0"
            onChange={onExpectedReturnChange}
          />
        </div>
        <div>
          <label htmlFor="duration">Duration</label>
          <input
            id="duration"
            type="number"
            value={duration}
            min="0"
            onChange={onDurationChange}
          />
        </div>
      </div>
    </div>
  );
}
