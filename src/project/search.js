import React, { useState, useEffect } from "react";
import * as service from "./omdb-service";
import { Link, useParams, useNavigate } from "react-router-dom";

function SearchScreen() {
    const {searchTerm} = useParams();
    const navigate = useNavigate();
    const [results, setResults] = useState();
    const [query, setQuery] = useState(searchTerm);

    const search = async () => {
        const response = await service.fullTextSearch(query);
        setResults(response);
    };
    useEffect(() => {
        if (searchTerm) {
            setQuery(searchTerm);
            search();
        }
    }, [searchTerm]);
    return (
        <div>
            <h1>Search Screen</h1>
            <button className="w-25 float-end btn btn-primary"
                onClick={() => navigate(`/project/search/${query}`)}>
                    Search
                </button>
            <input type="text" 
            value={query} 
            onChange={(e) => setQuery(e.target.value)}
            />
            
            <ul className="list-group">
                {results && 
                    results.Search.map((movie) => (
                        <li className="list-group-item" key={movie.imbdID}>
                          <h2> 
                            <Link to={`/project/details/${movie.imdbID}`}>{movie.Title}</Link>
                          </h2>
                          <img src={movie.Poster} />
                           
                        </li>
                    ))}
            </ul>
             
            {/* <pre>{JSON.stringify(results.Search,null,2)}</pre> */}
        </div>
    );
}

export default SearchScreen;