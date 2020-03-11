import React from 'react';
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const Icons = () => {
  const data = useStaticQuery(graphql`
    query icons {
      icons: allFile(filter: {relativeDirectory: {eq: "icons"}}) {
        nodes {
          id
          childImageSharp {
            fixed(width: 150, height: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }    
  `);

  return (
    <div className="icons">
      <div className="row">
        {data.icons.nodes.map(icon => (
          <div key={icon.id} className="col-md-3">
            <div className="icons__wrapper">
              <Img className="icons__image" key={icon.id} fixed={icon.childImageSharp.fixed} />
            </div>
          </div>
        ))}        
      </div>
      
      <div className="row">
        <div className="col-md-3">
          <p className="text-center text-medium">Reading</p>
        </div>
        <div className="col-md-3">
          <p className="text-center text-medium">Speaking</p>
        </div>
        <div className="col-md-3">
          <p className="text-center text-medium">Hearing</p>
        </div>
        <div className="col-md-3">
          <p className="text-center text-medium">Writing</p>
        </div>
      </div> 
    </div>
  );
}

export default Icons;