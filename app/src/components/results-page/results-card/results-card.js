import React from 'react';


class ResultsCard extends React.Component
{
  constructor(props)
  {
    super(this);
    this.state={
      sentimentScore:-1,
      subject:"",
      blurb:"",
      img:"",
      link:"",
    }
  }
  //logic for rendering card
  logicForRenderCard()
  {
    if(sentimentScore==2.5)
    {

    }
    else if(sentimentScore<2.5)
    {

    }
    else
    {

    }
  }
  render()
  {

  }

}
