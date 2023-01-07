import axios from 'axios';

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '16754c44c9e2ce6e9a701f59c5a19d82',
        language: 'es-ES',
    },
});

export default movieDB;
