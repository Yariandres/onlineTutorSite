import React from "react";

const cards = [ 
    { 
      header: "Spanish for all levels",
      body: "Spanish for all levels, from beginner, intermediate, to advanced learners",
    },
    { 
      header: "Exam Preparation",
      body: "Learning designed to increase your performance on tests"
    },
    { 
      header: "Business Spanish",
      body: "A one-of-a-kind lesson to help you do business in the Spanish-speaking worlds"
    }
  ];

const BenefitsCard = () => {   
  return (

    <div className="container">
      <div className="row">
        {cards.map((item, index) => (        
          <div key={index} className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
            <div  className="benefits__base">            
              <p className="text-medium text-uppercase benefits__title">
                {item.header}
              </p>
              <p className="text-medium text-center benefits__text">
                {item.body}
              </p>
            </div>          
          </div>    
        ))}
      </div>
    </div>
  )
}

export default BenefitsCard;