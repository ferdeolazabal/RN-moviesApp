import { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import { MovideDBResponse, Movie } from '../interfaces/movieInterfaces';

export const UseMovies = () => {
    const [moviesNowPlaying, setMoviesNowPlaying] = useState<Movie[]>([]);
    const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
    const [topRatedMovies, setTopRatedMovies] = useState<Movie[]>([]);
    const [upcomingMovies, setUpcomingMovies] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const getMovies = async () => {
        const respNowPlaying = await movieDB.get<MovideDBResponse>('/now_playing');
        const respPopular = await movieDB.get<MovideDBResponse>('/popular');
        const respTopRated = await movieDB.get<MovideDBResponse>('/top_rated');
        const respUpcoming = await movieDB.get<MovideDBResponse>('/upcoming');
        setMoviesNowPlaying(respNowPlaying.data.results);
        setPopularMovies(respPopular.data.results);
        setTopRatedMovies(respTopRated.data.results);
        setUpcomingMovies(respUpcoming.data.results);
        setIsLoading(false);
    };

    useEffect(() => {
        getMovies();
    }, []);

    return {
        moviesNowPlaying,
        popularMovies,
        topRatedMovies,
        upcomingMovies,
        isLoading,
    };
};
