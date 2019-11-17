import React, { Component } from "react";

import "./FormEmployee.css";

export default class FormEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastname: "",
      firstname: "",
      email: ""
    };
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  submitForm(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="FormEmployee">
        <h1>Favorite movie</h1>
        <form onSubmit={this.submitForm}>
          <fieldset>
            <legend>Movie</legend>
            <div className="form-data">
              <label htmlFor="lastsname">Title</label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                onChange={this.onChange}
                value={this.state.lastname}
              />
            </div>
            <div className="form-data">
              <label htmlFor="firstname">URL</label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                onChange={this.onChange}
                value={this.state.firstname}
              />
            </div>
            <div className="form-data">
              <label htmlFor="textarea">Comments</label>
              <input
                type="textarea"
                id="commentaires"
                name="textarea"
                onChange={this.onChange}
                value={this.state.commentaires}
              />
            </div>
            <hr />
            <div className="form-data">
              <input type="submit" value="envoyer" />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}
