import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import SmurfForm from "./SmurfForm";
import { getSmurfs, deleteData } from "../actions";
import { Smurfs } from "./Smurfs";

class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }
  render() {
    if (this.props.fetching) {
      return <h3> Your Smurfs are Smurfing as fast as they can!!</h3>;
    }
    return (
      <div className="App">
        <div className="SmurfHeader">
          <h1> Welcome to a Smurfingly good SMURF Smurfatory!!! </h1>
        </div>
        <SmurfForm />
        <Smurfs smurfs={this.props.smurfs} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurf: state.fetching,
    deleteData: state.deleteData
  };
};
export default connect(mapStateToProps, { getSmurfs, deleteData })(App);
