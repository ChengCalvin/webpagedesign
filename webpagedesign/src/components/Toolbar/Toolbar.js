import React, { useState } from "react";

import "./Toolbar.css";
import Logo from "../Logo/Logo";
import ItemList from "../ItemList/ItemList";
import Modal from "../Modal/Modal";

const Toolbar = (props) => {
  const [toggleModal1, setToggleModal1] = useState(false);
  const [toggleModal2, setToggleModal2] = useState(false);

  const showModal = (event) => {
    setToggleModal1((toggleModal1) => !toggleModal1);
  };
  const showModal2 = (event) => {
    setToggleModal2((toggleModal2) => !toggleModal2);
  };
  return (
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
          <ItemList clicked={showModal}>Who Made this?</ItemList>
          {toggleModal1 ? (
            <Modal show={toggleModal1} clicked={showModal}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "200px",
                  color: "white",
                }}
              >
                Frequently Asked Question
              </div>
            </Modal>
          ) : null}
          <ItemList clicked={showModal2}>FAQ</ItemList>
          {toggleModal2 ? (
            <Modal show={toggleModal2} clicked={showModal2}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "200px",
                  color: "white",
                }}
              >
                Frequently Asked Question 2
              </div>
            </Modal>
          ) : null}
          <ItemList>Share</ItemList>
          <ItemList>More Tools by NorthOne</ItemList>
        </div>
      </nav>
    </header>
  );
};

export default Toolbar;
