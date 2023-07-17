import "./Search.css";
import { useState } from 'react';
import { TextField, IconButton } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

function Search() {

    const [searchTerm, setSearchTerm] = useState('')
    const handleInputChange = (event: any) => {
        setSearchTerm(event.target.value);
    };
    const handleSearch = (event: any) => {
        console.log("Search")
    };

    return (
        <div className="search">
            <TextField
                label="Search Markets"
                value={searchTerm}
                onChange={handleInputChange}
                variant="outlined"
                size="small"
                sx={{ width: '100%' }}
                InputProps={{
                endAdornment: (
                    <IconButton onClick={handleSearch} size="small">
                    <SearchIcon />
                    </IconButton>
                ),
                }}
            />
        </div>

    );
}

export default Search;