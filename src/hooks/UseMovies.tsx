import { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import { MovideDBNowPlaying, Movie } from '../interfaces/movieInterfaces';

export const UseMovies = () => {
    const [actualMovies, setActualMovies] = useState<Movie[]>([]);
    const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
    const [topRatedMovies, setTopRatedMovies] = useState<Movie[]>([]);
    const [upcomingMovies, setUpcomingMovies] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const getMovies = async () => {
        const resp = await movieDB.get<MovideDBNowPlaying>('/now_playing');
        setActualMovies(resp.data.results);
        setIsLoading(false);
    };
    useEffect(() => {
        getMovies();
    }, []);

    return {
        actualMovies,
        isLoading,
    };
};
