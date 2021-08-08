import React from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./Components/Sidebar"
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ResumePage from "./pages/ResumePage";
import PortfolioPage from "./pages/PortfolioPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <MainContentStyled>
         {/*  <div className="lines">
            <div className="line-1"></div>
            <div className="line-2"></div>
            <div className="line-3"></div>
            <div className="line-4"></div>
          </div> */}

          <Switch>
            <Route path="/" exact>
            <HomePage/>
            </Route>
            <Route path="/about" exact>
            <AboutPage/>
            </Route>
            <Route path="/resume" exact>
            <ResumePage/>
            </Route>
            <Route path="/portfolios" exact>
            <PortfolioPage/>
            </Route>
            <Route path="/blogs" exact>
            <BlogPage/>
            </Route>
            <Route path="/contact" exact>
            <ContactPage/>
            </Route>
          </Switch>
      </MainContentStyled>
    </div>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  
  .lines{
    position: absolute;
    min-height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    opacity: 0.4;
    .line-1, .line-2, .line-3, .line-4{
      width: 1px;
      min-height: 100vh;
      background-color: var(--boarder-color);
    }
  }
`;
export default App;
