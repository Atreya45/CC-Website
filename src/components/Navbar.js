import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="#codeforces" legacyBehavior>
        <a>Codeforces</a>
      </Link>
      <Link href="#leetcode" legacyBehavior>
        <a>Leetcode</a>
      </Link>
      <Link href="#codechef" legacyBehavior>
        <a>Codechef</a>
      </Link>
    </nav>
  );
};

export default Navbar;
