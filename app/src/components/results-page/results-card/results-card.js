import React from "react";
import Star from "../../star/starz";
import "./style/style.css";
// import the library
import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import your icons
import {
  faChevronCircleDown,
  faShareAlt
} from "@fortawesome/free-solid-svg-icons";

library.add(faChevronCircleDown, faShareAlt);

class ResultsCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sentimentScore: Math.round(this.props.SentimentScore * 10) / 10,
      referrerName: this.props.Source,
      referrerLink: this.props.Url,
      subject: this.props.Subject,
      blurb: this.props.Content,
      datePublished: "",
      img: "",
      link: this.props.url,
      displayCardRowTwoStyle: "none",
      cardName: ""
    };
    this.hideCardRowTwo = this.hideCardRowTwo.bind(this);
    this.logicForRenderCard = this.logicForRenderCard.bind(this);
  }
  componentDidMount() {
    this.logicForRenderCard();
  }
  //logic for rendering card
  logicForRenderCard() {
    if (this.state.sentimentScore === 2.5) {
      this.setState({ cardName: "neutral" });
    } else if (this.state.sentimentScore < 2.5) {
      this.setState({ cardName: "negative" });
    } else {
      this.setState({ cardName: "positive" });
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
          <div className={"post-score " + this.state.cardName}>
            {this.state.sentimentScore}
          </div>

          <div className="post-star">
            <Star SentimentScore={this.state.sentimentScore} />
          </div>

          <div className="post-title">
            <h3 style={{ fontSize: "5 rem" }}>
              <a href={this.props.Url}>{this.state.subject}</a>
            </h3>
          </div>

          <div className="expandable">
            <button onClick={e => this.hideCardRowTwo()}>
              <FontAwesomeIcon
                icon={["fas", "chevron-circle-down"]}
                style={{ fontSize: "1.25rem" }}
              />
            </button>
          </div>
        </div>

        <div
          className="post-inner-row-2 flex-container"
          style={{ display: this.state.displayCardRowTwoStyle }}
        >
          <div className="share-link">
            <a href="#" className="share-link">
              <FontAwesomeIcon icon={["fas", "share-alt"]} />
            </a>
          </div>

          <div className="post-text">{this.state.blurb}</div>
          <a href={this.props.Url}>Go To Article</a>
        </div>
      </article>
    );
  }
}

export default ResultsCard;
