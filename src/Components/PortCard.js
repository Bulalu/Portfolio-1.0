import React from "react";
import styled from "styled-components";

function PortCard({ video, title, paragraph }) {
  return (
    <PortCardStyled>
      <div className="container">
        <iframe
          mute="1"
          width="305"
          height="270"
          src={video}
          allowFullScreen="true"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
        <h4> {title} </h4>
        <p>{paragraph}</p>
      </div>
    </PortCardStyled>
  );
}

const PortCardStyled = styled.div`
  background-color: var(--background-dark-grey);
  border-left: 0.2rem solid var(--boarder-color);
  border-right: 0.2rem solid var(--boarder-color);
  border-top: 0.4rem solid var(--boarder-color);
  border-bottom: 0.2rem solid var(--boarder-color);
  transition: all 0.4s ease-in-out;
  &:hover {
    border-top: 6px solid var(--primary-color);
    transform: translateY(5px);
  }
  .container {
    padding: 2.8rem;
    iframe {
      width: 100%;
      height: 50vh;
    }
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
export default PortCard;
