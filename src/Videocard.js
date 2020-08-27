import React, { forwardRef } from 'react'
import './Videocard.css'
import TextTruncate from "react-text-truncate";
import ThumbUpAltRoundedIcon from '@material-ui/icons/ThumbUpAltRounded';


const base_url = "https://image.tmdb.org/t/p/w500/";

const Videocard = forwardRef(({ movie }, ref) => {
    return (
        <div ref={ref} className="videocard">
            <img
                src={`${base_url}${movie.backdrop_path || movie.poster_path} `}
                alt="movie poster"
            />
            <TextTruncate
                line={1}
                element='p'
                truncateText="..."
                //textTruncateChild={<a href="#">Read on</a>}
                text={movie.overview}
            />

            <h2>{movie.title || movie.original_name}</h2>
            <p className='videoCard__stats'>
                {movie.releae_date || movie.first_air_date}.
                <ThumbUpAltRoundedIcon />
                {movie.vote_count}

            </p>
        </div>
    )
});

export default Videocard
