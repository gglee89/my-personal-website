import React from 'react';

// COMPONENT
import Header from '../components/Header';

class Home extends React.Component {
  render() {
    return (
      <div className="home-wrap">
        <Header />
        <div className="home-sections">
          <div style={{ height: 2000 }}></div>
        </div>
      </div>
    );
  }
}

export default Home;
