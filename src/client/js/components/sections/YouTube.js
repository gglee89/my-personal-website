import React, { useState, useEffect } from 'react';

const YouTube = () => {
  const [vScroll, setVScroll] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setVScroll(window.pageYOffset);
    });
  });

  return (
    <section className="youtube">
      <div className="flex flex--space-around">
        <div className="col-1">
          <div
            style={{ backgroundPosition: `center -${vScroll}px` }}
            className="video-strip"
          ></div>
          <div className="flex-video">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/UEJ9QXr_vbI"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="col-1 order-first">
          <p className="home-lead">Showing your passion.</p>
          <a
            href="https://www.youtube.com/channel/UCmOvoLz59kXGcgWWlJwwV5g?view_as=subscriber"
            className="home-cta"
            target="_blank"
          >
            Watch on YouTube
          </a>
        </div>
      </div>
    </section>
  );
};

export default YouTube;
