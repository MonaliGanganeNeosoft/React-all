import React from "react";
const movieForm = ({ match, history }) => {
  return (
    <>
      <h1>Movieform {match.params.id}</h1>
      <button
        className="btn btn-primary"
        onClick={() => history.push("/movies")}
      >
        Save
      </button>
    </>
  );
};

export default movieForm;
