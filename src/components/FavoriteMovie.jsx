import React, { Component } from "react";

import "./FavoriteMovie.css";

export default class FavoriteMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      poster: "",
      comment: ""
    };
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  submitForm(e) {
    e.preventDefault();

    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    };

    const url = "https://post-a-form.herokuapp.com/api/movies/";

    fetch(url, config)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          alert(res.error);
        } else {
          alert(`Movie add with the ID ${res}!`);
        }
      })
      .catch(e => {
        console.error(e);
        alert("Erratum");
      });
  }

  render() {
    return (
      <div className="FavoriteMovie">
        <h1>Favorite movie</h1>

        <form onSubmit={this.submitForm}>
          <fieldset>
            <legend>Movie</legend>
            <div className="form-data">
              <label htmlFor="title">Title</label>
              <input
                required
                type="text"
                id="title"
                name="title"
                onChange={this.onChange}
                value={this.state.title}
              />
            </div>

            <div className="form-data">
              <label htmlFor="poster">Poster URL</label>
              <input
                required
                type="text"
                id="poster"
                name="poster"
                onChange={this.onChange}
                value={this.state.poster}
              />
            </div>

            <div className="form-data">
              <label htmlFor="comment">Comments</label>
              <textarea
                required
                id="comment"
                name="comment"
                onChange={this.onChange}
                value={this.state.comment}
              />
            </div>
            <hr />
            <div className="form-data">
              <input type="submit" value="Send" />
            </div>
          </fieldset>
        </form>
        <p>
          {" "}
          Si tu veux vérifier que l'ajout a bien été effectué =>{" "}
          <a href="https://post-a-form.herokuapp.com/api/movies/">Clique ICI</a>
        </p>
      </div>
    );
  }
}
