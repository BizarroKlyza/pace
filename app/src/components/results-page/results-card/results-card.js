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
      sentimentScore: -1,
      referrerName: "Betoota Advocate",
      referrerLink: "https://www.google.com",
      subject: "Man in Sydney builds a great application",
      blurb: "Man in Sydney builds a great application!",
      datePublished: "",
      img: "",
      link: "https://www.google.com",
      displayCardRowTwoStyle: "none"
    };
    this.hideCardRowTwo = this.hideCardRowTwo.bind(this);
  }
  //logic for rendering card
  logicForRenderCard() {
    if (this.state.sentimentScore === 2.5) {
    } else if (this.state.sentimentScore < 2.5) {
    } else {
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
      <article className="post negative">
        <div className="post-inner-row flex-container" id="row-item-1">
          <div className="post-score">{this.state.sentimentScore}</div>

          <div className="post-star">
            <Star />
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

          <div class="post-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua...
          </div>
        </div>
      </article>
    );
  }
}

export default ResultsCard;
