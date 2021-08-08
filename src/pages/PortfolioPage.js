import React from "react";

import Title from "../Components/Title";
import { MainLayout, InnerLayout } from "../styles/Layout";

import styled from "styled-components";
import PortfolioSection from "../Components/PortfolioSection";

function PortfolioPage() {
  return (
    <MainLayout>
      <PortfolioStyled>
        <Title title={"Portfolio"} span={"Portfolio"} />
        <PortfolioSection />
      </PortfolioStyled>
    </MainLayout>
  );
}

const PortfolioStyled = styled.section``;
export default PortfolioPage;
