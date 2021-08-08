import React from "react";
import styled from "styled-components";

import desk from "../img/desk2.jpg";
import PrimaryButton from "./PrimaryButton";
function ImageSection() {
  return (
    <ImageSectionStyled>
      <div className="left-content">
        <img src={desk} alt="" />
      </div>
      <div className="right-content">
        <h4>
          {" "}
          I am <span> Elisha Bulalu</span>
        </h4>

        <p className="paragraph">
          I am Back-end Developer and Data Scientist. I can use these skills and
          technology to bring value to your business or company by creating
          software systems and drawing insights from Data. This can help you in,
          making important decisions concerning your business, improving
          customer experience and scaling your market, increasing
          sales/revenues.
          <p>
            Feel free to contact me, and we can discuss the scope of your
            project.
          </p>
        </p>
        <div className="about-info">
          <div className="info-title">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Location</p>
            <p>Services</p>
          </div>
          <div className="info">
            <p>: Elisha Bulalu</p>
            <p>: 21</p>
            <p>: Tanzanian</p>
            <p>: English/Swahili</p>
            <p>: Dar-es-Salaam, Tanzania</p>
            <p>: Freelance</p>
          </div>
        </div>
      </div>
    </ImageSectionStyled>
  );
}

const ImageSectionStyled = styled.div`
  margin-top: 5rem;
  display: flex;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    .left-content {
      margin-bottom: 2rem;
    }
  }
  .left-content {
    width: 100%;
    img {
      object-fit: contain;
      height: fit-content;
    }
  }
  .right-content {
    padding-left: 2rem;

    h4 {
      font-size: 2rem;
      color: var(--white-color);
      span {
        font-size: 2rem;
      }
    }
    .paragraph {
      padding: 1rem 0;
      p {
        padding-top: 1rem;
        font-style: italic;
        font-weight: 700;
      }
    }
    .about-info {
      display: flex;
      padding-bottom: 1.5rem;
      .info-title {
        padding-right: 2rem;
      }
      .info-title,
      .info {
        p {
          padding: 0.4rem 0;
        }
      }
    }
  }
`;

export default ImageSection;
