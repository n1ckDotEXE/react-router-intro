import React, { Component } from "react";
import axios from "axios";

export class MovieDetail extends Component {
  state = {
    movieInfo: null,
  };

  componentDidMount = async () => {
    try {
      let payload = await axios.get(
        `http://omdbapi.com/?apikey=6332b1e1&t=${this.props.match.params.title}&plot=full`
      );

      this.setState({
        movieInfo: payload.data,
      });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    //console.log(this.props.match);

    return (
      <>
        {this.state.movieInfo ? (
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img src={this.state.movieInfo.Poster} alt="something" />
              </div>
              <div className="col-md-6">
                <h1>{this.state.movieInfo.Title}</h1>
                <p>{this.state.movieInfo.Plot}</p>

                {this.state.movieInfo.Ratings.map((item) => {
                  return (
                    <div key={item.Source}>
                      {item.Source}: {item.Value}
                    </div>
                  );
                })}

                <div style={{ marginTop: 140 }}>
                  <a
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                    href={`https://www.imdb.com/title/${this.state.movieInfo.imdbID}/`}
                  >
                    IMDB Link
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>...Loading</div>
        )}
      </>
    );
  }
}

export default MovieDetail;
