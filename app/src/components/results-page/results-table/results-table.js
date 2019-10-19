import React from "react";
import ResultsCard from "../results-card/results-card";
import Star from "../../star/starz";
import "./style/style.css";

class ResultsTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };

  }

  //logic for rendering card


  render() {
    return (
      <section className="results-table">
        <h2>Title</h2>
        <section className="results-data-container">
          <ResultsCard />
        </section>
      </section>
    );
  }
}

export default ResultsTable;
