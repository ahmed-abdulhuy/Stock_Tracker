import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { portfolioContext } from "../../App";
import "./stock.css";
import Graph from "../graph/Graph";


function Stock({ stock }: any) {
  const { updatePortfolio } = useContext(portfolioContext);
  const navigate = useNavigate();
  const handelClick = () => {
    updatePortfolio(stock);
    navigate('/portfolio')
  }

  const gainPrice = (priceHistory: any) => {
    if(priceHistory.length === 0) return (0).toFixed(2);

    const initialPrice = priceHistory[priceHistory.length - 1].price; // Get the initial price from the oldest entry
    const currentPrice = priceHistory[0].price; // Get the current price from the latest entry
    const gainPercentage = ((currentPrice - initialPrice) / initialPrice) * 100;
    return gainPercentage.toFixed(2); // Return the gain percentage with 2 decimal places
  }
  
  const gainColor = (priceHistory: any) => {
    const gain = +gainPrice(priceHistory);
    if (gain > 0) {
      return "green";
    } else if (gain < 0) {
      return "red";
    } else {
      return "black";
    }
  }
  
  return (
    <div className="stock" onClick={handelClick}>
      <div className="title">
        <span className="stock-symbol">{ stock.symbol }</span>
        <span className="stock-name">{stock.name}</span>
      </div>

      <div className="graph">
        <Graph 
          priceHistory={stock.priceHistory} 
          dataKey="price" 
          stroke={gainColor(stock.priceHistory)} 
          strokeWidth={1} 
          dot={false} 
          width = {100} height={50} 
        />
      </div>
      
      <div className="pricing">
        <span className="stock-price">${ stock.priceHistory[0].price }</span>
        <span className="stock-gain" style={{color: gainColor(stock.priceHistory)}}>{ gainPrice(stock.priceHistory) }%</span>
      </div>
    </div>
  );
}

export default Stock; 