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

  //  <li className="ReferrerName">{this.state.referrerName}</li>
  //<li>{this.state.datePublished}</li>
  render() {
    return (
      <article className="post">
        <div className="post-inner-row flex-container" id="row-item-1">

          <div className="post-score">
            {this.state.sentimentScore}
          </div>

          <div className="post-star">
              <Star />
          </div>

          <div className="post-title">
              <h3 style={{'font-size':'5 rem'}}>{this.state.subject}</h3>
          </div>

          <div className="expandable">
            <input type="button" onClick={(e)=>this.hideCardRowTwo()} value="Expandable Placeholder"/>
          </div>
        </div>
        
        <div className="post-inner-row-2 flex-container" style={{display:this.state.displayCardRowTwoStyle}}>
          <div class="share-link">
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
