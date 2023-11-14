import React, { useState, useEffect } from 'react';
import { ReactComponent as CameraIcon } from './Filmdom-camera.svg';
import { ReactComponent as SearchIcon } from './search-icon.svg';
import './header.css';
import { Link, useParams, useNavigate } from "react-router-dom";
import * as service from "../omdb-service";
import UserSettings from "./user-settings";
// import { Link } from 'react-router-dom';


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
				<Link to="home">
					<div className="brand">
						<CameraIcon className="icon-camera" /> 
						<h1 className="header-title">FILMDOM</h1>
					</div>

				</Link>
				
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
					<span><UserSettings/></span>
				</div>
			</div>
		</header>
	)
}

export default Header;