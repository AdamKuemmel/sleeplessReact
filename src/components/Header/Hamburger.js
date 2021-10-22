import React, { useState } from "react";
// import "./styles.css";

function Hamburger() {
  return (
    <>
      <div class="boxSize">
        <div class="menu-wrap">
          <input type="checkbox" class="toggler" />

          <div class="hamburger">
            <div></div>
          </div>

          <div class="menu">
            <div>
              <div>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <img class="tree" src="./img/Group 5.png" alt="treeLogo" />
    </>
  );
}

export default Hamburger;
