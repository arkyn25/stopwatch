import React from 'react'
import { Link } from 'react-router-dom' 
import "./lcars.css";

class Home extends React.Component {
  constructor () {
    super();
    this.state = {
      minutes:0,
      seconds: 0,
    };
  }


  render () {
    const { setTimeSeconds, setTimeMinutes } = this.props;
    return (
      <div>
        <label htmlFor='minutes'>
        <input style={{width:150}} className="lcars-element rounded" type='number' name='minutes' placeholder="Minutos" onChange={ setTimeMinutes }/>
        </label>
        <label htmlFor='seconds'>
        <input style={{width:150}} className="lcars-element rounded" type='number' name='seconds' placeholder="Segundos" onChange={ setTimeSeconds }/>
        </label>
        <div style={{display: 'flex', flexDirection:'column', textAlign: 'center', width:300}}>
          <Link className="button" to="/chronometer" textColor="black">Ligar cronômetro</Link>
        </div>
      </div> 

    );
  }
}

export default Home;