import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">We The Developers</h1>
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
              src="../../img/ubt-logo.png"
              alt="Full logo"
              class="footer__logo"
            />
          </div>
          <div class="row">
            <div class="col-1-of-2">
              <div class="footer__navigation">
                <ul class="footer__list">
                  <li class="footer__item">
                    <a href="#" class="footer__link">
                      Company
                    </a>
                  </li>
                  <li class="footer__item">
                    <a href="#" class="footer__link">
                      Contact us
                    </a>
                  </li>
                  <li class="footer__item">
                    <a href="#" class="footer__link">
                      Careers
                    </a>
                  </li>
                  <li class="footer__item">
                    <a href="#" class="footer__link">
                      Privacy
                    </a>
                  </li>
                  <li class="footer__item">
                    <a href="#" class="footer__link">
                      Terms
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-1-of-2">
              <p class="footer__copyright">
                Built by{" "}
                <a
                  href="https://www.ubt-uni.net/sq/ballina/"
                  class="footer__link"
                  target="_blank"
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
