import React, { useState } from "react";

import "./Toolbar.css";
import Logo from "../Logo/Logo";
import ItemList from "../ItemList/ItemList";
import Modal from "../Modal/Modal";
import DrawerToggle from "../SideDrawer/DrawerToggle";
import SideDrawer from "../SideDrawer/SideDrawer";
import Backdrop from "../Backdrop/Backdrop";
import ItemCheckedCounter from "../ItemCheckedCounter/ItemCheckedCounter";

const Toolbar = (props) => {
  const [ToggleDrawer, setToggleDrawer] = useState(false);

  const drawerClickHandler = () => {
    setToggleDrawer((ToggleDrawer) => !ToggleDrawer);
  };

  const [itemList, setItemList] = useState([
    { Question: "Who Made This?", Content: "Frequently Asked Question", id: 1 },
    { Question: "FAQ", Content: "Frequently Asked Question 2", id: 2 },
    { Question: "Share", Content: "Facebook, Twiter, Instagram", id: 3 },
    {
      Question: "More Tools by NorthOne",
      Content: "Here are all the tools",
      id: 4,
    },
  ]);
  const [modalOpen, setModalOpen] = useState(null);

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
        <div>
          {/* <ItemCheckedCounter>{props.itemCheckedCounter}</ItemCheckedCounter> */}
        </div>

        <div className="Toolbar__navigation-items">
          {itemList.map((itemlist, i) => (
            <div key={i}>
              <ItemList clicked={() => setModalOpen(itemlist.id)}>
                {itemlist.Question}
              </ItemList>
              <Modal
                show={modalOpen === itemlist.id}
                clicked={() => setModalOpen(null)}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "200px",
                    color: "white",
                  }}
                >
                  {itemlist.Content}
                </div>
              </Modal>
            </div>
          ))}
        </div>

        <div className="SideDrawer">
          <DrawerToggle clicked={drawerClickHandler} />
          {ToggleDrawer ? (
            <>
              <Backdrop show={ToggleDrawer} clicked={drawerClickHandler} />
              <SideDrawer itemList={itemList} />
            </>
          ) : null}
        </div>
      </nav>
    </header>
  );
};

export default Toolbar;
