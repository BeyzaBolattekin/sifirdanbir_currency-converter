import "./ConvertItem.css";
import CurrencyItem from "./CurrencyItem";

function ConvertItem(props) {
  return (
    <div className="main">
      <h1>Currency Converter</h1>

      <div className="flexPart">
        <div className="amountDiv">
          <p>Amount</p>
          <input placeholder="0" type="number"></input>
        </div>

        <div className="fromDiv">
          <p>From</p>
          <CurrencyItem currencies={props.currencies} />
        </div>

        <button className="itcButton">=</button>

        <div className="toDiv">
          <p>To</p>
          <CurrencyItem currencies={props.currencies} />
        </div>
      </div>

      <div className="resultDiv">
        <p>Result</p>
      </div>
    </div>
  );
}

export default ConvertItem;
