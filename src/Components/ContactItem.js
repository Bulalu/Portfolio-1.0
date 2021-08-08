import React from 'react';
import styled from 'styled-components';

function ContactItem({icon, title, contact1, contact2}) {
    return (
        <ContactItemStyled>
            <div className="left-content">
                {
                    icon
                }
            </div>
            <div className="right-content">
                <h6>{title}</h6>
                <p>{contact1}</p>
                <p>{contact2}</p>
            </div>

        </ContactItemStyled>
    )
}

const ContactItemStyled = styled.div`
    padding: 1.5rem 2rem;
    background-color: var(--background-dark-grey);
    display: flex;
    align-items: center;
    &:not(:last-child){
        margin-bottom: 2rem;
    }
    .right-content{
            h6{
                font-size: 1.2rem;
                color: var(--white-color);
            }
            p{
                padding: .2rem 0;
            }
        }
    .left-content{
        padding: 1.4rem;
        border: 1px solid var(--boarder-color);
        font-size: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 1.5rem;
        svg{
            font-size: 2rem;  
        }
   
    }
`;
export default ContactItem;