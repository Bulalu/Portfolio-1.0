import React from "react";
import styled from "styled-components";
import { MainLayout, InnerLayout } from "../styles/Layout";
import Title from "./Title";
import ProgressBar from "./ProgessBar";

function Skills() {
  return (
    <SkillsStyled>
      <Title title={"My Skills "} span={"My Skills"} />
      <InnerLayout>
        <div className="skills">
          <ProgressBar title={"Python"} width={"90%"} text={"90%"} />
          <ProgressBar title={"Django"} width={"95%"} text={"95%"} />
          <ProgressBar title={"JavaScript"} width={"70%"} text={"70%"} />
          <ProgressBar title={"HTML & CSS"} width={"75%"} text={"75%"} />
          <ProgressBar title={"Data Analysis"} width={"60%"} text={"60%"} />
          <ProgressBar title={"Machine Learning"} width={"60%"} text={"60%"} />
          <ProgressBar
            title={"Web Scraping & Automation"}
            width={"90%"}
            text={"90%"}
          />
          <ProgressBar title={"React.js"} width={"50%"} text={"50%"} />
          <ProgressBar title={"Communication"} width={"80%"} text={"80%"} />
          <ProgressBar title={"Team Work"} width={"70%"} text={"70%"} />
        </div>
      </InnerLayout>
    </SkillsStyled>
  );
}

const SkillsStyled = styled.section`
  .skills {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 2rem;
    grid-column-gap: 3rem;
    @media screen and (max-width: 700px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
export default Skills;
