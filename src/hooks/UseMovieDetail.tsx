import { useState, useEffect } from 'react';
import movieDB from '../api/movieDB';
import { Cast, CreditsResponse } from '../interfaces/creditsInterface';
import { FullMovieDetails } from '../interfaces/movieInterfaces';

interface MovieDetails {
    isLoading: boolean;
    fullMovie?: FullMovieDetails;
    cast: Cast[];
}

const UseMovieDetail = (movieId: number) => {
    const [state, setState] = useState<MovieDetails>({
        isLoading: true,
        fullMovie: {} as FullMovieDetails,
        cast: [],
    });

    const getMovieDetails = async () => {
        const movieDetails = await movieDB.get<FullMovieDetails>(`/${movieId}`);
        const castPromise = await movieDB.get<CreditsResponse>(`/${movieId}/credits`);

        // console.log('movieDetails', movieDetails.data.genres);
        // console.log('castPromise', castPromise.data.cast);

        const [movieDetailsResponse, castDetailsResponse] = await Promise.all([
            movieDetails,
            castPromise,
        ]);

        setState({
            isLoading: false,
            fullMovie: movieDetailsResponse.data,
            cast: castDetailsResponse.data.cast,
        });
    };

    useEffect(() => {
        getMovieDetails();
    }, []);

    return {
        ...state,
    };
};

export default UseMovieDetail;
