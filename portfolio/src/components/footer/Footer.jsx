import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Dida</h1>

        <ul className="footer__list">
          <li>
            <a href="" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/handiandida/"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-instagram"></i>
          </a>

          <a
            href="https://twitter.com/didahandian1"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-twitter"></i>
          </a>

          <a
            href="https://github.com/handiandida"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-github"></i>
          </a>
          <a
            href="https://github.com/handiandida"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-youtube"></i>
          </a>
          <a
            href="https://github.com/handiandida"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-facebook"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Dida Handian. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
