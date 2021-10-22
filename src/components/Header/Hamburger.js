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
                    <a href="#">Our Mission</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Our Team</a>
                  </li>
                  <li>
                    <a href="#">New Patients</a>
                  </li>
                  <li>
                    <a href="#">Get In Touch</a>
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
