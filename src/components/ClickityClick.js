import React from 'react';
 
class ClickityClick extends React.Component {
  constructor() {
    super();
 
    this.setState({
      addressInfo: {
      ...this.state.addressInfo,
      city: 'New York City'
    }
  });
 
  handleClick = () => {
  this.setState({
    hasBeenClicked: true
  }, () => console.log(this.state.hasBeenClicked)) // prints true
}

 
  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}
 
export default ClickityClick;
 
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
 
import ClickityClick from './components/ClickityClick';
 
ReactDOM.render(<ClickityClick />, document.getElementById('root'));