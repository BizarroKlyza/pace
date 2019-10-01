import React from 'react';



class InfoPage extends React.Component
{
    constructor(props)
    {
      super(props);
      this.state={
        content:"Hello, I'm going to present various info pages like about us and jobs.",
      };
    }


    render()
    {
      return(
        <div>
          {this.state.content}
        </div>
      );
    }
}
