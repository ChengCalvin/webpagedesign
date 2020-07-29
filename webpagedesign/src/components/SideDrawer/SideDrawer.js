import React, { useState } from "react";

import "./SideDrawer.css";

import ItemList from "../ItemList/ItemList";
import Modal from "../Modal/Modal";

export default (props) => {
  const [modalOpen, setModalOpen] = useState(null);
  return (
    <nav className="Side__Drawer">
      <div>
        {props.itemList.map((itemlist, i) => (
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
    </nav>
  );
};
