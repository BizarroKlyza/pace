import React from "react";
import ResultsCard from "../results-card/results-card";
import Star from "../../star/starz";
import "./style/style.css";

class ResultsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.generateRandom = this.generateRandom.bind(this);
  }

  //logic for rendering card
  componentDidMount() {}
  generateRandom() {
    let n = 1;
    let y = 5;

    let math = n + Math.random() * (y - n);
    return Math.round(math * 10) / 10;
  }
  render() {
    let newsCards = <div />;
    if (this.props.NewsItems) {
      newsCards = this.props.NewsItems.map(i => (
        <ResultsCard
          SentimentScore={i.sscore}
          Content={i.content}
          Source={i.source}
          Url={i.url}
          Subject={i.title}
        />
      ));
      // console.log(newsCards);
    }
    return (
      <section className="results-table">
        <h2 style={{ textDecoration: "underline" }}>{this.props.Title}</h2>
        <section className="results-data-container">{newsCards}</section>
      </section>
    );
  }
}

export default ResultsTable;
