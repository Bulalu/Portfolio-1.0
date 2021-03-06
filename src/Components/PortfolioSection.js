import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layout";

import Title from "./Title";

import PortCard from "./PortCard";

function PortfolioSection() {
  return (
    <InnerLayout>
      <PortfolioSectionStyled>
        <div className="services">
          <PortCard
            video="https://www.youtube.com/embed/QJROYpPJSis"
            title={"Music Visualizer"}
            paragraph={
              "I really love music, so I made a program that my code could dance to. A music visualizer made with Vanilla JavaScript."
            }
          />

          <PortCard
            video="https://www.youtube.com/embed/wG7gGKtJQiA"
            title={"Blog made with Django"}
            paragraph={
              "I made this blog with Django, which handles the Back-end , while HTML & CSS, Bootstrap, and JavaScript handles the front-end. The specific goal for the blog is to document my journey on becoming the best software developer and data scientist I can be."
            }
          />

          <PortCard
            video="https://www.youtube.com/embed/8M_rpGHatSY"
            title={"E-commerce Site"}
            paragraph={
              "I made an e-commerce with Django, intergrated it with Braintree Payment Gateway, instant customer notification via email when an order is placed, the site can also be accesed using spanish or english"
            }
          />
        </div>
      </PortfolioSectionStyled>
    </InnerLayout>
  );
}

const PortfolioSectionStyled = styled.section`
  .services {
    margin-top: 4rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.5rem;

    @media screen and (max-width: 1050px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
export default PortfolioSection;
