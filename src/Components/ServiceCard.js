import React from "react";
import styled from "styled-components";

function ServiceCard({ image, title, paragraph }) {
  return (
    <ServiceCardStyled>
      <div className="container">
        <img src={image} alt="" />
        <h4> {title} </h4>
        <p>{paragraph}</p>
      </div>
    </ServiceCardStyled>
  );
}

const ServiceCardStyled = styled.div`
  background-color: var(--background-dark-grey);
  border-left: 1px solid var(--boarder-color);
  border-right: 1px solid var(--boarder-color);
  border-top: 6px solid var(--boarder-color);
  border-bottom: 1px solid var(--boarder-color);
  transition: all 0.4s ease-in-out;
  &:hover {
    border-top: 6px solid var(--primary-color);
    transform: translateY(5px);
  }
  .container {
    padding: 1.2rem;
    h4 {
      color: var(--white-color);
      font-size: 1.6rem;
      padding: 1rem 0;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        bottom: 0;

        width: 3.5rem;
        height: 3px;
        background-color: var(c);
        border-radius: 10px;
        left: 0;
      }
    }
    p {
      padding: 0.8rem 0;
    }
  }
`;
export default ServiceCard;
