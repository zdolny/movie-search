import React from 'react';
import PropTypes from 'prop-types';

const Movie = props => (
  <>
    <h3>Title: {props.movie.Title}</h3>
    <p>Year: {props.movie.Year}</p>
  </>
);

Movie.propTypes = {
  movie: PropTypes.object,
};

export default Movie;
