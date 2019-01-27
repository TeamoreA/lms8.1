import React, {Component} from 'react';
import { Link } from 'react-router';

class HomePage extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Fast Food Fast</h1>
        <p>Welcome to fast food fast where you order food and it is delivered to your doorstep.</p>
        <Link to="about" className="btn btn-success btn-lg">Read More...</Link>
      </div>
    );
  }
}

export default HomePage;
