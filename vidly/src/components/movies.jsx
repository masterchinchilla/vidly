import React, { Component } from "react";
import { deleteMovie, getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies(),
    moviesAlt: [],
  };
  handleDelete = (movieId) => {
    deleteMovie(movieId);
    return console.log("movie deleted");
  };
  render() {
    if (this.state.movies.length === 0) {
      return <p className="m-3">There are no movies in the database.</p>;
    }
    return (
      <div className="m-4">
        <p>Showing {this.state.movies.length} movies in the database.</p>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie._id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Movies;
