
function MovieCard({movie}){

    function onFavoriteClick(){
        alert("Clicked");
    }

    return <div className="movie-card">
        <div className="movie-poster">
            <img src={movie.url} alt={movie.title}/>
            <div className="movie-overlay">
                <button className="favorite-button" onClick={onFavoriteClick}>
                    LIKE
                </button>
            </div>
        </div>
        <div className="movie-info" >
            <h3>{movie.title}</h3>
            <p>{movie.releaseDate}</p>
        </div>
    </div>
}

export default MovieCard;