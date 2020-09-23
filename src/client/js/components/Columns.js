import React from 'react';

// Sections
import About from './sections/About';
import YouTube from './sections/YouTube';
import Projects from './sections/Projects';
import Interests from './sections/Interests';

const Columns = () => {
  return (
    <React.Fragment>
      <About />
      <YouTube />
      <Projects />
      <Interests />
    </React.Fragment>
  );
};

export default Columns;
