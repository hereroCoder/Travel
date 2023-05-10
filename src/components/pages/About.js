import { FaFacebook, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";
import "./styles/About.css";
import wave from "../img/wave.jpeg";

function About() {
  return (
    <section className="team-page-section">
      <div className="container">
        <div className="sec-title centered">
          <div className="title">Our Team</div>
          <div className="separator"><span></span></div>
          <h2>Elena </h2>
        </div>

        <div className="row clearfix">
          <div className="team-block col-lg-4 col-md-8 col-sm-12">
            <div
              className="inner-box wow fadeInLeft"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <ul className="social-icons">
                <li>
                  <a href="#"><FaFacebook /></a>
                </li>
                <li>
                  <a href="#"><FaTwitter /></a>
                </li>
                <li>
                  <a href="#"><FaInstagram /></a>
                </li>
                <li>
                  <a href="#"><FaLinkedinIn /></a>
                </li>
              </ul>
              <div className="image">
                <a href="#">
                  <img src={wave} alt="" />
                </a>
              </div>
              <div className="lower-content">
                <h3>
                  <a href="#">Info/About</a>
                </h3>
                <div className="designation">Hi there :) </div>
              </div>
            </div>
          </div>

          {/* Repeat the above structure for the remaining team blocks */}
        </div>
      </div>
    </section>
  );
}

export default About;