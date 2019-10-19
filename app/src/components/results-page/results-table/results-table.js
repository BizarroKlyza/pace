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
      <section class="results-table">

        <h2>Title</h2>
        <div class="results-header-container">
          <header class="results-header-item" id="results-header-score">
              <h3>Sentiment Score</h3>
          </header>
          <header class="results-header-item" id="results-header-stars">
              <h3></h3>
          </header>
          <header class="results-header-item" id="results-header-title">
              <h3>Article Title</h3>
          </header>
        </div>
        <section class="results-data-container">
          <ResultsCard />
        </section>
      </section>
    );
  }
}

export default ResultsTable;
