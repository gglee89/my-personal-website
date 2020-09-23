import React, { useState } from 'react';

// Data
import { interests } from '../../data/interests';

const thumb = ({ title, description, image }) => {
  return (
    <a
      key={title}
      href="#"
      className={`interest-thumb`}
      style={{
        backgroundImage: `url(/src/client/assets/img/interests/${image})`,
      }}
    >
      <div className="interest-meta">
        <div className="title">{title}</div>
        <div className="description">{description}</div>
      </div>
    </a>
  );
};

const Interests = () => {
  const [interestObj, setInterestObj] = useState(interests);

  return (
    <section id="interests" className="interests">
      <div className="flex flex--center">
        <div className="col-50 flex flex--center">
          <div className="interest-wrap">
            {Object.keys(interestObj).map((interestKey) => {
              return thumb(interestObj[interestKey]);
            })}
          </div>
        </div>
        <div className="col-50 order-first">
          <p className="home-lead">Have fun. Enjoy little and big things.</p>
          <a href="#" className="home-cta">
            My Interests
          </a>
        </div>
      </div>
    </section>
  );
};

export default Interests;
