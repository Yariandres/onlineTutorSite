import React from 'react';

import icon1 from '../images/icons/1.png';
import icon2 from '../images/icons/2.png';
import icon3 from '../images/icons/3.png';
import icon4 from '../images/icons/4.png';

const icons = [ 
  {
    icon: icon1,
    text: "Reading"
  },
  {
    icon: icon2,
    text: "Speaking"
  },
  {
    icon: icon3,
    text: "Hearing"
  },
  {
    icon: icon4,
    text: "Writing"
  }
]

const Icons = () => {
  return (    
    <div className="row">
        {icons.map((el, index) => (
          <div className="col text-center">
            <img className="features__icons" src={el.icon} alt="icon"/>
            <p className="features__text mt-4">{el.text}</p>
          </div>
        ))}     
    </div>
  );
}

export default Icons;