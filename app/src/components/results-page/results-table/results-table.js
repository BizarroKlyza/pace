import React from "react";
import ResultsCard from "../results-card/results-card";
import Star from "../../star/starz";
import "./style/style.css";

className ResultsTable extends React.Component {

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
        <div className="results-header-container">
          <header className="results-header-item" id="results-header-score">
              <h3>Sentiment Score</h3>
          </header>
          <header className="results-header-item" id="results-header-stars">
              <h3></h3>
          </header>
          <header className="results-header-item" id="results-header-title">
              <h3>Article Title</h3>
          </header>
        </div>
        <section className="results-data-container">
          <ResultsCard />
        </section>
      </section>
    );
  }
}

export default ResultsTable;
