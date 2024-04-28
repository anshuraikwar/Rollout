import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// import: styles
import './RollerStyles.css';

// import: assets
import RollerEdgeWhite from '../../assets/svg/roller-edges-white.svg';
import RollerEdgeBlack from '../../assets/svg/roller-edges-black.svg';

function Roller({
  tape,
}) {
  const texts = [
    '________',
    'TYPOGRAPHY',
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const tapeContents = document.getElementById(`${tape.id}-rolled-out-content-with-bg`);
      if (tapeContents) {
        tapeContents.style.width = 'calc(100vw + (4 * var(--roll-width)))';
      }
      clearTimeout(timeout);
    }, tape.delay);
  }, [tape.id, tape.delay]);

  return (
    <div
      key={tape.id}
      id={tape.id}
      className="roller-positioning-container"
      style={{
        top: tape.top,
        left: tape.left,

        transform: `rotateZ(${tape.rotate}deg)`,
      }}
    >
      <div
        id={`${tape.id}-rolled-out-tape`}
        className={`rolled-out-tape ${tape.theme}`}
      >
        <div
          id={`${tape.id}-rolled-out-content-with-bg`}
          className="rolled-out-content-with-bg"
        />

        <div id="roll-poisitoned-container" className="roll-poisitoned-container">
          <div id="roll" className="roll">
            <div id="roll-edge-top" className="roll-edges top-edge">
              <img
                alt={`${tape.id}-top-edge`}
                src={tape.theme === 'black' ? RollerEdgeWhite : RollerEdgeBlack}
              />
            </div>
            <div id="roll-edge-bottom" className="roll-edges bottom-edge">
              <img
                alt={`${tape.id}-bottom-edge`}
                src={tape.theme === 'black' ? RollerEdgeWhite : RollerEdgeBlack}
              />
            </div>

            <div id="roll-content" className="roll-content">
              {texts.map((string, stringIndex) => {
                const delay = `calc(${stringIndex - 1.33} * var(--rolling-animation-duration) * 0.67)`;

                return (
                  <div
                    key={`${tape.id}_${string}`}
                    id={`${string}_${stringIndex}`}
                    className="roll-text-position-cont"
                    style={{
                      animationDelay: `${delay}`,
                    }}
                  >
                    <div
                      className="roll-text-char-cont"
                    >
                      <div
                        className="roll-text-char"
                        style={{
                          animationDelay: `${delay}`,
                        }}
                      >
                        <div>
                          {string}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Roller.propTypes = {
  tape: PropTypes.shape({
    id: PropTypes.string,
    top: PropTypes.string,
    left: PropTypes.string,
    delay: PropTypes.number,
    theme: PropTypes.string,
    rotate: PropTypes.number,
  }).isRequired,
};
export default Roller;
