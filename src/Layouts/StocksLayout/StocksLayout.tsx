import "./StocksLayout.css";
import Stock from "../../components/stock/stock";

function StocksLayout({ stocks } : any) {
    return (
        <div className="stocks-layout">
        {
            stocks.map((stock: any, i: number) => ( 
                <Stock key={i} stock={ stock } />
            ))
        }
        </div>
    );
}

export default StocksLayout;