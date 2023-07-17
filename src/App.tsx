import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createContext, useState } from 'react';
import Markets from './pages/markets/Markets';
import News from './pages/news/News';
import Portfolio from './pages/portfolio/Portfolio';
import NavBar from './Layouts/navBar/NavBar';
import './App.css';

const stocks = [
    {
      "id": 1,
      "name": "Apple Inc.",
      "symbol": "AAPL",
      "priceHistory": [
        {"date": "2023-07-15", "price": 150.23},
        {"date": "2023-07-14", "price": 249.55},
        {"date": "2023-07-13", "price": 48.80},
        {"date": "2023-07-12", "price": 149.02},
        {"date": "2023-07-11", "price": 248.90}
      ]
    },
    {
      "id": 2,
      "name": "Microsoft Corporation",
      "symbol": "MSFT",
      "priceHistory": [
        {"date": "2023-07-15", "price": 285.37},
        {"date": "2023-07-14", "price": 200.92},
        {"date": "2023-07-13", "price": 183.50},
        {"date": "2023-07-12", "price": 382.82},
        {"date": "2023-07-11", "price": 183.45}
      ]
    },
    {
      "id": 3,
      "name": "Amazon.com Inc.",
      "symbol": "AMZN",
      "priceHistory": [
        {"date": "2023-07-15", "price": 3750.55},
        {"date": "2023-07-14", "price": 3749.20},
        {"date": "2023-07-13", "price": 3738.90},
        {"date": "2023-07-12", "price": 3735.62},
        {"date": "2023-07-11", "price": 3740.00}
      ]
    },
    {
      "id": 4,
      "name": "Amazon.com Inc.",
      "symbol": "AMZN",
      "priceHistory": [
        {"date": "2023-07-15", "price": 3750.55},
        {"date": "2023-07-14", "price": 3749.20},
        {"date": "2023-07-13", "price": 3738.90},
        {"date": "2023-07-12", "price": 3735.62},
        {"date": "2023-07-11", "price": 3740.00}
      ]
    },
    {
      "id": 5,
      "name": "Amazon.com Inc.",
      "symbol": "AMZN",
      "priceHistory": [
        {"date": "2023-07-15", "price": 3750.55},
        {"date": "2023-07-14", "price": 3749.20},
        {"date": "2023-07-13", "price": 3738.90},
        {"date": "2023-07-12", "price": 3735.62},
        {"date": "2023-07-11", "price": 3740.00}
      ]
    },
    {
      "id": 6,
      "name": "Amazon.com Inc.",
      "symbol": "AMZN",
      "priceHistory": [
        {"date": "2023-07-15", "price": 3750.55},
        {"date": "2023-07-14", "price": 3749.20},
        {"date": "2023-07-13", "price": 3738.90},
        {"date": "2023-07-12", "price": 3735.62},
        {"date": "2023-07-11", "price": 3740.00}
      ]
    },
    {
      "id": 7,
      "name": "Apple Inc.",
      "symbol": "AAPL",
      "priceHistory": [
        {"date": "2023-07-15", "price": 150.23},
        {"date": "2023-07-14", "price": 249.55},
        {"date": "2023-07-13", "price": 48.80},
        {"date": "2023-07-12", "price": 149.02},
        {"date": "2023-07-11", "price": 248.90}
      ]
    },
    {
      "id": 1,
      "name": "Apple Inc.",
      "symbol": "AAPL",
      "priceHistory": [
        {"date": "2023-07-15", "price": 150.23},
        {"date": "2023-07-14", "price": 249.55},
        {"date": "2023-07-13", "price": 48.80},
        {"date": "2023-07-12", "price": 149.02},
        {"date": "2023-07-11", "price": 248.90}
      ]
    },
    
  ]
const defaultStock = stocks[0]

function App() {

  const [portfolioState, setPortfolioState] = useState(defaultStock);

  const updatePortfolio = (stock: any) => {
    setPortfolioState(stock);
  };

  return (
    <portfolioContext.Provider value={{ portfolioState, updatePortfolio }}>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<Markets stocks={ stocks } />} />
            <Route path="/portfolio" element={ <Portfolio/> } />
            <Route path="/news" element={ <News/> } />
          </Routes>
          <NavBar />
        </div> 
      </Router>
    </portfolioContext.Provider>
  );
}

export default App;
export const portfolioContext = createContext({
  portfolioState: defaultStock,
  updatePortfolio: (stock: any) => {}
});
