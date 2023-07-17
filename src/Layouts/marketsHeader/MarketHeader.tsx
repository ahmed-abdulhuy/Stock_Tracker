import "./MarketHeader.css";
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import ShortTextIcon from '@mui/icons-material/ShortText';
import Search from "../../components/search/Search";

function Header() {
    return (
        <div className="market-header">
            <div className="icons-bar">
                <ShortTextIcon />
                <NotificationsOutlinedIcon />
            </div>
            <span className="header-title">
                <h1>Markets</h1>
            </span>
            <Search />
            <div className="markets-catagories"> Main Market</div>
        </div>
    );
}

export default Header;