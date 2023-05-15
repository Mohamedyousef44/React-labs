import React from 'react';
import './slider.css';

class Slider extends React.Component {
  constructor() {
    super();
    this.state = {
      currentIndex: 0,
      images: [
        'image1.png',
        'image2.png',
        'image3.png',
        'image4.png'
      ],
      timerID: 0
    };
  }

  nextSlide = () => {
    this.setState(prevState => ({
      currentIndex: (prevState.currentIndex + 1) % prevState.images.length
    }));
  }

  check = () => {
    this.setState(prevState =>(console.log(prevState)))
  }
  prevSlide = () => {
    this.setState(prevState => ({
      currentIndex: (prevState.currentIndex - 1 + prevState.images.length) % prevState.images.length
    }));
  }

  slide = () => {
    this.setState({
      timerID: setInterval(() => {
        this.setState(prevState => ({
          currentIndex: (prevState.currentIndex + 1) % prevState.images.length
        }));
      }, 1000)
    });
  }
  
  stop = () => {
    clearInterval(this.state.timerID);
    this.setState({ timerID: 0 });
  }
  

  render() {
    return (
      <div className='wrapper'>
        <div className='container'>
          <img className='cus-img' src={this.state.images[this.state.currentIndex]} alt='nature'></img>
        </div>
        <div className='btn-group'>
          <button className='btn' onClick={this.nextSlide}>Next</button>
          <button className='btn' onClick={this.prevSlide}>Prev</button>
          <button className='btn' onClick={this.slide}>Slide</button>
          <button className='btn' onClick={this.stop}>Stop</button>
          <button className='btn' onClick={this.check}>check</button>
        </div>
      </div>
    );
  }
}

export default Slider;