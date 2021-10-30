import "./Movie.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, year, poster, genres, summary, title, rating }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie__data">
        <Link
          to={{
            pathname: `/movie/${id}`,
            state: {
              id,
              year,
              poster,
              genres,
              summary,
              title,
              rating,
            },
          }}
        >
          <h3 className="movie__title">{title}</h3>
        </Link>
        <h5 className="movie__year">{year}</h5>
        <ul className="movie__genres">
          {genres.map((genre, index) => {
            if (index >= 2) {
              return "";
            }
            return (
              <li key={index} className="genres__genre">
                {genre}
              </li>
            );
          })}
        </ul>
        <h5 className="movie__rating">{rating} / 10</h5>
        <p className="movie__summary">
          {summary.length < 1 ? "Not summary" : summary.slice(0, 180) + "..."}
        </p>
      </div>
    </div>
  );
}
Movie.propTypes = {
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.number.isRequired,
};
export default Movie;
