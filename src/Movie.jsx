import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from './Footer'; // Adjust path as necessary

const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const MovieApp = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        getMovies(APIURL);
    }, []);

    const getMovies = async (url) => {
        try {
            const response = await axios.get(url);
            setMovies(response.data.results);
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    };

    const handleSearch = async (event) => {
        setSearchTerm(event.target.value);
        if (event.target.value !== '') {
            try {
                const response = await axios.get(SEARCHAPI + event.target.value);
                setMovies(response.data.results);
            } catch (error) {
                console.error('Error searching movies:', error);
            }
        } else {
            getMovies(APIURL);
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Navbar */}
            <nav className="bg-gray-800 text-white p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center">
                        <span className="text-2xl font-bold">MovieApp</span>
                    </div>
                    <div className="flex items-center">
                        <input
                            id="search"
                            type="text"
                            placeholder="Search movies..."
                            className="w-full md:w-60 px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                            Search
                        </button>
                    </div>
                </div>
            </nav>

            {/* Movie List */}
            <div className="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {movies.map((movie) => (
                    <div key={movie.id} className="relative">
                        <img
                            src={movie.poster_path ? IMGPATH + movie.poster_path : 'img/image-missing.png'}
                            alt={movie.title}
                            className="w-full rounded-md shadow-md"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-75 rounded-md">
                            <div className="text-white text-center">
                                <h2 className="text-xl font-semibold">{movie.original_title}</h2>
                                <p className="mt-2">Rating: {movie.vote_average}</p>
                                <p className="mt-2">{movie.overview}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer */}
            {/* <Footer /> */}
        </div>
    );
};

export default MovieApp;
