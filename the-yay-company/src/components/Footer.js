import React from "react";

function Footer() {
  return (
    <footer>
      <div className="footer__Content__Container">
        <ul className="footer__Icon__Container">
          <li>
            <a href="/" className="footer__vimeo">
              <i class="fab fa-vimeo-v"></i>
            </a>
          </li>
          <li>
            <a href="/" className="footer__youtube">
              <i class="fab fa-youtube"></i>
            </a>
          </li>
        </ul>
        <div className="footer__text">
          <p className="footer__mail">hello@yay.com</p>
          <p className="footer__copyright">Copyright 2020</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
