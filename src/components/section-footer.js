import React from 'react';

import Logo from "./logo"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-4 text-center">
              <Logo/>
            </div>

            <div className="col-md-4 text-center ">
              <p className="text-small footer__text">Cecilia all right reserved 2020 | Design by Yari</p> 
            </div>

            <div className="col-md-4">
              <div className="form-base__button">
                <p className="form-base__button__text text-uppercase mb-2">Book your free lesson</p> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;