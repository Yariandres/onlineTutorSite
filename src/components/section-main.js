import React from 'react';

const Main = () => {
  return (
    <div className="main">
      <div className="container">
        <h1 className="text-center text-big main__heading">Learn Spanish</h1>     

        <div className="row">
          <div className="col-md-6">
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

          <div className="col-md-6">
            <div> text here</div>              
          </div>

        </div>
      </div>
    </div>

  )
}

export default Main;