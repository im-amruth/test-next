import React from "react";
import styles from "../styles/navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={`navbar navbar-expand-lg bg-body-tertiary ${styles.navbar}`}>
      <div className={`container-fluid ${styles.options}`}>
        {/* Dropdown */}
        <li className="nav-item dropdown">
          <a
            className={`nav-link dropdown-toggle ${styles.navText}`}
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            All
          </a>

          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" href="#">
                Profile
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" href="#">
                Become a seller
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link className="dropdown-item" href="#">
                Settings
              </Link>
            </li>
          </ul>
        </li>

        {/* Toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {[
              ["Home", "/"],
              ["About Us", "/aboutus"],
              ["All Products", "/productlist"],
              ["Best Deals", "/bestdeals"],
              ["New Releases", "/newreleases"],
              ["Returns & Orders", "/returns"],
              ["Contact Us", "/contactus"],
            ].map(([label, href]) => (
              <li key={href} className="nav-item">
                <Link href={href} className={`nav-link ${styles.navText}`}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
