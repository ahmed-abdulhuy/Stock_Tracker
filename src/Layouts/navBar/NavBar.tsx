import "./NavBar.css";
import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import ImportExportOutlinedIcon from '@mui/icons-material/ImportExportOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';

function NavBar() {
    
    const [activePage, setActivePage] = useState('markets');
    const location = useLocation();

    useEffect(() => {
      if(location.pathname === '/') setActivePage('markets')
      else if(location.pathname === '/portfolio') setActivePage('portfolio')
      else if(location.pathname === '/news') setActivePage('news')
    }, [location.pathname]);

    return (
        <nav className="nav-bar">
            <Link to='/portfolio' 
                className={(activePage === "portfolio" ? 'active' : '') + " nav-portfolio"}>
                    <PieChartOutlineOutlinedIcon />
                    <span>Portfolio</span>
            </Link> 
            <Link to='/' 
                className={(activePage === "markets" ? 'active' : '') + " nav-markets"}>
                    <ImportExportOutlinedIcon />
                    <span>Markets</span>
            </Link>
            <Link to='news' 
                className={(activePage === "news" ? 'active' : '') + " nav-news"}>
                    <ArticleOutlinedIcon />
                    <span>News</span>
            </Link>
        </nav>
    );
}

export default NavBar;