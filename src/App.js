import "./App.css";
import axios from "axios" ;
import {useEffect , useState} from "react";

function App() {

  const [money, setMoney] = useState([]);

  const fetchCurrency = () => {
    axios.get("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json").then((res) => {
      setMoney(res.data);
      console.log(res.data)
    })}

    useEffect (() => {
      fetchCurrency();
    },[])

  return (
    <div className="App">

      <h1 className="text">Currency API</h1>

      <div className="list">
        {money.map(r => {
          return (
            <div className="cell" key={r.r030}>
              <p>Currency: {r.txt}</p>
              <p className="cc">CC: {r.cc}</p>
              <p>Rate: {r.rate}</p>
              <p>Date: {r.exchangedate}</p>
            </div>
          )
        })}
      </div>
      
    </div>
  );
}

export default App;