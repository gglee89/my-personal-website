import React, { useState, useEffect } from 'react';

const Projects = () => {
  const [vScroll, setVScroll] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setVScroll(window.pageYOffset / 5);
    });
  });

  return (
    <section id="projects" className="projects">
      <div className="flex flex--space-around">
        <div className="col-1">
          <div
            className="logo-strip"
            style={{ backgroundPosition: `center -${vScroll}px` }}
          ></div>
        </div>
        <div className="col-1 flex">
          <p className="home-lead">
            Doing the work that needs to be done tomorrow.
          </p>
          <a href="#" className="home-cta">
            See my Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
