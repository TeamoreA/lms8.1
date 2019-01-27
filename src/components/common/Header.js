import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';

 const Header = ({loading}) => {
  return (
    <nav>
      <IndexLink to="/" activieClassName="active">Home Page</IndexLink>
      {" | "}
      <Link to="/about" activeClassName="active">About</Link>
      {" | "}
      <Link to="/courses" activeClassName="active">Food Menu</Link>
      {loading && <LoadingDots interval={300} dots={5}/>}
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};
export default Header;
