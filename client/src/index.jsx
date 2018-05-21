import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Header from './components/common/Header.jsx'

const App = () => {
  const title = 'Welcome to my Crypto Analyzer';
  return (
    <div>
      <Header />
      <h1>{title}</h1>
  </div>
  );
};


ReactDOM.render(<App />, document.getElementById('app'));
