import React from 'react';
import Container from '../Container/Container';

class Header extends React.Component {
  render(){
    return (
      <header>
        <Container>
          <h1>Movie Search App</h1>
        </Container>
      </header>
    );
  }
}

export default Header;
