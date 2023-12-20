// components/Navbar.jsx

import Link from "next/link";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <Link href="/">
          Stefan Todorovic
        </Link>
      </div>
      <a href="/blog" className="cta-btn">Blog</a>

    </div>
  )
}

export default Navbar;