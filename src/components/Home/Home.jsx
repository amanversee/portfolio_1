import "./Home.css";
import man from "../../assets/man.png";
import { Typewriter } from "react-simple-typewriter";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Resume from "../../assets/Resume.pdf";

function Home() {
  useGSAP(() => {
    const tl1 = gsap.timeline();

    tl1.from(".line1", {
      y: 60,
      opacity: 0,
      duration: 0.8,
    });

    tl1.from(".line2", {
      y: 60,
      opacity: 0,
      duration: 0.8,
    });

    tl1.from(".line3", {
      y: 60,
      opacity: 0,
      duration: 0.8,
    });

    tl1.from(".homebuttons", {
      y: 40,
      opacity: 0,
      duration: 0.8,
    });

    gsap.from(".righthome img", {
      x: 200,
      opacity: 0,
      duration: 1,
    });
  });

  return (
    <div id="home">
      <div className="lefthome">
        <div className="homedetails">
          <div className="line1">Hi, I'm</div>
          <div className="line2">Aman Mourya</div>
          <div className="line3">
            <Typewriter
              words={["FULL STACK DEVELOPER", "SOFTWARE DEVELOPER", "VIBE CODER"]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>
          <div className="homebuttons">
            <a href="https://github.com/amanversee" target="_blank" rel="noopener noreferrer">
              <button className="btn1">View Projects</button>
            </a>

            <a href={Resume} download>
              <button>Download Resume</button>
            </a>

            <a href="https://www.linkedin.com/in/aman-mourya01/" target="_blank" rel="noopener noreferrer">
              <button className="btn2" style={{ borderColor: "#6366f1", color: "#6366f1" }}>LinkedIn</button>
            </a>
          </div>
        </div>
      </div>

      <div className="righthome">
        <img src={man} alt="Aman Mourya Developer Illustration" />
      </div>
    </div>
  );
}

export default Home;
