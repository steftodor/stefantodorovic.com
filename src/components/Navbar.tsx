// components/Navbar.jsx

import Link from "next/link";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <Link href="/">
          stfn888
        </Link>
      </div>
      <Link href="/posts" className="cta-btn">posts</Link>

    </div>
  )
}

export default Navbar;