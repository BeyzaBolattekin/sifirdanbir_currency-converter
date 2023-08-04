import "./CurrencyItem.css";

function CurrencyItem(props) {
  const { currencies } = props;
  console.log(currencies);
  return (
    <select>
      {currencies.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default CurrencyItem;
