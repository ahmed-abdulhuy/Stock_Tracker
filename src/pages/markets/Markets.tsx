import StocksLayout from "../../Layouts/StocksLayout/StocksLayout";
import Header from "../../Layouts/marketsHeader/MarketHeader";
import "./Markets.css";

function Markets({ stocks } : any) {
    return (
        <div className="markets">
            <Header />
            <StocksLayout stocks={stocks} />
        </div>
    );
}

export default Markets;