import { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import { MovideDBResponse, Movie } from '../interfaces/movieInterfaces';

interface MoviesState {
    popular: Movie[];
    nowPlaying: Movie[];
    toprated: Movie[];
    upcoming: Movie[];
}

export const UseMovies = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [moviesState, setMoviesState] = useState<MoviesState>({
        popular: [],
        nowPlaying: [],
        toprated: [],
        upcoming: [],
    });

    const getMovies = async () => {
        const nowPlayingPromise = movieDB.get<MovideDBResponse>('/now_playing');
        const popularPromise = movieDB.get<MovideDBResponse>('/popular');
        const topRatedPromise = movieDB.get<MovideDBResponse>('/top_rated');
        const upcomingPromise = movieDB.get<MovideDBResponse>('/upcoming');

        const resp = await Promise.all([
            nowPlayingPromise,
            popularPromise,
            topRatedPromise,
            upcomingPromise,
        ]);

        setMoviesState({
            nowPlaying: resp[0].data.results,
            popular: resp[1].data.results,
            toprated: resp[2].data.results,
            upcoming: resp[3].data.results,
        });
        setIsLoading(false);
    };

    useEffect(() => {
        getMovies();
    }, []);

    return {
        ...moviesState,
        isLoading,
    };
};
