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
  return (
    <section className="w-100 h-100 relative paddingClass  bg-black  ">
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
                    <div className="flip-card-front flex justify-content-center align-items-center">
                      <img className="iconSize d-flex" src={instagram} />
                    </div>
                    <div className="flip-card-back flex justify-content-center align-items-center">
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
                    <div className="flip-card-front flex justify-content-center align-items-center">
                      <img className="iconSize flex" src={linkedin} />
                    </div>
                    <div className="flip-card-back flex justify-content-center align-items-center">
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
                    <div className="flip-card-front flex justify-content-center align-items-center">
                      <img className="iconSize flex" src={github} />
                    </div>
                    <div className="flip-card-back flex justify-content-center align-items-center">
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
