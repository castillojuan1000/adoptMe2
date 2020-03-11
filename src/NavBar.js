import React from "react";
import { Link } from "@reach/router";
import { css } from "@emotion/core";

const NavBar = () => (
  <header
    css={css`
      background-color:#d9c148;
      position: sticky;
      top: 0;
      z-index: 10;
      border-radius: 10px;
      margin: 0px auto 15px;
      
    `}
  >
    <Link to="/">Adopt Me!</Link>
    <span css={css`
    display: inline-block;
    
    font-size: 60px;
  `}
      aria-label="logo"
      role="img">
      🐩
    </span>
  </header>
);

export default NavBar;