import './App.css';
import aleaiLogo from './images/logoaleia.png'
import trait from './images/trait.png'
import danger from './images/icon 1.png'
import del from './images/icon 2.png'
import consulting from './images/icon 3.png'
import facebook from './images/facebook.png'
import linkedin from './images/linked in.png'
import twitter from './images/twitter.png'
import burgerMenu from './images/Burger Menu.png'

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
          <div className="header-tablet">
            <img src={aleaiLogo} alt="logoimgg" className="logo-tablet"></img>
            <div className="hamburger-icon">
              <img src={burgerMenu} alt="burger" className="burger-icon"></img>
            </div>
          </div>
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
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            </p>
            <div className="hangin flexcenter"><a href="#!" className="f-block-btn">Hang in there</a></div>
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
            <p>Lorem ipsum dolor sit amet,
               consectetur adipiscing elit,sed do 
               eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad 
                minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut 
                aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="section-block">
          <img src={del} alt="del" className="second-block-image"></img>
          <h5>Lorem ipsum</h5>
          <p>Lorem ipsum dolor sit amet,
               consectetur adipiscing elit,sed do 
               eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad 
                minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut 
                aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="section-block">
          <img src={consulting} alt="consulting" className="second-block-image"></img>
          <h5 className="consulting-title">Consulting</h5>
          <p>Lorem ipsum dolor sit amet,
               consectetur adipiscing elit,sed do 
               eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad 
                minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut 
                aliquip ex ea commodo consequat.
            </p>
          </div>
          </div>
          <div className="btn-second-block">
            <a className="btn-s-b-link" href="#!">It’s almost done, don’t give up</a>
        </div>
        </div>
        {/*---------------------end second block cards---------------------------------------*/}
        
      </content>
      {/*---------------------------------------------------footer---------------------------------------*/}
      <footer>
        <div className="footer-wrapper"> 
        {/*---------------------------------------------------footer-section1---------------------------------------*/}
          <div className="footer-section sec1 ">
            <img src={aleaiLogo} alt="footerimg" className="img-footer"></img>
          </div>
          {/*---------------------------------------------------footer-section2---------------------------------------*/}
          <div className="footer-section sec2 ">
            <div className="footer-email ">
              <p className="footer-email-p">Send us your email to stay tuned</p>
              <div className="email-inp">
                <input className="footer-email-input" type="email" placeholder="yourmail@email.com"></input>
                <span className="email-btn"><span>XOXO</span></span>
                </div>
            </div>
            <div className="footer-copyright ">
              <p className="footer-copyright">© 2020. All rights reserved.</p>
            </div>
          </div>
          {/*---------------------------------------------------footer-section3---------------------------------------*/}
          <div className="footer-section sec3">
            <p className="follow">Follow us</p>
            <div className="social-icons">
              <img src={facebook} alt="facebook" className="img-social"></img>
              <img src={linkedin} alt="linkedin" className="img-social"></img>
              <img src={twitter} alt="twitter" className="img-social"></img>
            </div>
          </div>
        </div>
      </footer>
      {/*-----------------------------------footer-tablet---------------------------------------------------------*/}
      <div className="tablet-footer">
        <div className="tablet-footer-wrapper">
          <div className="tablet-footer-part1">
          <div className="footer-email ">
              <p className="footer-email-p">Send us your email to stay tuned</p>
              <div className="email-inp">
                <input className="footer-email-input" type="email" placeholder="yourmail@email.com"></input>
                <span className="email-btn"><span>XOXO</span></span>
                </div>
            </div>
          </div>
          <div className="tablet-footer-part2">
            <div className="footer-section sec1 ">
            <img src={aleaiLogo} alt="footerimg" className="img-footer"></img>
            </div>
            <div className="footer-copyright ">
              <p className="footer-copyright">© 2020. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
