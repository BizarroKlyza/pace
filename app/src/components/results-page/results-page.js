import React from 'react';

import ResultsCard    from './results-card/results-card';

import              '../../index.css';
import              './style/style.css';

class ResultsPage extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={
      
      data:[],
    }
  }



  //eventually will map the multiple resultcards and render
  render()
  {
    return(
      <div className="ResultsContainer">
        <ResultsCard />
      </div>
    );
  }
}


export default ResultsPage;
