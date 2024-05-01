import React, { useEffect, useRef, useState } from "react";
import logo from "../logo.svg";

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openBtnRef = useRef();
  const fullRef = useRef();
  const popupRef = useRef();
  const closeBtnRef = useRef();

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = (e) => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClick = (e) => {
      if (openBtnRef?.current?.contains(e.target)) {
        openPopup();
      } else if (closeBtnRef?.current?.contains(e.target)) {
        closePopup();
      } else if (
        isOpen &&
        fullRef?.current?.contains(e.target) &&
        !popupRef?.current?.contains(e.target)
      ) {
        closePopup();
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [isOpen]);

  return (
    <div>
      <button
        ref={openBtnRef}
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "150px",
          marginBottom: "150px",
        }}
      >
        Open Popup
      </button>
      {isOpen && (
        <div ref={fullRef}>
          <div
            style={{
              position: "fixed",
              top: "0",
              bottom: "0",
              left: "0",
              right: "0",
              backgroundColor: "rgba(0,0,0,0.5)",
              zIndex: "999",
            }}
          ></div>
          <div
            ref={popupRef}
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "white",
              padding: "20px",
              zIndex: "1000",
              width: "300px",
              borderRadius: "10px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h2 style={{ color: "#333", marginBottom: "20px" }}>Lorem</h2>
            <img
              src={logo}
              className="App-logo"
              alt="logo"
              style={{ width: 400 }}
            />
            <p style={{ color: "#666", marginBottom: "30px" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Architecto quisquam ex temporibus officia alias provident quos
              dignissimos cupiditate laboriosam ipsam fugit voluptatum mollitia,
              eum rem dolore necessitatibus error nostrum accusamus.
            </p>
            <button
              ref={closeBtnRef}
              style={{
                backgroundColor: "#333",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Close Popup
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
