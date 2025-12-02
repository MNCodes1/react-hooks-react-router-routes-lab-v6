import NavBar from "../components/NavBar";
import actors from "../data/actors";

function Actors() {
  return (
    <div>
      <NavBar />
      <h1>Actors Page</h1>
      {actors.map((actor) => (
        <div key={actor.name}>
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map((movie) => (
              <li key={movie}>{movie}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
export default Actors;


