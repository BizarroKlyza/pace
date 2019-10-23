import React from "react";
import ResultsCard from "../results-card/results-card";
import Star from "../../star/starz";
import "./style/style.css";

class ResultsTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
    this.generateRandom = this.generateRandom.bind(this);
  }

  //logic for rendering card

  generateRandom(){
    let n = 1;
    let y=5;

   let math=n + Math.random()*(y-n);
    return(Math.round(math*10)/10);
  }
  render() {
    return (
      <section className="results-table">
        <h2 style={{textDecoration:'underline'}}>{this.props.Title}</h2>
        <section className="results-data-container">
          <ResultsCard SentimentScore={1} Subject={"10 Reasons to love Cats"}/>
          <ResultsCard SentimentScore={5} Subject={"10 Reasons to love Dogs"}/>
          <ResultsCard SentimentScore={2.5} Subject={"We Love Pigs. They are great."}/>
          <ResultsCard SentimentScore={3} Subject={"You won't believe our top 10 tips on baking!"}/>
          <ResultsCard SentimentScore={5} Subject={"Men in Sydney build great application"}/>
          <ResultsCard SentimentScore={1} Subject={"The market is crashing and so is your laptop"} />
          <ResultsCard SentimentScore={this.generateRandom()} Subject={"Placeholder Article Title"} />
          <ResultsCard SentimentScore={this.generateRandom()} Subject={"Placeholder Article Title"} />
          <ResultsCard SentimentScore={this.generateRandom()} Subject={"Placeholder Article Title"} />
          <ResultsCard SentimentScore={this.generateRandom()} Subject={"Placeholder Article Title"} />
          <ResultsCard SentimentScore={this.generateRandom()} Subject={"Placeholder Article Title"} />
          <ResultsCard SentimentScore={this.generateRandom()} Subject={"Placeholder Article Title"} />
          <ResultsCard SentimentScore={this.generateRandom()} Subject={"Placeholder Article Title"} />
          <ResultsCard SentimentScore={this.generateRandom()} Subject={"Placeholder Article Title"} />
          <ResultsCard SentimentScore={this.generateRandom()} Subject={"Placeholder Article Title"} />
          <ResultsCard SentimentScore={2.5} Subject={"Placeholder Article Title"} />
          <ResultsCard SentimentScore={this.generateRandom()} Subject={"Placeholder Article Title"} />
          <ResultsCard SentimentScore={this.generateRandom()} Subject={"Placeholder Article Title"} />
          <ResultsCard SentimentScore={this.generateRandom()} Subject={"Placeholder Article Title"} />
          <ResultsCard SentimentScore={this.generateRandom()} Subject={"Placeholder Article Title"} />
          <ResultsCard SentimentScore={this.generateRandom()} Subject={"Placeholder Article Title"} />
          <ResultsCard SentimentScore={this.generateRandom()} Subject={"Placeholder Article Title"} />
        </section>
      </section>
    );
  }
}

export default ResultsTable;
