import React, { Component, useState,Fragment } from 'react';
import PropTypes from 'prop-types';
import { tada } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
const styles = {
  tada: {
    animation: 'x 10s',
    animationName: Radium.keyframes(tada, 'tada')
  }
}

const Portfolio = ({ resumeData: {portfolio, name, description, location}}) => {
    const [displaySocialInputs, toggleSocialInputs] = useState(false);

    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed test">
        <StyleRoot>
          <div className="test" style={styles.tada}>
            <button onClick={() => toggleSocialInputs(!displaySocialInputs)} type="button" className="btn btn-light">
              Check Out Some of My Works
            </button>
          </div>
        </StyleRoot>
          <div id="portfolio-wrapper hide" className="bgrid-quarters s-bgrid-thirds cf">


          {displaySocialInputs && <Fragment>

            {portfolio && portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                      <img src={`${item.imgurl}`} className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                  </div>
                  <a href={`${item.location}`} target="_blank">
                  <div className="linkButton">
                    Check me out
                  </div>
                  </a>
                </div>
              )
            })}

            </Fragment>}

          {

          }
          </div>
        </div>
      </div>
  </section>
        );
  }

export default Portfolio;
