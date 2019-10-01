import React from 'react';
import StarRatings from 'react-star-ratings';


class Star extends React.Component
{
  constructor(props){
    super(props);
    this.state={
      rating:1,
      colour:"",
    };
    this.CalculateColour = this.CalculateColour.bind(this);
  }
  componentDidMount(){
    this.CalculateColour();
  }
  CalculateColour()
  {
    if(this.state.rating === 2.5)
    {
      this.setState({colour:"yellow"});
      document.getElementById('rateDiv').style.colour = "yellow";
    }
    else if(this.state.rating < 2.5)
    {
      this.setState({colour:"red"});
      document.getElementById('rateDiv').style.colour = "red";
    }
    else
    {
      this.setState({colour:"green"});
      document.getElementById('rateDiv').style.colour = "green";
    }
  }
  render()
  {
    return(
      <div className="StarDiv">
        <span className="RatingDiv" id="rateDiv">

          {this.state.rating}
        </span>
        <StarRatings
          rating={this.state.rating}
          starRatedColor={this.state.colour}
          numberOfStars={5}
          starDimension="10px"
          starSpacing="1px"
          name='rating'
        />
      </div>
    );
  }
}

export default Star;
