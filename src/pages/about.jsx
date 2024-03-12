import "./about.css";
import React from "react";
import ConsoleText from "../components/consoletext";
import internet from "../assets/images/internet.png";
import ionic from "../assets/images/ionic.png";
import angular from "../assets/images/angular.png";
import java from "../assets/images/java.png";
import html from "../assets/images/html.png";
import python from "../assets/images/python.png";
import android from "../assets/images/android.png";
import desktop from "../assets/images/computer.png";
import mobile from "../assets/images/iphone.png";
import languages from "../assets/images/languages.png";
import trophy from "../assets/images/trophy.png";
import certificate from "../assets/images/certificate.png";

const about = () => {
  return (
    <section className="w-100 relative flex-column d-flex p-2  mt-16 gap-3 bg-black ">
      <ConsoleText
        words={["DeVel0pEr", "Software Engineer", "Pixel-wizard", "Caffinated"]}
        id="text"
        colors={["tomato", "rebeccapurple", "darkblue", "orange"]}
      />
      <hr />
      <div className="container-fluid text-white">
        <div className="row">
          <div className=" col-md-6 d-flex flex-column  justify-content-evenly align-items-center gap-5">
            <h1 className="headText p-3">
              <strong>Love to work in these domains...</strong>
            </h1>
            <div className="row row-cols-1 row-cols-md-1 row-cols-lg-3 gy-3 gx-5 p-3">
              <div className="col d-flex justify-content-center">
                <div className="card">
                  <img
                    src={internet}
                    alt="Web applications"
                    className="domainImage"
                  />
                  <p className=" nameText">Web applications</p>
                </div>
              </div>
              <div className="col d-flex justify-content-center">
                <div className="card">
                  <img
                    src={mobile}
                    alt="Mobile applications"
                    className="domainImage"
                  />
                  <p className=" nameText">Mobile applications</p>
                </div>
              </div>
              <div className="col d-flex justify-content-center">
                <div className="card">
                  <img
                    src={desktop}
                    alt="Desktop applications"
                    className="domainImage"
                  />
                  <p className=" nameText">Desktop applications</p>
                </div>
              </div>
            </div>
          </div>
          <div className="  col-md-6 d-flex flex-column justify-content-evenly align-items-center gap-5">
            <h1 className="headText p-3">
              <strong>Languages that I have worked on...</strong>
            </h1>
            <div className="row d-flex justify-content-evenly row-cols-2 row-cols-md-3 row-cols-lg-3 g-3">
              <div className="col d-flex justify-content-center">
                <div className="card">
                  <img
                    src={angular}
                    alt="Angular"
                    className="domainImage imageSize"
                    title="Angular development"
                  />
                </div>
              </div>
              <div className="col d-flex justify-content-center">
                <div className="card">
                  <img
                    src={ionic}
                    alt="Ionic"
                    className="domainImage imageSize"
                    title="Ionic development"
                  />
                </div>
              </div>
              <div className="col d-flex justify-content-center">
                <div className="card">
                  <img
                    src={android}
                    alt="Android"
                    title="
                      Android development"
                    className="domainImage imageSize"
                  />
                </div>
              </div>
              <div className="col d-flex justify-content-center">
                <div className="card">
                  <img
                    src={html}
                    alt="HTML"
                    className="domainImage imageSize"
                    title="HTML|CSS|Javascript development"
                  />
                </div>
              </div>
              <div className="col d-flex justify-content-center">
                <div className="card">
                  <img
                    src={java}
                    alt="Java"
                    className="domainImage imageSize"
                    title="Java development"
                  />
                </div>
              </div>
              <div className="col d-flex justify-content-center">
                <div className="card">
                  <img
                    src={python}
                    alt="Python"
                    className="domainImage imageSize"
                    title="Python development"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row gap-5 p-3 pt-4">
          <div className="pricing-table col ">
            <div className="head">
              <h4 className="title">Languages</h4>
            </div>
            <div className="content">
              <div className="price">
                <img className="" src={languages} alt="" />
              </div>
              <ul>
                <li>Marathi (Native)</li>
                <li>Hindi (Native)</li>
                <li>English (Expert)</li>
              </ul>
            </div>
          </div>
          <div className="pricing-table col">
            <div className="head">
              <h4 className="title">Awards</h4>
            </div>
            <div className="content">
              <div className="price ">
                <img src={trophy} alt="" />
              </div>
              <ul>
                <li>Persistent System Bravo: Top Software Developer</li>
                <li>GIZ Massiha: India-German Software Collaboration</li>
              </ul>
            </div>
          </div>
          <div className="pricing-table col">
            <div className="head">
              <h4 className="title">Certificates</h4>
            </div>
            <div className="content">
              <div className="price">
                <img src={certificate} alt="" />
              </div>
              <ul>
                <li>Angular2+</li>
                <li>Ionic</li>
                <li>Android App Development</li>
                <li> Python Bootcamp Development</li>
                <li>Responsive Framework</li>
                <li>AWS Fundamentals</li>
                <li>Django for Python</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default about;
