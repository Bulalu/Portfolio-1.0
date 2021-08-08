import styled from 'styled-components';
import React from 'react';
import Skills from '../Components/Skills';

function ProgressBar({title, width, text}) {
    return (
        <ProgessBarStyled>
           <h6>{title}</h6>
           <div className="progress-bar">
               <p>{text}</p>
               <div className="progress">
                   <span style={{width:width}}></span>

               </div>

           </div>
        </ProgessBarStyled>
    )
}

const ProgessBarStyled = styled.div`
    .progress-bar{
        display: flex;
        align-items: center;
        p{
            padding-right: 1rem;
        }
    .progress{
        position: relative;
        width: 100%;
        height: .4rem;
        background-color: var(--boarder-color);
        span{
            position: absolute;
            left: 0;
            bottom: 0;
            height: 100%;
            background-color: var(--primary-color);
        }
    }

    }
    
`;
export default ProgressBar;