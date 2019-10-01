import React from "react";

import Star from "../../star/starz";

import "./style/style.css";

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
      displayCardRowTwoStyle:'block',

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

  hideCardRowTwo(){
    if(this.state.displayCardRowTwoStyle==='none'){
      this.setState({
        displayCardRowTwoStyle:'block'
      });
    }
    else{
      this.setState({
        displayCardRowTwoStyle:'none'
      });
    }

  }
  render() {
    return (
      <div className="ResultsCard">
        <div className="CardRow" id="CardRowOne">
          <img alt="Article" className="results-img" src="https://timesofindia.indiatimes.com/photo/54926158.cms"/>
          <ul>
            <li>
              <Star />
            </li>
            <li>{this.state.referrerName}</li>
            <li>{this.state.datePublished}</li>
            <li><input type="button" onClick={(e)=>this.hideCardRowTwo()} value="Hide Text"/></li>
            <li>
              <a href="#">Share This</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Tags</a>
            </li>
            <li>
              <a href="#">Tags</a>
            </li>
            <li>
              <a href="#">Tags</a>
            </li>
          </ul>
          <h5>{this.state.subject}</h5>
        </div>
        <div className="CardRow" style={{display:this.state.displayCardRowTwoStyle}}id="CardRowTwo">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
    );
  }
}

export default ResultsCard;
