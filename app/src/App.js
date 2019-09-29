import React from 'react';
import logo from './logo.svg';

import './App.css';

import PageHeader from './components/page-header/page-header';

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <PageHeader></PageHeader>
      </div>
    );
  }
}

export default App;
