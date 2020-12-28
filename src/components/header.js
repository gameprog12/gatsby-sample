import React from "react"

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="site">
          <a href="base-index.html">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="225.65"
              height="46.59"
            >
              <defs></defs> <desc>ESSENTIALS</desc>{" "}
              <path fill="#477294" d="M52.6 25.36h8...2.33-2.33z" />
            </svg>
          </a>
        </div>
        <nav className="nav">
          <ul>
            <li>
              <a href="base-index.html">TOP</a>
            </li>
            <li>
              <a href="base-about.html">ABOUT</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
