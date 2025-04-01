import {useState} from "react";
import MovieCard from "../components/MovieCard.jsx";

function Home(){
    const [searchQuery, setSearchQuery] = useState("");

    function HandleSearch(e){
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("")

    }

    const movies = [
        {id: 1, title: "Homem aranha 1", releaseDate: "2022"},
        {id: 2, title: "Senhor dos aneis", releaseDate: "2022"},
        {id: 3, title: "Homem aranha 3", releaseDate: "2022"},
        {id: 4, title: "Pablo", releaseDate: "2022"},
        {id: 8, title: "Pablo 2", releaseDate: "2022"},
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
                movie.title.startsWith(searchQuery) && <MovieCard movie={movie} key={movie.id} />
                )
            )}

        </div>
    </div>

    )
}

export default Home;