import {useState} from "react";
import MovieCard from "../components/MovieCard.jsx";

function Home(){
    const [searchQuery, setSearchQuery] = useState("");

    function HandleSearch(){
        alert(searchQuery)

    }

    const movies = [
        {id: 1, title: "Homem aranha 1", releaseDate: "2022"},
        {id: 2, title: "Homem aranha 2", releaseDate: "2022"},
        {id: 3, title: "Homem aranha 3", releaseDate: "2022"},
        {id: 4, title: "Homem aranha 4", releaseDate: "2022"},
    ];


    return(
    <div className="home">

        <form onSubmit={HandleSearch} className="search-form">
            <input type="text"
                   placeholder="Type a movie..."
                   className="search-input"
                   value={searchQuery}
                   onChange={ (e) => setSearchQuery(e.target.value)}>
            </input>
            <button className="search-button" type="submit">
                Search
            </button>


        </form>


        <div className="movie-grid">
            {movies.map( (movie) => (
                <MovieCard movie={movie} key={movie.id} />
                )
            )}

        </div>
    </div>

    )
}

export default Home;