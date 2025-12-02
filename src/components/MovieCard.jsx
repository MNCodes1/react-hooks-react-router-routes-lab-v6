import { useParams } from "react-router-dom";
import movies from "../data/movies"; 

function Movie() {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) return <h1>Movie not found</h1>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>Genres:</p>
      <ul>
        {movie.genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}
export default Movie;
