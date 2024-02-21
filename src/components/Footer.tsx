const Footer = () => {
    return (
      <>
        <hr/>
        <div className="footer-container">
          <p>
            © {new Date().getFullYear()} stfn888
          </p>
          <div className="social_icons">
            <a
              href="https://youtube.com/@stfn888"
              aria-label="Youtube"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
            
          </div>
        </div>
      </>
    )
  }
  
  export default Footer;