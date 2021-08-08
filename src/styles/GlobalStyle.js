import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
    --primary-color: #Bfc3c4;
    --secondary-color: #000000;
    --background-dark-color: #000000;
;
    --background-dark-grey: #2B2B2B;
    --boarder-color: #2e344e;
    --background-light-color: #F1F1F1;
    --background-light-color-2: rgba(3,127,255,.3);
  
    --white-color: #FFF;
    --font-light-color: #657090;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #0c0c0c;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #383838;
}
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box; 
        list-style: none;
        text-decoration: none;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 1,2rem;
    }

    body{
        background-color: var(--background-dark-color);
        color:  var(--font-light-color);
    }
    a{
        font-family: inherit;
        color: inherit;
        font-size: inherit;
        font-size: 1rem ;
    }

    h1{
        font-size: 3rem;
        color: var(--white-color);
        span{
            font: 3rem;
        }
    }
    span{
        color: var(--primary-color)
    }

    h6{
        color: var(--white-color);
        font-size: 1.2rem;
        padding-bottom: .6rem;
    }

// Global media queries
// NAv toggler
.ham-burger-menu{
        position: absolute;
        right: 10%;
        top: 3%;
        display: none;
        z-index: 15;
        svg{
            font-size: 3rem;
        }
    }
    .nav-toggle{
        transform: translateX(0);
        z-index: 20;
    }
    @media screen and (max-width: 1200px) {
        .ham-burger-menu{
            display: block;
        }
  }
`;

export default GlobalStyle;
