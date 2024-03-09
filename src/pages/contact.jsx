import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState, useEffect } from "react";
import Loader from "../components/loader";
import ContactRobot from "../models/contact_robot";
import "./contact.css";
import instagram from "../assets/images/instagram.png";
import github from "../assets/images/github.png";
import linkedin from "../assets/images/linkedin.png";
import emailjs from "@emailjs/browser";

const contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState(
    "transform_to_alt_hero"
  );
  const canvasRef = useRef(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleFocus = (e) => {
    setCurrentAnimation("alt_idle");
  };
  const handleBlur = (e) => {
    setCurrentAnimation("alt_idle");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation("transform_to_main_hero");

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Kaushal",
          from_email: form.email,
          to_email: "kaushaldigraskar7799@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);
        setCurrentAnimation("alt_idle");
      })
      .catch((err) => {
        setIsLoading(false);
        setCurrentAnimation("alt_idle");
      });
  };
  function onMouseEnter(value) {
    let githubvalue = -12;
    let instagramvalue = -8;
    let linkedIn = -4;
    if (window.innerWidth === 768) {
      githubvalue = -13;
      instagramvalue = -9;
    } else if (window.innerWidth === 1024) {
      githubvalue = -14;
      instagramvalue = -9;
      linkedIn = -5;
    }
    switch (value) {
      case "instagram":
        document.getElementById("text").style.transition =
          "transform 0.8s ease";
        document.getElementById("text").style.transform =
          "translateY(" + instagramvalue + "vh) ";
        break;
      case "linkedin":
        document.getElementById("text").style.transition =
          "transform 0.5s ease";
        document.getElementById("text").style.transform =
          "translateY(" + linkedIn + "vh) ";

        break;
      case "github":
        document.getElementById("text").style.transition = "transform 1s ease";
        document.getElementById("text").style.transform =
          "translateY(" + githubvalue + "vh) ";
        break;
    }
  }
  function onMouseLeave(value) {
    switch (value) {
      case "instagram":
        document.getElementById("text").style.transition =
          "transform 0.5s ease";
        document.getElementById("text").style.transform =
          "translateY(" + 0 + "vh) ";
        break;
      case "linkedin":
        document.getElementById("text").style.transition =
          "transform 0.8s ease";
        document.getElementById("text").style.transform =
          "translateY(" + 0 + "vh) ";
        break;
      case "github":
        document.getElementById("text").style.transition = "transform 1s ease";
        document.getElementById("text").style.transform =
          "translateY(" + 0 + "vh) ";
        break;
    }
  }
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
        this.fontSize = Math.min(canvasWidth, canvasHeight) * 0.2;
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
    effect.wrapText("Creating Connections, Captivating Designs.");
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      effect.render();
      requestAnimationFrame(animate);
    }
    animate();
  }, []);
  return (
    <section className="w-100 h-100 relative paddingClass  bg-black  ">
      <canvas id="canvas" ref={canvasRef} className="canvas"></canvas>
      <div className="container-fluid">
        <div className="row">
          <div className="col videoCanvas">
            <Canvas camera={{ position: [0, 1, 3.5] }}>
              <Suspense fallback={<Loader />}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[1, 1, 1]} intensity={2.5} />
                <hemisphereLight />
                <ContactRobot
                  scale={[1, 1, 1]}
                  currentAnimation={currentAnimation}
                />
              </Suspense>
            </Canvas>
          </div>
          <div className="col d-flex flex-column justify-content-center gap-3 ">
            <form className="form bg-slate-500" onSubmit={handleSubmit}>
              <div className="text">Welcome</div>
              <div className="subtitle">
                Let's connect and build something great !!!
              </div>
              <div className="input-container ic1">
                <input
                  id="name"
                  name="name"
                  className="input"
                  value={form.name}
                  required
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  type="text"
                  placeholder="name"
                />
              </div>
              <div className="input-container ic2">
                <input
                  id="email"
                  name="email"
                  className="input"
                  type="text"
                  placeholder="Email"
                  value={form.email}
                  required
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>
              <div className="input-container ic2">
                <textarea
                  id="message"
                  className="input"
                  name="message"
                  rows={3}
                  type="text"
                  placeholder="Message"
                  value={form.message}
                  required
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>

              <button
                type="submit"
                onFocus={handleFocus}
                onBlur={handleBlur}
                className="submit"
              >
                {isLoading ? "Sending..." : "Send  "}
              </button>
            </form>
            <div className="  d-flex flex-row mt-5 text-white  ">
              <span>Here, I usually&nbsp;</span>
              <div className="string" id="text">
                <span className="greeting en">
                  {" "}
                  <b>Pass</b>
                </span>
                <span className="greeting en">
                  <b>Spend</b>
                </span>
                <span className="greeting es">
                  <b>Waste</b>
                </span>
                <span className="greeting de">
                  <b>Invest</b>
                </span>
              </div>
              <span className="closure">&nbsp;my time</span>
            </div>
            <div className="container-fluid h-10">
              <div className="row d-flex justify-around h-100 ">
                <div
                  className="flip-card col iconDiv"
                  onMouseEnter={() => onMouseEnter("instagram")}
                  onMouseLeave={() => onMouseLeave("instagram")}
                >
                  <div className="flip-card-inner">
                    <div className="flip-card-front flex justify-center items-center">
                      <img className="iconSize d-flex" src={instagram} />
                    </div>
                    <div className="flip-card-back flex justify-center items-center">
                      <a
                        href="https://www.instagram.com/the_______alchemist/?hl=en"
                        target="_blank"
                        rel="noreferrer"
                      >
                        1hr
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="flip-card col iconDiv"
                  onMouseEnter={() => onMouseEnter("linkedin")}
                  onMouseLeave={() => onMouseLeave("linkedin")}
                >
                  <div className="flip-card-inner">
                    <div className="flip-card-front flex justify-center items-center">
                      <img className="iconSize flex" src={linkedin} />
                    </div>
                    <div className="flip-card-back flex justify-center items-center">
                      <a
                        href="https://www.linkedin.com/in/kaushal-digraskar-45599614b/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        45 min
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="flip-card col iconDiv"
                  onMouseEnter={() => onMouseEnter("github")}
                  onMouseLeave={() => onMouseLeave("github")}
                >
                  <div className="flip-card-inner">
                    <div className="flip-card-front flex justify-center items-center">
                      <img className="iconSize flex" src={github} />
                    </div>
                    <div className="flip-card-back flex justify-center items-center">
                      <a
                        href="https://github.com/kaushaldigraskar"
                        target="_blank"
                        rel="noreferrer"
                      >
                        30 min
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default contact;
