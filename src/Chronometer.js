import React from 'react';
import { Link } from 'react-router-dom' 

class Chronometer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: props.minutes,
      seconds: props.seconds,
    }

  }

  componentDidMount() {
    this.myInterval = setInterval(() => {
      const { seconds, minutes } = this.state
      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1
        }))
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(this.myInterval)
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59
          }))
        }
      }
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.myInterval)
  }


  render () {
    const { minutes, seconds} = this.state;
    const { turnOff } = this.props;

    return (
      <div>
        <div>
        { minutes === 0 && seconds === 0 
          ? <h1>FIM!</h1>
          : <h1>Tempo Restante { minutes}:{seconds < 10 ? `0${seconds}` : seconds} </h1>
        }
        </div>
        <Link to="/" onClick={ turnOff }>Desligar cronômetro</Link>
      </div>
    )
  }
}

export default Chronometer;