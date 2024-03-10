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
  let animationInProgress = false;

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
    emailjs.init({ publicKey: import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY });
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
        }
      )
      .then(() => {
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setTimeout(() => {
          setCurrentAnimation("alt_idle");
        }, 4000);
      });
  };
  function onMouseEnter(value) {
    console.log(value);
    createTypingAnimation(value, "text");
  }

  function createTypingAnimation(word, id) {
    if (animationInProgress) {
      console.log(
        "Animation already in progress. Please wait until it completes."
      );
      return; // Exit the function if animation is already in progress
    }

    animationInProgress = true;

    let visible = true;
    let letterCount = 1;
    let x = 1;
    let waiting = false;
    const target = document.getElementById(id);

    const animate = () => {
      if (letterCount === 0 && !waiting) {
        waiting = true;
        target.innerHTML = `${word.substring(0, letterCount)}`;
        setTimeout(() => {
          x = 1;

          letterCount += x;
          waiting = false;
          animate(); // Call animate recursively
        }, 800);
      } else if (letterCount === word.length + 1 && !waiting) {
        waiting = true;
        setTimeout(() => {
          x = -1;
          letterCount += x;
          waiting = false;
          animationInProgress = false; // Reset animation status once completed
        }, 1000);
      } else if (!waiting) {
        target.innerHTML = `${word.substring(0, letterCount)}`;
        letterCount += x;
        setTimeout(animate, 90); // Call animate recursively after a delay
      }
    };

    animate(); // Start the animation
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

              <span className="greetings" id="text">
                Pass
              </span>

              <span className="closure">&nbsp;my time</span>
            </div>
            <div className="container-fluid h-10">
              <div className="row d-flex justify-around h-100 ">
                <div
                  className="flip-card col iconDiv"
                  onMouseEnter={() => onMouseEnter("Waste")}
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
                  onMouseEnter={() => onMouseEnter("Spend")}
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
                  onMouseEnter={() => onMouseEnter("Invest")}
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
