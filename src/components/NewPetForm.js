import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import './NewPetForm.css'

class NewPetForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      name: '',
      species: '',
      about: '',
      images: [],
      location: ''
    };
  }

  // **** don't know if we need this ****
  onChangeHandler = (event) => {
    const field = {}
    field[event.target.name] = event.target.value;

    this.setState(field);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // this.props.addPetCallback({
    //   name: this.state.petName,
    //   species: this.state.species,
    //   about: this.state.about,
    //   // images: this.sate.images.push(this.state.images),
    //   location: this.state.location
    // });
    this.setState({
      // id: '',
      name: this.state.name,
      species: this.state.species,
      about: this.state.about,
      // images: this.sate.images.push(this.state.images),
      location: this.state.location
    });

  }



  render() {
    return (
      <form  className="new-pet-form" onSubmit={this.handleSubmit}>
        <h3>Add a Pet</h3>
        { /* A form should go here! */ }
        <div>
          <label htmlFor="name">Name:</label>
          <input
            name="petName"
            value={this.state.name}
            onChange={this.onChangeHandler}
          />
        </div>

        <div>
          <label htmlFor="name">Species:</label>
          <input
            name="species"
            value={this.state.species}
            onChange={this.onChangeHandler}
          />
        </div>

        <div>
          <label htmlFor="about">About:</label>
          <input
            name="about"
            value={this.state.about}
            onChange={this.onChangeHandler}
          />
        </div>

        <div>
        <label htmlFor="location">Location:</label>
        <input
          name="location"
          value={this.state.location}
          onChange={this.onChangeHandler}
          />
        </div>
          <input className="btn btn-success new-pet-form--submit" type="submit" name="submit" value="Add a Pet" />
      </form>
    );
  }


}

NewPetForm.propTypes = {
  addPetCallback: PropTypes.func.isRequired,
};

export default NewPetForm;
