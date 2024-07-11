import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import background from "../../../src/assets/intract-background.png";
import academy from "../../../src/assets/academy.gif";

const Home = () => {
  return (
    <section className="home">
      <img src={background} className='home_back' alt="home" />
      <div className="home-container">
        <div className="home-image">
          <img src={academy} className='gif-academy' alt="" />
        </div>
        <div className="home-para">
          <p><span>Intract users</span> have together made more than <span>$100 million</span> in web3.
            Join them and <span>learn how to earn crypto!</span></p>
          <div className="home_start_link">
            <div className="primary_button">
              <div className="text_with_icon">
                <span>Get started</span>
                <FaLongArrowAltRight style={{color: "var(--White-80, rgba(255, 255, 255, .8))"}}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
