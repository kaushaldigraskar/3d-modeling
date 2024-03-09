import "./projects.css";
import React, { useEffect, useState } from "react";
const projects = () => {
  return (
    <section className="w-100 h-full relative flex-column d-flex p-2 mt-10 gap-3 bg-black">
      <div className="w-100 height-100 relative d-flex flex-column justify-center align-items-center">
        <video
          autoPlay
          loop
          muted
          className="w-100 height-100 object-fit-cover "
          src="
        ../assets/galaxy.mp4"
        ></video>
        <div className="position-absolute top-50 left-50 w-100 hieght-100 ">
          <h1 className=" font-poppins font-semibold centerText">
            My Work Experience
          </h1>
        </div>
      </div>
      <div className="d-flex w-100">
        <div className="container-fluid">
          <div className="row gap-4 ">
            <div className="col w-100 ">
              <div className="flex justify-start">
                <div className="experiance-box h-100 ">
                  <div className="p-2">
                    <h2 className=" font-semibold mb-1">
                      We Agile Software Solutions
                    </h2>
                    <p className=" mb-1 ">
                      Software Engineer, Pune, Maharashtra
                    </p>
                    <p className=" mb-3 ">08/2022 - Present</p>
                    <p className="font-semibold mb-1 ">
                      Client:
                      <span className="font-bold"> DeepNorth Inc.</span>
                    </p>
                    <ul className="list-disc ml-6 ">
                      <li className=" mb-1">
                        User-Centric Development: Employing meticulous UX design
                        and logical coding to optimize user satisfaction.
                      </li>
                      <li className=" mb-1">
                        Strategic Time Management: Meeting product requirements
                        within tight deadlines while emphasizing their strategic
                        impact.
                      </li>
                      <li className=" mb-1">
                        Data Visualization: Creating analytical dashboards for
                        insightful data interpretation and visualization.
                      </li>
                      <li className=" mb-1">
                        Dynamic Reporting: Converting raw analytical data into
                        professional-grade PDFs and dynamic HTML reports.
                      </li>
                      <li className=" mb-1">
                        Interactive Map Solutions: Implementing SVG map
                        interactions for precise location mapping.
                      </li>
                      <li className=" mb-1">
                        Real-Time Data Interpretation: Utilizing Google Maps for
                        real-time data visualization and analysis.
                      </li>
                      <li className=" mb-1">
                        Tools and Technologies Proficiency: Proficient in
                        ANGULAR, VISUAL STUDIO, ANGULAR MATERIAL, GIT, and
                        Ng-Apex charts, ensuring efficient project delivery.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col w-100 ">
              <div className="experiance-box h-100">
                <div className="p-2">
                  <h2 className="text-lg font-semibold mb-1 ">
                    Persistent Systems
                  </h2>
                  <p className=" mb-1 ">Software Engineer, Pune, Maharashtra</p>
                  <p className=" mb-3 ">06/2021 - 08/2022</p>
                  <p className="font-semibold mb-1 ">
                    Client:
                    <span className="font-bold"> RenalytixAI</span>
                  </p>
                  <ul className="list-disc ml-6  ">
                    <li className=" mb-1">
                      Frontend Development: Created innovative Angular
                      components and features for a user-friendly web
                      application.
                    </li>
                    <li className=" mb-1">
                      Reporting: Crafted visually engaging PDF reports using
                      JasperSoft Studio for clear stakeholder communication.
                    </li>
                    <li className=" mb-1">
                      API Integration: Integrated APIs and RESTful services for
                      efficient data exchange between client and server.
                    </li>
                    <li className=" mb-1">
                      Technical Expertise: Proficient in Angular, TypeScript,
                      JasperSoft Studio, development tools, and version control
                      for high-quality solutions.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-100 height-100 relative d-flex flex-column justify-center align-items-center">
        <video
          autoPlay
          loop
          muted
          class="w-100 height-100 object-fit-cover"
          src="src/assets/nebula.mp4"
        ></video>
        <div className="position-absolute">
          <div class="position-relative top-0 left-0 w-100 height-100 d-flex justify-content-center align-items-center">
            <h1 class=" font-poppins font-semibold centerText">My Projects</h1>
          </div>
        </div>
      </div>
      <div className=" d-flex w-full">
        <div className="container-fluid m-0 ">
          <div className="row gap-2 w-100 text-white " id="card2">
            <div className="col">
              <div className=" bg-black border rounded-4  h-100  text-blue-300 text-start  ">
                <div className="p-2">
                  <h2 className="text-lg font-semibold mb-1">
                    InfyLearn-Student and Teacher Application
                  </h2>
                  <p className=" mb-3 ">Jun,2020-Dec,2020</p>
                  <ul className="list-disc ml-6 ">
                    <li className=" mb-1">
                      Developed Multi-Tenant School App (InfyLearn): Built
                      student & teacher Android apps using Java (Android Studio)
                      for homework, PDFs, & timed tests.
                    </li>
                    <li className=" mb-1">
                      Enhanced Accessibility: Integrated text-to-speech for
                      students, promoting inclusive learning.
                    </li>
                    <li className=" mb-1">
                      Multilingual Support: Contributed to a multilingual app,
                      fostering global learning opportunities.
                    </li>
                    <li className=" mb-1">
                      Scalable Data Management (Firebase): Ensured secure &
                      scalable data for InfyLearn (authentication, storage,
                      updates)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className=" bg-black border rounded-4  h-100  text-blue-300  text-start">
                <div className="p-2">
                  <h2 className="text-lg font-semibold mb-1">
                    Mahanubhav -Calendar Application
                  </h2>
                  <p className=" mb-1 ">Dec 2020-Feb,2021</p>
                  <ul className="list-disc ml-6 ">
                    <li className=" mb-1">
                      Dynamic Calendar App with Firebase (Android): Built a
                      user-friendly calendar app (Java/Android Studio) with
                      Firebase for messaging, updates & reminders.
                    </li>
                    <li className=" mb-1">
                      Engaging Features: Added horoscopes, festival/date alerts,
                      & audio playback to enrich user experience.
                    </li>
                    <li className=" mb-1">
                      Material UI Animations: Implemented smooth animations
                      using Material Design for a visually appealing interface.
                    </li>
                    <li className=" mb-1">
                      Optimized Data Management: Ensured efficient data handling
                      for a smooth calendar experience..
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className=" bg-black border rounded-4  h-100 border-orange-500 text-blue-300 text-start">
                <div className="p-2">
                  <h2 className="text-lg font-semibold mb-1">
                    Java-Desktop Application
                  </h2>
                  <p className=" mb-3 "> Nov 2019 - Jan 2020</p>
                  <ul className="list-disc ml-6 ">
                    <li className=" mb-1">
                      Government School Management App (Java/MySQL): Automated
                      admissions, bonafides, & transfer certificates for Indian
                      schools using Java & MySQL database.
                    </li>
                    <li className=" mb-1">
                      Jasper Reports Integration: Streamlined reporting &
                      record-keeping with customizable Jasper Reports
                      generation.
                    </li>
                    <li className=" mb-1">
                      Built-in Expiry Logic: Ensured timely software renewals
                      with automatic notifications for expiry.
                    </li>
                    <li className=" mb-1">
                      User-Friendly: Designed a user-friendly interface for
                      efficient school administration.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default projects;
