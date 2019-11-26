import React from "react";
import ResultsCard from "../results-card/results-card";
import Star from "../../star/starz";
import "./style/style.css";

class ResultsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
   
  }

  //logic for rendering card
  componentDidMount() {}
 
  render() {
    let newsCards = <div />;
    if (this.props.NewsItems) { //map out news cards for all news articles in response
      newsCards = this.props.NewsItems.map(i => (
        <ResultsCard
          SentimentScore={i.sscore} // passing values to card components as props
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
