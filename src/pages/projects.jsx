import "./projects.css";
import React, { useEffect, useRef } from "react";
import viddeoSrc2 from "../assets/nebula.mp4";
const projects = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight / 2;
    class Particle {
      constructor(effect, x, y, color) {
        this.effect = effect;
        this.x = (Math.random() * this.effect.canvasWidth) / 2;
        this.y = this.effect.canvasHeight + Math.random() * 0.001;
        this.color = color;
        this.originX = x;
        this.originY = y;
        this.size = this.effect.gap;
        this.dx = 0;
        this.dy = 0;
        this.vx = 0;
        this.vy = 0;
        this.force = 0;
        this.angle = 0;
        this.distance = 0;
        this.friction = Math.random() * 0.1 + 0.15;
        this.ease = Math.random() * 0.1 + 0.005;
      }
      draw() {
        this.effect.context.fillStyle = this.color;
        this.effect.context.fillRect(this.x, this.y, this.size, this.size);
      }
      update() {
        this.dx = this.effect.mouse.x - this.x;
        this.dy = this.effect.mouse.y - this.y;
        this.distance = this.dx * this.dx + this.dy * this.dy;
        this.force = -this.effect.mouse.radius / this.distance;
        // console.log(this.distance,effect.mouse.radius);
        if (this.distance < this.effect.mouse.radius) {
          this.angle = Math.atan2(this.dy, this.dx);
          this.vx += this.force * Math.cos(this.angle);
          this.vy += this.force * Math.sin(this.angle);
        }
        this.x +=
          (this.vx *= this.friction) + (this.originX - this.x) * this.ease;
        this.y +=
          (this.vy *= this.friction) + (this.originY - this.y) * this.ease;
      }
    }
    class Effect {
      constructor(context, canvasWidth, canvasHeight) {
        this.context = context;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.textX = canvasWidth / 2;
        this.textY = canvasHeight / 2;
        this.fontSize = Math.min(canvasWidth, canvasHeight) * 0.3;
        this.maxTextWidth = this.canvasWidth * 1;
        this.lineHeight = this.fontSize * 0.8;
        this.particles = [];
        this.gap = 3;
        this.mouse = {
          radius: 10000,
          x: 0,
          y: 0,
        };
      }
      wrapText(text) {
        const gradient = this.context.createLinearGradient(
          0,
          0,
          this.canvasWidth,
          this.canvasHeight
        );
        gradient.addColorStop(0, "#ff9900"); // Orange
        gradient.addColorStop(0.5, "#ff6600"); // Darker orange
        gradient.addColorStop(1, "#cc6600"); // Even darker orange

        this.context.fillStyle = gradient;
        this.context.textAlign = "center";
        this.context.textBaseline = "middle";
        this.context.font = this.fontSize + "px Helvetica";
        this.context.linewidth = 3;
        this.context.strokeStyle = "white";

        let linesArray = [];
        let lineCounter = 0;
        let line = "";
        let words = text.split(" ");
        for (let index = 0; index < words.length; index++) {
          let testLine = line + words[index] + " ";
          if (this.context.measureText(testLine).width > this.maxTextWidth) {
            line = words[index] + " ";
            lineCounter++;
          } else {
            line = testLine;
          }
          linesArray[lineCounter] = line;
        }
        let textHieght = this.lineHeight * lineCounter;
        this.textY = this.canvasHeight / 2 - textHieght / 2;
        linesArray.forEach((el, index) => {
          this.context.fillText(
            el,
            this.textX,
            this.textY + index * this.lineHeight
          );
          this.context.strokeText(
            el,
            this.textX,
            this.textY + index * this.lineHeight
          );
        });
        this.convertToParticles();
      }
      convertToParticles() {
        this.particles = [];
        const pixels = this.context.getImageData(
          0,
          0,
          this.canvasWidth,
          this.canvasHeight
        ).data;
        this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        for (let y = 0; y < this.canvasHeight; y += this.gap) {
          for (let x = 0; x < this.canvasWidth; x += this.gap) {
            const index = (y * this.canvasWidth + x) * 4;
            const alpha = pixels[index + 3];
            if (alpha > 0) {
              const red = pixels[index];
              const green = pixels[index + 1];
              const blue = pixels[index + 2];
              const rgb = `rgb(${red},${green},${blue})`;
              this.particles.push(new Particle(this, x, y, rgb));
            }
          }
        }
      }
      render() {
        this.particles.forEach((particle) => {
          particle.update();
          particle.draw();
        });
      }
    }

    const effect = new Effect(ctx, canvas.width, canvas.height);
    effect.wrapText("Proven Track Record");
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      effect.render();
      requestAnimationFrame(animate);
    }
    animate();
  }, []);
  return (
    <section className="w-100 h-full relative flex-column d-flex mt-10 gap-3 bg-black">
      <canvas id="canvas" ref={canvasRef} className="canvas"></canvas>
      <div className="d-flex w-100">
        <div className="container-fluid">
          <div className="row ">
            <div className="col-md-6 mb-3">
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
            <div className="col-md-6 mb-3">
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
          src={viddeoSrc2}
        ></video>
        <div className="position-absolute">
          <div class="position-relative top-0 left-0 w-100 height-100 d-flex justify-content-center align-items-center">
            <h1 class=" font-poppins font-semibold centerText">My Projects</h1>
          </div>
        </div>
      </div>
      <div className=" d-flex w-full">
        <div className="container-fluid d-flex justify-content-center">
          <div className="row  w-100 text-white project " id="card2">
            <div className="col-md-4 mb-3">
              <div className=" bg-black border rounded-4  h-100  text-blue-300 text-start  ">
                <div className="p-2">
                  <h2 className=" font-semibold mb-1">
                    InfyLearn-Student and Teacher Application
                  </h2>
                  <p className=" mb-3 ">Jun,2020-Dec,2020</p>
                  <p className="font-semibold mb-1 ">
                    <a href="https://play.google.com/store/apps/details?id=com.synactech.stud_side_app">
                      Application Link
                    </a>
                  </p>
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
            <div className="col-md-4 mb-3">
              <div className=" bg-black border rounded-4  h-100   text-start">
                <div className="p-2">
                  <h2 className=" font-semibold mb-1">
                    Mahanubhav -Calendar Application
                  </h2>
                  <p className=" mb-1 ">Dec 2020-Feb,2021</p>
                  <p className="font-semibold mb-1 ">
                    <a href="https://play.google.com/store/apps/details?id=com.synactech.mahanubhav&showAllReviews=true">
                      Application Link
                    </a>
                  </p>
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
            <div className="col-md-4 mb-3">
              <div className=" bg-black border rounded-4  h-100 border-orange-500 text-blue-300 text-start">
                <div className="p-2">
                  <h2 className=" font-semibold mb-1">
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
