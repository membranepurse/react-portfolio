import React, { Component, useState, Fragment } from 'react';
import PropTypes from 'prop-types';

const [displaySocialInputs, toggleSocialInputs] = useState(false);


export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;

    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>

          <div id="portfolio-wrapper hide" className="bgrid-quarters s-bgrid-thirds cf">

          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
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
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}
