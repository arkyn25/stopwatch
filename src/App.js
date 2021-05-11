import React from 'react';
import './App.css';
import Chronometer from './Chronometer';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Home'
import "./lcars.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {  
      minutes: 0,
      seconds:0,
    };

  }

  setTimeMinutes =( {target} ) => {
    this.setState({ minutes: target.value })
  }

  setTimeSeconds =( {target} ) => {
    this.setState({ seconds: target.value })
  }

  turnOff = () => {
    this.setState({
      minutes: 0,
      seconds:0,
    })
  }

  render() {
    const { minutes, seconds } = this.state;
    return (
      <main className="App">
        <div id="header" className="lcars-row header">
          <div className="lcars-elbow left-bottom lcars-tan-bg"></div>
          <div className="lcars-bar horizontal">
            <div className="lcars-title right">TryB-X</div>
          </div>
          <div className="lcars-bar horizontal right-end decorated"></div>
          <div class="lcars-bar lcars-u-1"></div>
        </div>
        <BrowserRouter>
          <Switch>
            <section className="App-header" style={{background_color: 'black'}} >
             <Route exact path="/" render={ () => <Home setTimeMinutes={ this.setTimeMinutes } setTimeSeconds={ this.setTimeSeconds}/> } />
             <Route path="/chronometer" render = { () => <Chronometer minutes={ minutes } seconds={ seconds } turnOff={ this.turnOff }/> } />
            </section>
          </Switch>
        </BrowserRouter>
        <div id="footer" class="lcars-row ">
        <div class="lcars-elbow left-top lcars-tan-bg"></div>
        <div class="lcars-bar horizontal both-divider bottom"></div>
        <div class="lcars-bar horizontal right-end left-divider bottom"></div>
		  </div>
    </main>
    );
  }
}

export default App;