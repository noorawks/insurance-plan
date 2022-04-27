import React from "react";
import logo from './logo.svg';
import './App.css';
import Plan from './components/plan/Plan.js';



class App extends React.Component {
  render() {
      return (
      <div className="App">
        <Plan/>
      </div>
    );
  }
}

export default App;
