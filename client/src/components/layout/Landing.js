import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import ubtLogo from "../../img/ubt-logo.png";

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large landing-h1">We The Developers</h1>
          <p className="lead">
            Meet new people, who share the same passion as you do!
          </p>
          <div className="buttons">
            <Link to="/register" className="btn btn-primary btn-animation">
              Sign Up
            </Link>
            <Link to="/login" className="btn btn-light btn-animation">
              Login
            </Link>
          </div>
        </div>
        <div className="footer">
          <div class="footer__logo-box">
            <img
              src={ubtLogo}
              alt="Full logo"
              class="footer__logo"
            />
          </div>
          <div className="row">
            <div className="col-1-of-2">
              <div className="footer__navigation">
                <ul className="footer__list">
                  <li className="footer__item">
                    <a href="#" className="footer__link">
                      Company
                    </a>
                  </li>
                  <li className="footer__item">
                    <a href="#" className="footer__link">
                      Contact us
                    </a>
                  </li>
                  <li className="footer__item">
                    <a href="#" className="footer__link">
                      Careers
                    </a>
                  </li>
                  <li className="footer__item">
                    <a href="#" className="footer__link">
                      Privacy
                    </a>
                  </li>
                  <li className="footer__item">
                    <a href="#" className="footer__link">
                      Terms
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-1-of-2">
              <p className="footer__copyright">
                Built by{" "}
                <a
                  href="https://www.ubt-uni.net/sq/ballina/"
                  className="footer__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Univeristy for Business and Technology
                </a>{" "}
                students for Lab Course 2 course. Copyright &copy; by UBT
                Students and their mentors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
