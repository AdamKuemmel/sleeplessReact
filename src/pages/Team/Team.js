import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function Team() {
  return (
    <div>
      <div>
        <h2 class="teamTitle">Meet Our Team</h2>
        <h2 class="teamLower">of Dedicated Headshots</h2>
      </div>
      <OwlCarousel
        loop={true}
        margin={5}
        nav={true}
        autoPlay={true}
        autoWidth={true}
        navText={[
          "<div class='nav-button owl-prev' id='arrowSize'>	&larr;</div>",
          "<div class='nav-button owl-next' id='arrowSize'>&rarr;</div>",
        ]}
      >
        <div class="item">
          <div class="teamCard">
            <img class="cardImage" src="./img/slide1.png" alt="josh" />
            <h2 class="teamTitle2">Josh Meister, Designer</h2>
            <p class="teamWords">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              eaque dolores atque ipsam pariatur perferendis.
            </p>
          </div>
        </div>
        <div class="item">
          <div class="teamCard">
            <img class="cardImage" src="./img/slide3.png" alt="matt" />
            <h2 class="teamTitle2">Matthew Mann, Project Manager</h2>
            <p class="teamWords">
              The passage is attributed to an unknown typesetter in the 15th
              century who is thought to have scrambled parts of Cicero's De
              Finibus Bonorum et Malorum for use in a type specimen book.
            </p>
          </div>
        </div>
        <div class="item">
          <div class="teamCard">
            <img class="cardImage" src="./img/slide2.png" alt="adam" />
            <h2 class="teamTitle2">Adam Kuemmel, Web Developer</h2>
            <p class="teamWords">
              Adam Kuemmel lead the build on the Sleepless Test homepage. It is
              comletely responsive to tablet and mobile. Also it includes some
              cool animation features that he learned from studying the actaul
              Sleepless homepage.
            </p>
          </div>
        </div>
        <div class="item">
          <div class="teamCard">
            <img class="cardImage" src="./img/slide4.png" alt="shay" />
            <h2 class="teamTitle2">Shay Margo, Developer</h2>
            <p class="teamWords">
              The purpose of lorem ipsum is to create a natural looking block of
              text (sentence, paragraph, page, etc.) that doesn't distract from
              the layout.
            </p>
          </div>
        </div>
        <div class="item">
          <div class="teamCard">
            <img class="cardImage" src="./img/slide5.png" alt="max" />
            <h2 class="teamTitle2">Max Malto, Creative Director</h2>
            <p class="teamWords">
              A practice not without controversy, laying out pages with
              meaningless filler text can be very useful when the focus is meant
              to be on design, not content.
            </p>
          </div>
        </div>
        <div class="item">
          <div class="teamCard">
            <img class="cardImage" src="./img/slide6.png" alt="fanny" />
            <h2 class="teamTitle2">Fanny Fanner, Designer</h2>
            <p class="teamWords">
              The passage experienced a surge in popularity during the 1960s
              when Letraset used it on their dry-transfer sheets, and again
              during the 90s as desktop publishers bundled the text with their
              software.
            </p>
          </div>
        </div>
        <div class="item">
          <div class="teamCard">
            <img class="cardImage" src="./img/slide1.png" alt="josh" />
            <h2 class="teamTitle2">Josh Meister, Designer</h2>
            <p class="teamWords">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              eaque dolores atque ipsam pariatur perferendis.
            </p>
          </div>
        </div>
        <div class="item">
          <div class="teamCard">
            <img class="cardImage" src="./img/slide3.png" alt="matt" />
            <h2 class="teamTitle2">Matthew Mann, Project Manager</h2>
            <p class="teamWords">
              The passage is attributed to an unknown typesetter in the 15th
              century who is thought to have scrambled parts of Cicero's De
              Finibus Bonorum et Malorum for use in a type specimen book.
            </p>
          </div>
        </div>
        <div class="item">
          <div class="teamCard">
            <img class="cardImage" src="./img/slide2.png" alt="adam" />
            <h2 class="teamTitle2">Adam Kuemmel, Web Developer</h2>
            <p class="teamWords">
              Adam Kuemmel lead the build on the Sleepless Test homepage. It is
              comletely responsive to tablet and mobile. Also it includes some
              cool animation features that he learned from studying the actaul
              Sleepless homepage.
            </p>
          </div>
        </div>
        <div class="item">
          <div class="teamCard">
            <img class="cardImage" src="./img/slide4.png" alt="shay" />
            <h2 class="teamTitle2">Shay Margo, Developer</h2>
            <p class="teamWords">
              The purpose of lorem ipsum is to create a natural looking block of
              text (sentence, paragraph, page, etc.) that doesn't distract from
              the layout.
            </p>
          </div>
        </div>
        <div class="item">
          <div class="teamCard">
            <img class="cardImage" src="./img/slide5.png" alt="max" />
            <h2 class="teamTitle2">Max Malto, Creative Director</h2>
            <p class="teamWords">
              A practice not without controversy, laying out pages with
              meaningless filler text can be very useful when the focus is meant
              to be on design, not content.
            </p>
          </div>
        </div>
        <div class="item">
          <div class="teamCard">
            <img class="cardImage" src="./img/slide6.png" alt="fanny" />
            <h2 class="teamTitle2">Fanny Fanner, Designer</h2>
            <p class="teamWords">
              The passage experienced a surge in popularity during the 1960s
              when Letraset used it on their dry-transfer sheets, and again
              during the 90s as desktop publishers bundled the text with their
              software.
            </p>
          </div>
        </div>
      </OwlCarousel>
    </div>
  );
}

export default Team;
