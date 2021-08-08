import React from 'react';
import Skills from '../Components/Skills';
import Title from '../Components/Title';
import { InnerLayout, MainLayout } from '../styles/Layout';
import Resume from '../Components/Resume'
import Certify from '../Components/Certificates';

function ResumePage() {
    return (
        <MainLayout>
            <Skills/>
            <Resume/>
            
        </MainLayout>
    )
}

export default ResumePage;