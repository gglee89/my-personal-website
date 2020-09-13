import React from 'react';

// Sections
import About from './sections/About';

const Columns = () => {
  return (
    <React.Fragment>
      <About />
      <section id="youtube">
        <div className="flex flex--space-around">
          <div className="col-1">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non
              consectetur diam, et dignissim erat. Integer pellentesque sed
              justo eget mollis. Pellentesque ac orci vel dolor aliquet
              facilisis. Etiam malesuada metus arcu, ac pharetra ex semper id.
              Nunc porttitor lorem in sodales accumsan. In congue placerat
              magna, vel accumsan risus rhoncus eu. Mauris egestas, magna at
              iaculis ultrices, nibh eros tristique purus, nec pulvinar lorem
              augue eget leo. Ut eros risus, vulputate eu mauris sit amet,
              feugiat dapibus elit.
            </p>
          </div>
          <div className="col-1 order-first">
            <p>
              CTA BUTTON IS HERE Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Morbi non consectetur diam, et dignissim erat.
              Integer pellentesque sed justo eget mollis. Pellentesque ac orci
              vel dolor aliquet facilisis. Etiam malesuada metus arcu, ac
              pharetra ex semper id. Nunc porttitor lorem in sodales accumsan.
              In congue placerat magna, vel accumsan risus rhoncus eu. Mauris
              egestas, magna at iaculis ultrices, nibh eros tristique purus, nec
              pulvinar lorem augue eget leo. Ut eros risus, vulputate eu mauris
              sit amet, feugiat dapibus elit.
            </p>
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="flex flex--space-around">
          <div className="col-2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non
              consectetur diam, et dignissim erat. Integer pellentesque sed
              justo eget mollis. Pellentesque ac orci vel dolor aliquet
              facilisis. Etiam malesuada metus arcu, ac pharetra ex semper id.
              Nunc porttitor lorem in sodales accumsan. In congue placerat
              magna, vel accumsan risus rhoncus eu. Mauris egestas, magna at
              iaculis ultrices, nibh eros tristique purus, nec pulvinar lorem
              augue eget leo. Ut eros risus, vulputate eu mauris sit amet,
              feugiat dapibus elit.
            </p>
          </div>
        </div>
      </section>
      <section id="interests">
        <div className="flex flex--center">
          <div className="col-50 flex flex--center">
            <div className="col-1">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                non consectetur diam, et dignissim erat. Integer pellentesque
                sed justo eget mollis. Pellentesque ac orci vel dolor aliquet
                facilisis. Etiam malesuada metus arcu, ac pharetra ex semper id.
                Nunc porttitor lorem in sodales accumsan. In congue placerat
                magna, vel accumsan risus rhoncus eu. Mauris egestas, magna at
                iaculis ultrices, nibh eros tristique purus, nec pulvinar lorem
                augue eget leo. Ut eros risus, vulputate eu mauris sit amet,
                feugiat dapibus elit.
              </p>
            </div>
          </div>
          <div className="col-50">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non
              consectetur diam, et dignissim erat. Integer pellentesque sed
              justo eget mollis. Pellentesque ac orci vel dolor aliquet
              facilisis. Etiam malesuada metus arcu, ac pharetra ex semper id.
              Nunc porttitor lorem in sodales accumsan. In congue placerat
              magna, vel accumsan risus rhoncus eu. Mauris egestas, magna at
              iaculis ultrices, nibh eros tristique purus, nec pulvinar lorem
              augue eget leo. Ut eros risus, vulputate eu mauris sit amet,
              feugiat dapibus elit.
            </p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Columns;
