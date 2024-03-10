import React, { useEffect } from "react";
import "./consolText.css";
import profilePhoto from "../assets/images/profilephoto.png";

const ConsoleText = ({ words, id, colors }) => {
  useEffect(() => {
    let visible = true;
    let letterCount = 1;
    let x = 1;
    let waiting = false;
    const target = document.getElementById(id);
    target.setAttribute("style", `color: ${colors[0]}`);

    const interval = setInterval(() => {
      if (letterCount === 0 && !waiting) {
        waiting = true;
        target.innerHTML = `{${words[0].substring(0, letterCount)}}`;
        setTimeout(() => {
          const usedColor = colors.shift();
          colors.push(usedColor);
          const usedWord = words.shift();
          words.push(usedWord);
          x = 1;
          target.setAttribute("style", `color: ${colors[0]}`);
          letterCount += x;
          waiting = false;
        }, 1000);
      } else if (letterCount === words[0].length + 1 && !waiting) {
        waiting = true;
        setTimeout(() => {
          x = -1;
          letterCount += x;
          waiting = false;
        }, 1000);
      } else if (!waiting) {
        target.innerHTML = `{${words[0].substring(0, letterCount)}}`;
        letterCount += x;
      }
    }, 120);

    return () => clearInterval(interval);
  }, [words, id, colors]);

  return (
    <div className=" container-fluid text-white ">
      <div className="row">
        <div className=" col mt-3 d-flex flex-column  items-center justify-around  gap-3  font-poppins">
          <h2 style={{ fontSize: "3.5em" }}>I'm Kaushal</h2>
          <h2 id="text" className="word-play"></h2>
          <p>
            As an accomplished software developer, I bring to the table a wealth
            of experience in developing and maintaining software using a wide
            range of programming languages and tools. With a proven ability to
            write clean and efficient code, I am adept at collaborating with
            cross-functional teams. My expertise extends across various domains,
            including mobile apps, web apps, and machine learning, making me a
            valuable asset for any organization seeking top-tier talent in
            software development.
          </p>
        </div>
        <div className="col">
          <img className="image" alt="" src={profilePhoto} />
        </div>
      </div>
    </div>
  );
};

export default ConsoleText;
