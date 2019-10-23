import React from "react";
import Star from "../../star/starz";
import "./style/style.css";
// import the library
import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import your icons
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";

library.add(faChevronCircleDown);

class ResultsCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sentimentScore: this.props.SentimentScore,
      referrerName: "Betoota Advocate",
      referrerLink: "https://www.google.com",
      subject: this.props.Subject,
      blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      datePublished: "",
      img: "",
      link: "https://www.google.com",
      displayCardRowTwoStyle: "none",
      cardName:"",
    };
    this.hideCardRowTwo = this.hideCardRowTwo.bind(this);
    this.logicForRenderCard = this.logicForRenderCard.bind(this);
  }
  componentDidMount(){
    this.logicForRenderCard();
  }
  //logic for rendering card
  logicForRenderCard() {

    if (this.state.sentimentScore === 2.5) {
      this.setState({cardName:'neutral'})
    } else if (this.state.sentimentScore < 2.5) {
      this.setState({cardName:'negative'})
    } else {
      this.setState({cardName:'positive'})
    }
  }

  hideCardRowTwo() {
    if (this.state.displayCardRowTwoStyle === "none") {
      this.setState({
        displayCardRowTwoStyle: "block"
      });
    } else {
      this.setState({
        displayCardRowTwoStyle: "none"
      });
    }
  }

  //  <li className="ReferrerName">{this.state.referrerName}</li>
  //<li>{this.state.datePublished}</li>
  render() {
    return (
      <article className={"post " + this.state.cardName}>
        <div className="post-inner-row flex-container" id="row-item-1">
          <div className={"post-score "+this.state.cardName}>{this.state.sentimentScore}</div>

          <div className="post-star">
            <Star SentimentScore={this.state.sentimentScore}/>
          </div>

          <div className="post-title">
            <h3 style={{ fontSize: "5 rem" }}>{this.state.subject}</h3>
          </div>

          <div className="expandable">
            <button onClick={e => this.hideCardRowTwo()}>
              <FontAwesomeIcon icon={["fas", "chevron-circle-down"]} />
            </button>
          </div>
        </div>

        <div
          className="post-inner-row-2 flex-container"
          style={{ display: this.state.displayCardRowTwoStyle }}
        >
          <div className="share-link">
            <a href="#" className="share-link">
              Share This
            </a>
          </div>

          <div className="post-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua...
          </div>
        </div>
      </article>
    );
  }
}

export default ResultsCard;
