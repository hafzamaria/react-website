import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { Button } from '../Styles/Button';
import { FaDiscord,FaInstagram,FaYoutube} from "react-icons/fa";
const Footer = () => {
  return (
    <Wrapper>
    <section className="contact-short">
      <div className='grid grid-two-column'>
        <div>
          <h3>Ready to get started?</h3>
          <h3>Talk to us today</h3>
        </div> 
        
        <div>
          <NavLink to='/'>
            <Button>Get Started</Button>
          </NavLink>
        </div>
      </div>
    </section>
    {/* footer section */}
    <footer>

      <div className='container grid grid-four-column'>
        <div className='footer-about'>
          <h3>Hafza Maria</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
        </div>
        {/* 2nd column */}
        <div className='footer-subscribe'>
          <h3>Subscribe to get important updates</h3>
         <form action='#'>
          <input type="email" required autoComplete='off' placeholder='Email'/><br/>
          <input type='submit' value='Subscribe' />
         </form>
        </div>
        {/* 3rd column */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="footer-social--icons">
            <div>
           < FaDiscord className='icons' />
            </div>
            <div>
           < FaInstagram className='icons' />
            </div>
            <div>
           < FaYoutube className='icons' />
            </div>
          </div>
        </div>
        </div>
      
    </footer>
    </Wrapper>
  )
}
const Wrapper = styled.section`
.contact-short {
  max-width:60vw;
  margin: auto;
  padding:5rem 10rem;
  background-color:${({theme})=> theme.colors.bg};
  border-radius:1rem;
  box-shadow: ${({theme})=> theme.colors.shadowSupport};
  transform:translateY(50%);


  .grid{
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
  }
 

  .grid div:last-child{
    justify-self:end;
    align-self:center;
  }
}
footer{
  padding:14rem 0 9rem 0;
  background-color:${({theme})=> theme.colors.footer_bg};

  h3{
    color:${({theme})=> theme.colors.hr};
    margin-bottom:2.4rem;
  }
  p{
    color:white;
  }
  .footer-social--icons{
    display:flex;
    gap:2rem;

    div{
      padding:1rem;
      border-radius: 50%;
      border: 2px solid white;

      .icons{
        color:white;
       font-size:2.4rem;
       position:relative
       cursor:pointer;
      }
    }
  }
}
`;

export default Footer
