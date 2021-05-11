import React from 'react'
import { Link } from 'react-router-dom' 

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
        <input type='number' name='minutes' placeholder="Minutos" onChange={ setTimeMinutes }/>
        </label>
        <label htmlFor='seconds'>
        <input type='number' name='seconds' placeholder="Segundos" onChange={ setTimeSeconds }/>
        </label>
        <Link to="/chronometer">Ligar cronômetro</Link>
      </div>

    );
  }
}

export default Home;