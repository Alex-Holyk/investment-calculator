export default function UserInput() {
  return (
    <div id="user-input">
      <div className="input-group">
        <div>
          <label htmlFor="initial-investment">Initial Investment</label>
          <input id="initial-investment" type="number" min="0" />
        </div>
        <div>
          <label htmlFor="annual-investment">Annual Investment</label>
          <input id="annual-investment" type="number" min="0" />
        </div>
      </div>
      <div className="input-group">
        <div>
          <label htmlFor="expected-return">Expected Return</label>
          <input id="expected-return" type="number" min="0" />
        </div>
        <div>
          <label htmlFor="duration">Duration</label>
          <input id="duration" type="number" min="0" />
        </div>
      </div>
    </div>
  );
}
