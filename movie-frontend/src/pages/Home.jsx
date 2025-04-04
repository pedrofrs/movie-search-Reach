import {useState, useEffect} from "react";
import MovieCard from "../components/MovieCard.jsx";
import "../css/Home.css"
import {getPopularMovies, searchMovies} from "../services/api.js";

"../services/api.js"

function Home(){
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect ( () => {

        const loadMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                console.log("Aqui");
                setMovies(popularMovies);

            }
            catch (error) {
                console.log(error);
                setError("Failed to load movies...");
            }
            finally {
                setLoading(false);
            }
        };
        loadMovies();
    }, [])

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) return;
        if (loading) return;

        setLoading(true);

        try {
            const searchResults = await searchMovies(searchQuery);
            setMovies(searchResults);
            setError(null);
        } catch (error) {
            console.log(error);
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Search for movies..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">
                    Search
                </button>
            </form>

            {error && <div className="error-message">{error}</div>}

        <div className="movie-grid">
            {movies.map( (movie) => (
                movie.title.toLowerCase().startsWith(searchQuery) && <MovieCard movie={movie} key={movie.id} />
                )
            )}
        </div>
    </div>
    )
}

export default Home;