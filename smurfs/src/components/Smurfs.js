import React from "react";
import smurflogo from "../IMG/smurflogo.jpg";
import "./App.css";

export const Smurfs = ({ smurfs, deleteData }) => {
  return (
    <div className="SmurfContainer">
      {smurfs.map(smurf => {
        return (
          <div className="SmurfCard" key={smurf.id}>
            <img src={smurflogo} height="60px" width="60px" />
            <h2>
              <strong>{smurf.name}</strong>
            </h2>
            <div className="SmurfDetails">
              <p>Age: {smurf.age}</p>

              <p>Height: {smurf.height}</p>
              <button
                onClick={e => {
                  e.preventDefault();
                  return smurf.deleteData(smurf.id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
