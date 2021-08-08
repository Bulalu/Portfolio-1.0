import styled from "styled-components";
import React from "react";
import Skills from "../Components/Skills";
import Title from "../Components/Title";
import { InnerLayout, MainLayout } from "../styles/Layout";
import SmallTitle from "./SmallTitle";
import BusinessCenter from "@material-ui/icons/BusinessCenter";
import SchoolIcon from "@material-ui/icons/School";
import ResumeItem from "./ResumeItem";
import CardMembershipIcon from "@material-ui/icons/CardMembership";
import mml3 from "../img/mml3.PNG";
import py_AI from "../img/py-AI.PNG";
import D4E from "../img/D4E.PNG";
import py_project from "../img/py-project.PNG";

function ResumePage() {
  const briefcase = <BusinessCenter />;
  const school = <SchoolIcon />;
  const certificate = <CardMembershipIcon />;

  return (
    <ResumeStyled>
      <Title title={"Resume"} span={"resume"} />
      <InnerLayout>
        <div className="small-title">
          <SmallTitle icon={briefcase} title={"Working Experience"} />
        </div>
        <div className="resume-content">
          <ResumeItem
            year={"2020 - present"}
            title={"Freelance"}
            subTitle={"Upwork and Fiverr"}
            text={
              "Full time freelancer with the skills to meet the clients needs"
            }
          />
        </div>

        <div className="small-title">
          <SmallTitle icon={school} title={"Education"} />
        </div>
        <div className="resume-content">
          <ResumeItem
            year={"2020 - present"}
            title={"Software Development & Data Science"}
            subTitle={"Self-taught"}
            text={
              "Python, Django, Data-Analysis, JavaScript, Freelancing, Personal growth, Machine Learning, HTML&CSS, Bootstrap, React, ..."
            }
          />
          <ResumeItem
            year={"2019 - present"}
            title={"Bachelor Degree"}
            subTitle={"University of Dar-es-Salaam"}
            text={"Bsc.Agricultural Engineering and Mechanization"}
          />
          <ResumeItem
            year={"2017 - 2019"}
            title={"A-level Diploma"}
            subTitle={"Sengerema High School"}
            text={"Physics Geography and Mathematics "}
          />
          <ResumeItem
            year={"2012 - 2016"}
            title={"O-level Diploma"}
            subTitle={"Iyunga Technical Secondary School"}
          />
        </div>
        <div className="small-title">
          <SmallTitle icon={certificate} title={"Certificates"} />
        </div>
        <div className="image-list">
          <img src={mml3} alt="pca" />
          <img src={py_AI} alt="py_AI" />
          <img src={py_project} alt="py_project" />
          <img src={D4E} alt="pca" />
        </div>
      </InnerLayout>
    </ResumeStyled>
  );
}

const ResumeStyled = styled.section`
  .small-title {
    padding-bottom: 5rem;
    padding-top: 5rem;
  }

  .resume-content {
    border-left: 1px solid var(--boarder-color);
  }

  .image-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.5rem;
    @media screen and (max-width: 900px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  .image-list img {
    background-color: var(--background-dark-grey);
    border-left: 1px solid var(--boarder-color);
    border-right: 1px solid var(--boarder-color);
    border-top: 6px solid var(--boarder-color);
    border-bottom: 1px solid var(--boarder-color);
    transition: all 0.4s ease-in-out;
    width: 100%;
    &:hover {
      transform: translateY(13px);
      border-top: 6px solid var(--white-color);
    }
  }
`;
export default ResumePage;
