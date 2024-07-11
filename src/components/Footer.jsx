import React from 'react'
import { Link } from 'react-router-dom'
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";

const Footer = () => {
  return (
    <>

      <hr />
      <footer className="footer">
        <div className="section footer-top">
          <div className="container">
            <div className="footer-brand">
              <Link to="/" className="logo">
                <span className="h3">intract.</span>
              </Link>
              <p className="footer-text">
                We are your personal guide for exploring web3 projects & earning 100x rewards
              </p>
            </div>

            <div className="footer_column">
              <div className="footer-list">
                <p className="title footer-list-title">Intract</p>
                <ul>
                  <li>
                    <Link to="/help-center" className="footer-link">Explore Quests
                    </Link>
                  </li>
                  <li>
                    <Link to="/privacy-policy" className="footer-link">
                      Comunities
                    </Link>
                  </li>
                  <li>
                    <Link to="/terms-and-condition" className="footer-link">Alpha Hub
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="footer-list">
                <p className="title footer-list-title" id="contact">
                  Earn
                </p>
                <ul>
                  <li><Link to="" className='footer-link'>Refer & Earn</Link></li>
                  <li><Link to="" className='footer-link'>Leaderboard</Link></li>
                  <li><Link to="" className='footer-link'>Achievements</Link></li>
                </ul>
              </div>

              <div className="footer-list">
                <p className="title footer-list-title" id="contact">
                  About
                </p>
                <ul>
                  <li><Link to="" className='footer-link'>Product Roadmap</Link></li>
                  <li><Link to="" className='footer-link'>Affiliate Program</Link></li>
                  <li><Link to="" className='footer-link'>Sign up Program</Link></li>
                  <li><Link to="" className='footer-link'>Growth Community</Link></li>
                  <li><Link to="" className='footer-link'>Blogs</Link></li>
                </ul>
              </div>

              <div className="footer-list">
                <p className="title footer-list-title" id="contact">
                  Support
                </p>
                <ul>
                  <li><Link to="" className='footer-link'>Help Center</Link></li>
                  <li><Link to="" className='footer-link'>Create your quest</Link></li>
                  <li><Link to="" className='footer-link'>Terms of Service</Link></li>
                  <li><Link to="" className='footer-link'>Privacy Policy</Link></li>
                  <li><Link to="" className='footer-link'>Community Guidelines</Link></li>
                </ul>
              </div>
            </div>

          </div>

          <div className="footer_disclaimer">
            <p className="footer-text">
              <span style={{ opacity: "0.75", color: "white" }}>Disclaimer: </span>
              Crypto Products, Virtual Digital Assets, and NFTs are unregulated and can be highly risky. There may be no regulatory recourse for any loss from such transactions. We advise the viewer to proceed with caution. Nothing in this website or any communication published by us amounts to, is intended to be, or should be construed as investment or purchase advice of any kind or financial advice or promotion under any applicable laws. Any decision made based on the content provided on this website or any communication published by us shall not be attributable to us.
            </p>
          </div>

          <div className="footer_disclaimer">
            <div className="footer_copyright">
              Created By
              <Link to="" className='footer_link'>Intract</Link>
            </div>
            <div className="footer_copyright">
              <div className="icons">
                <div className="social-links"><Link to=""><FaXTwitter className='link-color' /></Link></div>
                <div className="social-links"><Link to=""><FaDiscord className='link-color-discord' /></Link></div>
                <div className="social-links"><Link to=""><FaTelegram className='link-color' /></Link></div>
                <div className="social-links"><Link to=""><FaSpotify className='link-color-success' /></Link></div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
