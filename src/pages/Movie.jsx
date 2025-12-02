import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import movies from "../data/movies";

function Movie() {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) {
    return (
      <div>
        <NavBar />
        <h1>Movie not found</h1>
      </div>
    );
  }

  return (
    <div>
      <NavBar />
      <h1>{movie.title}</h1>
      <p>{movie.time} minutes</p>
      <ul>
        {movie.genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

export default Movie;
