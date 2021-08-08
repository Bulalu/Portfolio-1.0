import styled from 'styled-components';
import React from 'react';
import { MainLayout, InnerLayout} from '../styles/Layout'
import Title from '../Components/Title';
import PrimaryButton from '../Components/PrimaryButton';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ContactItem from '../Components/ContactItem';


function ContactPage() {
    const phone = <PhoneIcon/>
    const email = <EmailIcon/>
    const location = <LocationOnIcon/>
    return (
        <MainLayout>
            <Title title={'Contact'} span={'Contact'}/>
            <ContactPageStyled>
            <InnerLayout className={'contact-section'}>
                <div className="left-content">
                    <div className="contact-title">
                        <h4> Get In Touch</h4>
                    </div>
                    <form className="form">
                        <div className="form-field">
                            <label htmlFor="name" >Enter your name*</label>
                            <input id="name" type="text" />
                        </div>
                        <div className="form-field">
                            <label htmlFor="email" >Enter your email*</label>
                            <input id="email" type="text" />
                        </div>
                        <div className="form-field">
                            <label htmlFor="subject">Enter a subject*</label>
                            <input id="subject" type="text" />
                        </div>
                        <div className="form-field">
                            <label htmlFor="text-area">Enter your message</label>
                            <textarea name="textarea" id="textarea" cols="30" rows="10"></textarea>
                        </div>
                        <div className="form-field">
                            <PrimaryButton title={"send email"}/>
                        </div>
                    </form>
                </div>
                <div className="right-content">
                    <ContactItem title={"Phone"} icon={phone} contact1={"+255-782477515"} contact2={"+255-654893784"}/>
                    <ContactItem title={"Email"} icon={email} contact1={"elishabulalu031@gmail.com"} />
                    <ContactItem title={"Address"} icon={location} contact1={"Dar-es-Salaam, Tanzania"} />
                   
                </div>
            </InnerLayout>
            </ContactPageStyled>
        </MainLayout>
    )
}

const ContactPageStyled = styled.section`

    .contact-section{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        .right-content{
            display: flex;
            
            flex-direction: column;
        }
        .contact-title{
            h4{
                color: var(--white-color);
                padding: 1rem 0;
                font-size: 1.8rem;

            }
        }
        .form{
            .form-field{
                margin-top: 2rem;
                position: relative;
                width:100%;
                label{
                    position: absolute;
                    left: 20px;
                    top: -19px;
                    display: inline-block;
                    background-color: var(--background-dark-color);
                    padding: 0 .5rem;
                    color: inherit;

                }
                input{
                    border: 1px solid var(--boarder-color);
                    outline: none;
                    background: transparent;
                    height: 40px;
                    padding:0 15px;
                    width: 100%;
                    color: inherit;
                }
                textarea{
                    background-color: transparent;
                    border: 1px solid var(--boarder-color);
                    outline: none;
                    color: inherit;
                    width: 100%;
                    padding: .8rem 1rem ;
                }
            }
        }
    }
`;
export default ContactPage;