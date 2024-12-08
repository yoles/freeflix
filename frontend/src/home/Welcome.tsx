import "./styles/index.css";
import venom from '../assets/images/venom_bg.jpg'
import venomTitle from '../assets/images/venom_title.png'
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

type Movie = {
    title: string;
    poster_path: string;
    genres?: string[];
    overview?: string;
    duration?: string;
}

export function WelcomePage() {
    const url = "http://localhost:3000";
    const [movies, setMovies] = useState<Movie[]>([]);
    let navigate = useNavigate();

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMovies(data));
    }, []);

    console.log("[DEBUG] Movies: ", movies);
    return (
        <>
            <header>
                <h1>FREEFLIX</h1>
            </header>
            <div className="main-container">
                <div className="img-container bg">
                    <img src={venom} alt="" />
                </div>

                <div className="movie-card">
                    <div className="movie-card-body">
                        <div className="img-container">
                            <img src={venomTitle} alt="Movie Title"/>
                        </div>
                        <h2 className="movie-categories">
                            {movies[0]?.genres?.join(", ")} • {movies[0]?.duration}
                        </h2>
                        <p className="movie-description">
                            {movies[0]?.overview}
                        </p>
                    </div>
                </div>
            </div>

            <div className="tendency">
                <h1>Nouveauté</h1>
                <div className="movies">
                    {
                        movies.map((movie: any) => (
                            <div className="movie" onClick={() => navigate(`/movie/${movie.id}`)}>
                                <img src={movie.poster_path} alt=""/>
                                <div className="movie-body">
                                    <p>VOSTFR, VOSTA</p>
                                    <p>1h49</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
