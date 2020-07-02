import React from "react";

import "./Toolbar.css";
import Logo from "../Logo/Logo";
import ItemList from "../ItemList/ItemList";

const Toolbar = (props) => (
  <header className="Toolbar">
    <nav className="Toolbar__nav">
      <div className="Toolbar__logo">
        <Logo />
        <div className="Toolbar__logo__title">
          <h1>Startup Financial Health Checklist</h1>
          <p>powered by NorthOne</p>
        </div>
      </div>
      <div className="Toolbar__navigation-items">
        <ul>
          <ItemList>Who Made this?</ItemList>
          <ItemList>FAQ</ItemList>
          <ItemList>Share</ItemList>
          <ItemList>More Tools by NorthOne</ItemList>
        </ul>
      </div>
    </nav>
  </header>
);

export default Toolbar;
