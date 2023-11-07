import React, { useState, useEffect } from 'react';
import { ReactComponent as CameraIcon } from './Filmdom-camera.svg';
import { ReactComponent as SearchIcon } from './search-icon.svg';
import './header.css';
import { Link, useParams, useNavigate } from "react-router-dom";
import * as service from "../omdb-service";

function Header () {
	const {searchTerm} = useParams();
    const navigate = useNavigate();
    const [results, setResults] = useState();
    const [query, setQuery] = useState(searchTerm);

    const search = async () => {
        const response = await service.fullTextSearch(query);
        setResults(response);
    };
    useEffect(() => {
        if (query) {
            setQuery(query);
            search();
        }
    }, [searchTerm]);
	return (
		<header className="header">
			<div className="container">
				<div className="brand">
					<CameraIcon className="icon-camera" /> 
					<h1 className="header-title">FILMDOM</h1>
				</div>
				<div className="search rounded-pill">
					<SearchIcon className="icon-search" />
					<input 
						type="text" 
						placeholder="Search..." 
						value={query}
						onChange={(e) => setQuery(e.target.value)}
						onKeyDown={(e) => {
							if (e.key === 'Enter') {
								e.preventDefault();
								navigate(`/filmdom/search/${query}`)
							}
						}}
					/>
				</div>
				<div className="currentUser">
					{/* To be implemented */}
					<span>Current User</span>
				</div>
			</div>
		</header>
	)
}

export default Header;