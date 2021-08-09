import React from "react";
import styled from "styled-components";

import InstagramIcon from "@material-ui/icons/Instagram";
import GithubIcon from "@material-ui/icons/GitHub";
import YoutubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Typical from "react-typical";
function HomePage() {
  return (
    <HomePageStyled>
      <div className="typography">
        <div className="typical_">
          <h1>
            Hey there, <span>Welcome to My Site.</span>
          </h1>
          <p>
            I'm
            <Typical
              loop={Infinity}
              wrapper="b"
              steps={[
                " a Python developer ",
                1000,
                " a data scientist(upcoming)",
                1000,
                " a Freelancer",
                1000,
                " an Entrepreneur",
                1000,
                " Young, Hungry and Ready",
                1000,
              ]}
            />
          </p>
        </div>
        <div className="icons">
          <a href="https://github.com/Bulalu" className="icon i-github">
            <GithubIcon />
          </a>
          <a
            href="https://www.instagram.com/elisha_bulalu/"
            className="icon i-instagram"
          >
            <InstagramIcon />
          </a>
          <a
            href="www.linkedin.com/in/elisha-bulalu"
            className="icon i-linkedIn"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </HomePageStyled>
  );
}
const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;

  .particle-con {
    position: absolute;
  }
  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;

    .typical_ {
      h1 {
        padding: 0.8rem;
      }
      p {
        padding-bottom: 0.5rem;
        font-size: 2rem;
        color: #c4c1c0;
      }
    }

    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      .icon {
        border: 2px solid var(--boarder-color);
        display: inline-block;
        border-radius: 50%;
        transition: all 0.4s ease-in-out;
        cursor: pointer;
        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
        svg {
          margin: 0.5rem;
        }
      }
    }
  }
`;
export default HomePage;
