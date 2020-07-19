import React, { useState } from "react";

import "./SideDrawer.css";

import ItemList from "../ItemList/ItemList";
import Modal from "../Modal/Modal";

export default (props) => {
  const [toggleModal1, setToggleModal1] = useState(false);
  const [toggleModal2, setToggleModal2] = useState(false);

  const showModal = (event) => {
    setToggleModal1((toggleModal1) => !toggleModal1);
  };
  const showModal2 = (event) => {
    setToggleModal2((toggleModal2) => !toggleModal2);
  };
  return (
    <nav className="Side__Drawer">
      <div>
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
  );
};
