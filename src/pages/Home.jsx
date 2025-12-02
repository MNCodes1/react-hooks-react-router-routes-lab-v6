import NavBar from "../components/NavBar";
import movies from "../data/movies";

function Home() {
  return (
    <div>
      <NavBar />
      <h1>Home Page</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h2>{movie.title}</h2>
            <a href={`/movie/${movie.id}`}>View Info</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Home;

