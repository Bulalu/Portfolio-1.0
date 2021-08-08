import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layout";
import ServiceCard from "./ServiceCard";
import Title from "./Title";
import dataScience from "../img/dataScience.jpg";
import AI from "../img/AI.jpg";
import webdev from "../img/webdev.jpg";

function ServicesSection() {
  return (
    <InnerLayout>
      <ServicesSectionStyled>
        <Title title={"Services"} span={"services"} />
        <div className="services">
          <ServiceCard
            image={webdev}
            title={"Web development"}
            paragraph={
              " Leverage the massive online platform, by Increasing Accesibility and Expanding Reach for your business. By having an online brand Identity, attracts traffic from all over the world. Get in touch and we can discuss this in detail"
            }
          />
          <div className="mid-card">
            <ServiceCard
              image={AI}
              title={"Web Scraping and Automation"}
              paragraph={
                "Do you have too many repetitive and time-consuming tasks ?, Do you need to pull data from particular source ?. I got you covered, I can make a bot/script that will automate this booring tasks for you, hence giving yourself more time to work on the important stuffs, or even take  time-off, why not!"
              }
            />
          </div>

          <ServiceCard
            image={dataScience}
            title={"Data Analysis and Machine Learning"}
            paragraph={
              " Get Valuable insights from data that you sometimes never knew existed, Get to know how different features of your business correlate to one another ?, Do you want to know what is the main drive for your business or vice-versa. With Data, most of your questions will be answered and you can use the result to make critical decision for your business."
            }
          />
        </div>
      </ServicesSectionStyled>
    </InnerLayout>
  );
}

const ServicesSectionStyled = styled.section`
  .services {
    margin-top: 4rem;
    display: flex;
    justify-content: space-between;
    .mid-card {
      margin: 0 1.2rem;
    }
  }
`;
export default ServicesSection;
