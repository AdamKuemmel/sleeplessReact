function Footer() {
  return (
    <>
      <footer class="center footer">
        <div class="mobileFooter tabletFooter">
          <h2 class="footerTitle">Ready To Get Started?</h2>
          <div class="footerColor">
            <a href="#" class="button1">
              <button type="button" name="touchButton" class="footerButton">
                Get In Touch With Us
              </button>
            </a>
            <a href="#" class="button2">
              <button
                type="button"
                name="appointmentButton"
                class="footerButton"
              >
                Book An Apointment
              </button>
            </a>
          </div>

          <h2 class="copyFooter">
            All Materials &copy; 2021 | Site By Sleepless
          </h2>
        </div>
        <div class="footerLinks">
          <a href="#" class="footerWords">
            Our Mission
          </a>
          <a href="#" class="footerWords">
            Services
          </a>
          <a href="#" class="footerWords">
            Our Team
          </a>
        </div>
        <div class="footerLinks">
          <a href="#" class="footerWords">
            Contact us
          </a>
          <a href="#" class="footerWords">
            New Blood
          </a>
        </div>
      </footer>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
        integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      ></script>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"
        integrity="sha512-bPs7Ae6pVvhOSiIcyUClR7/q2OAsRiovw4vAkX+zJbw3ShAeeqezq50RIIcIURq7Oa20rW2n2q+fyXBNcU9lrw=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      ></script>
    </>
  );
}

export default Footer;
