import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ userInput }) {
  const results = calculateInvestmentResults(userInput);

  return (
    <table id="result">
      <thead>
        <tr>
          <th scope="col">Year</th>
          <th scope="col">Investment Value</th>
          <th scope="col">Interest (Year)</th>
          <th scope="col">Total Interest</th>
          <th scope="col">Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map(
          ({
            year,
            interest,
            valueEndOfYear,
            investedCapital,
            totalInterest,
          }) => (
            <tr key={year}>
              <td>{year}</td>
              <td>{formatter.format(valueEndOfYear)}</td>
              <td>{formatter.format(interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(investedCapital)}</td>
            </tr>
          ),
        )}
      </tbody>
    </table>
  );
}
