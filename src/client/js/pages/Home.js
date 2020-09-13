import React from 'react';

// COMPONENT
import Header from '../components/Header';
import Columns from '../components/Columns';

class Home extends React.Component {
  render() {
    return (
      <div className="home-wrap">
        <Header />
        <div className="home-sections">
          <Columns />
        </div>
      </div>
    );
  }
}

export default Home;
