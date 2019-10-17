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
            <li className="ReferrerName">{this.state.referrerName}</li>
            <li>{this.state.datePublished}</li>
            <li><input type="button" onClick={(e)=>this.hideCardRowTwo()} value="Hide Text"/></li>
            <li>
              <a href="#" className="ShareLink">
                Share This
              </a>
            </li>
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
          <h3 style={{'font-size':'5 rem'}}>{this.state.subject}</h3>
        </div>
        <div className="CardRow" style={{display:this.state.displayCardRowTwoStyle}}id="CardRowTwo">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua...
        </div>
        <div>
          Related Coverage: ...
        </div>
      </div>
    );
  }
}

export default ResultsCard;
