import React from 'react'
import styled from 'styled-components';
import ParticleBackground from '../Components/ParticleTheme';
import InstagramIcon from '@material-ui/icons/Instagram';
import GithubIcon from '@material-ui/icons/GitHub';
import YoutubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function HomePage() {
    return (
        <HomePageStyled>
            <div className="particle-con">
                <ParticleBackground/>   
            </div>
         
         <div className="typography">
            <h1>Hi I am  <span>Elisha Bulalu</span></h1>
            <p>
            I am self taught Software developer and Data Scientist, built for using tech to change lives and make myself filfy rich

            </p>
             <div className="icons">
                   
                 <a href="" className="icon i-github">
                     <GithubIcon/>
                 </a>
                 <a href="" className="icon i-instagram">
                     <InstagramIcon/>
                 </a>
                 <a href="" className="icon i-linkedIn">
                     <LinkedInIcon/>
                 </a>
             </div> 
         </div>  
        </HomePageStyled>
    )
}
const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;

    .particle-con{
        position: absolute;
    }
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center ;
        width: 80%;
        
        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--boarder-color);
                display: inline-block;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color)
                } 
                &:not(:last-child){
                    margin-right: 1rem;
                    
                }
                svg{
                    margin: .5rem;
                }
            }
        }
    
    }

`;
export default HomePage;