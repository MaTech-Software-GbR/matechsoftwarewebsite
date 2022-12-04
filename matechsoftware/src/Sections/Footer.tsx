import React from 'react';

const Footer: React.FC = () => {
  return (
    <div>
      <footer>
        <div className="row">
          <div className="col-full">
            <div className="footer-logo">
              <a className="footer-site-logo" href="#0">
                <img src={require('../images/logo.png')} />
              </a>
            </div>

            <ul className="footer-social">
              <li>
                <a href="#0">
                  <i className="im im-linkedin" aria-hidden="true"></i>
                  <span>Linkedin</span>
                </a>
              </li>
              <li>
                <a href="#0">
                  <i className="im im-mail" aria-hidden="true"></i>
                  <span>Email</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="row footer-bottom">
          <div className="col-twelve">
            <div className="copyright">
              <span>© Copyright MaTech Software 2022</span>
            </div>
            <div className="copyright">
              <span>
                <a href="./impressum.html">Impressum</a>
              </span>
              <span>
                <a href="./datenschutz.html">Datenschutz</a>
              </span>
            </div>

            <div className="go-top">
              <a className="smoothscroll" title="Back to Top" href="#top">
                <i className="im im-arrow-up" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
