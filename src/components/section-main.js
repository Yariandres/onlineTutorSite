import React from 'react';

const Main = () => {
  return (
    <div className="main">
      <div className="container">
        <h1 className="text-center text-big main__heading">Learn Spanish</h1>     

        <div className="row">
          <div className="col-sm-12 col-md-6">
            <div className="form-base">
              <div className="form-base__form">

                <h3 className="form-base__heading text-medium text-uppercase text-center">Free 1st lesson</h3>
                <p className="form-base__paragraph text-medium text-center">I stand by my work that’s why I am offering the first lesson absolutly for free </p>

                <div className="form-base__button">
                  <p className="form-base__button__text text-uppercase">Book your free lesson</p> 
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6">
            <div className="main__poly">
            <div className="main__poly__paragraph">
                <p className="text-medium main__poly__text">
                  Click the button. Book a date/time that fits your schedule.
                </p> 
                <p className="text-medium main__poly__text">
                  Once the lesson has been booked, we will both get an email with the link to the lesson</p> 
                <p className="text-medium main__poly__text">
                  As easy ast that, so get your first free lesson now
                </p>
              </div>
            </div>              
          </div>

        </div>
      </div>
    </div>

  )
}

export default Main;