import React, { useState, useEffect } from 'react';
import "./Results.css";
import Videocard from './Videocard';
import axios from './axios';
import FlipMove from 'react-flip-move';

function Results({ selectedOption }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(selectedOption);
            setMovies(request.data.results);
            // console.log(request)
            return request;
        }

        fetchData();
    }, [selectedOption])

    return (
        <div className="results">
            <FlipMove>
                {movies.map((movie) => (
                    <Videocard key={movie.id} movie={movie} />
                ))}
            </FlipMove>




        </div>
    )
}

export default Results
