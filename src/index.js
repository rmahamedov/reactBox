import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { click } from '@testing-library/user-event/dist/click';


class Box extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      min: 1,
      max: 50
    }
    this.messagePlus = this.messagePlus.bind(this)
    this.messageMinus = this.messageMinus.bind(this)
    this.randomClick = this.randomClick.bind(this)
    this.messageReset = this.messageReset.bind(this)
   }

   messagePlus() {
    this.setState({counter: this.state.counter + 1})
   }
   messageMinus() {
    this.setState(this.state.counter >= 1 ? {counter: this.state.counter - 1} : 0 )
   }
   randomClick() {
    const min = 1;
    const max = 50;
    const rand = min + Math.floor(Math.random() * (max - min));
    this.setState({ counter: this.state.counter = 0})
    this.setState({ counter: this.state.counter + rand });
  }
  messageReset() {
    this.setState({counter: this.state.counter = 0})
  }
   componentDidMount() {}

   componentDidUpdate() {}

   componentWillUnmount() {}

  render() {
    return (
      <div className='box'>
        <div className='item'>
          <h2 className='title'>{this.state.counter}</h2>
          <div className='buttons'>
          <button className='btn' onClick={this.messagePlus}>INC</button>
          <button className='btn'onClick={this.messageMinus}>DEC</button>
          <button className='btn'onClick={this.randomClick}>RND</button>
          <button className='btn'onClick={this.messageReset}>RESET</button>
          </div>
        </div>
      </div>
    )
  
  }
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Box />
  </React.StrictMode>
);

