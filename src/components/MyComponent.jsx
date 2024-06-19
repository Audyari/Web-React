// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';

class MyComponent extends Component {
  state = {
    count: 0
  };

  handleClick = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  render() {
    return (
      <div>
        <p>Anda telah mengklik tombol sebanyak {this.state.count} kali.</p>
        <button onClick={this.handleClick}>Klik saya</button>
      </div>
    );
  }
}

export default MyComponent;