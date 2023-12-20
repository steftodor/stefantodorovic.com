import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero-container" data-aos="fade-up">
      <Image src='/assets/headshot.jpg' className="profile-img" width={300} height={300} alt="Joe's personal headshot" />
      <div className="hero-text">
        <h1>Hey, I'm Stefan 👋</h1>
        <p>
          I'm a Computer Engineering student based in Ottawa, Canada.
        </p>
        <div className="social-icons">

          <a
            href="https://github.com/steftodor"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/todorovicstefan/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero;