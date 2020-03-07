import React from "react";

const cards = [ 
    { 
      header: "Spanish for all levels",
      body: "Spanish for all levels, from beginner, intermediate, to advanced learners",
    },
    { 
      header: "Spanish for all levels",
      body: "Spanish for all levels, from beginner, intermediate, to advanced learners"
    },
    { 
      header: "Spanish for all levels",
      body: "Spanish for all levels, from beginner, intermediate, to advanced learners"
    }
  ];

const BenefitsCard = () => {   
  return (
    <div className="row">
      {cards.map((item, index) => (        
        <div className="col-sm-12 col-md-4">
          <div key={item.index} className="benefits__base">{item.header}</div>
          
        </div>    
      ))}
    </div>
  )
}

export default BenefitsCard;