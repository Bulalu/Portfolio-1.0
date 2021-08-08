import React from 'react';
import styled from 'styled-components';
import { InnerLayout, MainLayout } from '../styles/Layout';
import Title from './Title';
import CardMembershipIcon from '@material-ui/icons/CardMembership';

function Certify(){
    const certificate = <CardMembershipIcon/>
    return (
        <CertifyStyled>
            <Title title="Certificates" span="certificates" />
            <InnerLayout>

            </InnerLayout>
            
        </CertifyStyled>


    )
}

const CertifyStyled = styled.div`
    left: 0;
`;
export default Certify;
