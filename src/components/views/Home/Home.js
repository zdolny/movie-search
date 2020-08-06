import React from 'react';
import Movie from '../Movie/Movie';

class Home extends React.Component {
  state = {
    searchText: '',
    movie: {},
  }

  onChangeHandle(event) {
    this.setState({searchText: event.target.value});
  }

  onSubmit(event) {
    event.preventDefault();
    const {searchText} = this.state;
    const url = `https://www.omdbapi.com/?apikey=157f34ed&t=${searchText}`;
    fetch(url)
      .then(response => response.json())
      .then(responseJson => this.setState({movie: responseJson}));
  }

  render() {
    return (
      <main>
        <h2>Search movie</h2>
        <form onSubmit={event => this.onSubmit(event)}>
          <label htmlFor="searchText">Search movie by title</label>
          <input
            type="text"
            id="searchText"
            onChange={event => this.onChangeHandle(event)}
            value={this.state.searchText}/>
          <button type="submit">Search</button>
        </form>
        <Movie movie={this.state.movie} />
      </main>
    );
  }
}

export default Home;
