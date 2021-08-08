import React, { Component } from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';

function Siderbar() {
    return (
        <SiderbarStyled>
            <Navigation /> 
        </SiderbarStyled>
    )
}

const SiderbarStyled = styled.div`
    width: 16.3rem;
    position: fixed;
    height: 100vh;
    background-color: var(--sidebar-dark-color);

`;
export default Siderbar;
