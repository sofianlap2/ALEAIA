import './App.css';
import aleaiLogo from './images/logoaleia.png'
import trait from './images/trait.png'
import danger from './images/icon 1.png'
import del from './images/icon 2.png'
import consulting from './images/icon 3.png'
import facebook from './images/facebook.png'
import linkedin from './images/linked in.png'
import twitter from './images/twitter.png'

function App() {
  return (
    <div className="App">
      {/*-----------------------------------header--------------------------------------------- */}
      <header className="flexcenter">
        {/*-----------------------------------logo--------------------------------------------- */}
        <img src={aleaiLogo} alt="logo" className="logo-aleia"></img>
        {/*-----------------------------------navbar--------------------------------------------- */}
        <div className="navbar">
          <nav>
            <ul>
              <li>About us</li>
              <li>Services</li>
              <li>Careers</li>
              <li className="navbar-functions">Functions</li>
            </ul>
          </nav>
        </div>
        {/*-----------------------------------contactus--------------------------------------------- */}
        <div className="header-options flexcenter">
          <div className="contactus-btn flexcenter"><span className="contact-us">Contact us</span></div>
          <span className="language">FR</span>
        </div>
      </header>
      {/*-----------------------------------content--------------------------------------------- */}
      <content>
        <div className="info-header-bg">
          <div className="info-header">
            <h1 className="info-title">BE CAREFUL TO RESPECT THE DESIGN!</h1>
            <p className="info-desc">Technologies : HTML CSS JS<br/>
              Détail des specs front : Zeplin<br/>
              3 maquettes desktop, tablet et mobile, 2 breakpoints<br/>
              Desktop/ tablet :  1200px (Desktop) / 1199 tablet<br/>
              Tablet / Mobile : 600px (Tablet) / 599 (mobile)<br/>
            </p>
            <div className="discover"><a href="#!" className="btn-discover">Let's discover</a></div>
          </div>
        </div>
        {/*-----------------------------------firstblock-content--------------------------------------------- */}
        <div className="first-block-container flexcenter">
          <div className="first-block-wrapper ">
            <div className="f-block-title">Good luck about this block. Don’t forget to respect the different breakpoints</div>
            <div className="f-block-content">
            <p className="f-content-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
               Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in <br/>voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            </p>
            <div className="hangin flexcenter"><a href="#!" className="f-block-btn">hang in there</a></div>
          </div>
          </div>
        </div>
         {/*-----------------------------------endof-firstblock-content--------------------------------------------- */}
        <div className="breakpoint">
          <img src={trait} className="trait" alt="breakpoint"></img>
        </div>
        <div className="second-block-title">
          <p className="s-block-t">Don’t forget about the spacing! It’s very important</p>
        </div>
        <div className="second-block-container">
          <div className="second-block-wrapper">
            {/*-------------------second-block-cards------------------------------------------------*/}
          <div className="section-block">
            <img src={danger} alt="danger" className="second-block-image"></img>
            <h5>Lorem ipsum</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
               sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
               Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="section-block">
          <img src={del} alt="del" className="second-block-image"></img>
          <h5>Lorem ipsum</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
               sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
               Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="section-block">
          <img src={consulting} alt="consulting" className="second-block-image"></img>
          <h5>Consulting</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
               sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
               Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          </div>
          <div className="btn-second-block">
            <a className="btn-s-b-link" href="#!">It’s almost done, don’t give up</a>
        </div>
        </div>
        {/*---------------------end second block cards---------------------------------------*/}
        
      </content>
      <footer>
        <div className="footer-wrapper flexcenter"> 
          <div className="footer-section">
            <img src={aleaiLogo} alt="footerimg" className="img-footer"></img>
          </div>
          <div className="footer-section">
            <div className="footer-email">
              <p className="footer-email-p">Send us your email to stay tuned</p>
              <input className="footer-email-input" type="email"></input>
            </div>
            <div className="footer-copyright">
              <p className="footer-copyright">© 2020. All rights reserved.</p>
            </div>
          </div>
          <div className="footer-section">
            <p className="follow">Follow us</p>
            <div className="social-icons">
              <img src={facebook} alt="facebook" className="img-social"></img>
              <img src={linkedin} alt="linkedin" className="img-social"></img>
              <img src={twitter} alt="twitter" className="img-social"></img>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
