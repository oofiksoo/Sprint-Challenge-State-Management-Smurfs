import React from "react";

import { connect } from "react-redux";

import { addSmurf } from "../actions";

import "./App.css";

class SmurfForm extends React.Component {
  state = {
    name: "",

    age: "",

    height: ""
  };

  handleChangle = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addNewSmurf = e => {
    e.preventDefault();

    const newSmurf = this.state;

    this.props.addSmurf(newSmurf);

    this.setState({
      name: "",

      age: "",

      height: ""
    });
  };

  render() {
    return (
      <div className="SmurfForm">
        <h3>Submit a SMURF!</h3>
        <form onSubmit={this.addNewSmurf}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleChangle}
          />

          <input
            type="text"
            name="age"
            placeholder="Age"
            value={this.state.age}
            onChange={this.handleChangle}
          />

          <input
            type="text"
            name="height"
            placeholder="Height"
            value={this.state.height}
            onChange={this.handleChangle}
          />

          <button onClick={this.addNewSmurf}>Add Smurf</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    addingSmurf: state.addingSmurf
  };
};

export default connect(
  mapStateToProps,

  { addSmurf }
)(SmurfForm);
