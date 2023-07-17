import { useContext } from "react"
import { Button } from "@mui/material";
import { portfolioContext } from "../../App"
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import "./Portfolio.css";
import { useNavigate } from "react-router-dom";
import Graph from "../../components/graph/Graph";

function Portfolio() {
    const { portfolioState } = useContext(portfolioContext);
    const gainPrice = (priceHistory: any) => {
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

    const pricingInfo = [
        ["closePrice", portfolioState.priceHistory[0].price],
        ["lastTradPrice", portfolioState.priceHistory[1].price],
        ["outstandingShares", 1000000000],
        ["marketValue", portfolioState.priceHistory[0].price * 1000000000],
    ]

    const navigate = useNavigate();
    const handelReturnClick = () => {
        navigate('/')
    }
    
    return (
        <div className="portfolio">
            <div className="portfolio-title">
                <div className="return-btn" onClick={handelReturnClick}>
                    <ArrowCircleLeftOutlinedIcon />
                </div>
                <div className="title-text">
                    <span className="portfolio-stock-symbol">{ portfolioState.symbol }</span>
                    <span className="portfolio-stock-name">{ portfolioState.name }</span>
                </div>
            </div>
            
            <div className="portfolio-pricing">
                <span className="portfolio-stock-price">${ portfolioState.priceHistory[0].price }</span>
                <span className="portfolio-stock-gain" style={{color: gainColor(portfolioState.priceHistory)}}>{ gainPrice(portfolioState.priceHistory) }%</span>
            </div>
            
            <div className="portfolio-graph">
                <Graph 
                    priceHistory={portfolioState.priceHistory}
                    stroke="black" 
                    strokeWidth={2} 
                    dataKey="price" 
                    dot={false} 
                    height={100}
                />
            </div>

            <div className="price-info">
                <ul>
                    {pricingInfo.map(([title, value]) => (
                        <li key={title} className="pricing-li">
                            <span className="price-info-key">{title}</span>
                            <span className="price-info-value">{value}</span>
                        </li>
                    ))}
                </ul>
            </div>
            
            <Button className="portfolio-btn" variant="contained" color="primary">
                Add to Portfolio
            </Button>

        </div>
    );
}

export default Portfolio;