import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Header from './components/common/Header.jsx'
import './index.css'

const App = () => {
  const title = 'Welcome to my Crypto Analyzer';
  return (
    <div>
      <Header />
      <List />
  </div>
  );
};


ReactDOM.render(<App />, document.getElementById('app'));
