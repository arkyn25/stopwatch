import React from 'react';
import './App.css';
import Chronometer from './Chronometer';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Home'

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
        <BrowserRouter>
          <Switch>
            <section className="App-header">
             <Route exact path="/" render={ () => <Home setTimeMinutes={ this.setTimeMinutes } setTimeSeconds={ this.setTimeSeconds}/> } />
             <Route path="/chronometer" render = { () => <Chronometer minutes={ minutes } seconds={ seconds } turnOff={ this.turnOff }/> } />
            </section>
          </Switch>
        </BrowserRouter>
       
      </main>
    );
  }
}

export default App;