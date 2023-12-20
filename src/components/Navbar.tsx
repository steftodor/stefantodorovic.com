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
      <Link href="/blog" className="cta-btn">Blog</Link>

    </div>
  )
}

export default Navbar;