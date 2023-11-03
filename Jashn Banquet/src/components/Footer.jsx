import "./Footer.css";

function Footer() {
  return (
    <>
      <footer id="contact">
        <div className="container">
          <div className="f-container">
            <h2>Jashn Banquet - Your own Wedding destination</h2>
            <br />
            <p className="font-bold">
              Plan your wedding with Us Jashn Banquet is an Indian Banquet chain{" "}
            </p>
            <div>
              <button className="btn">Register as a Vendor</button>
            </div>
          </div>

          <div className="f-container">
            <h2>Our Location</h2>
            <a href="#" className="text-2xl py-2 block">
              <i className="fas fa-angle-right"></i>Delhi
            </a>
            <a href="#" className="text-2xl py-2 block">
              <i className="fas fa-angle-right"></i>Vadodara
            </a>
            <a href="#" className="text-2xl py-2 block">
              <i className="fas fa-angle-right"></i>Mumbai
            </a>
            <a href="#" className="text-2xl py-2 block">
              <i className="fas fa-angle-right"></i>Ahamdabad
            </a>
            <a href="#" className="text-2xl py-2 block">
              <i className="fas fa-angle-right"></i>Surat
            </a>
          </div>

          <div className="f-container ">
            <h2>Our Newsletter</h2>
            <p className="font-bold">Subscribe for latest updates</p>
            <input type="text " placeholder="Enter Your Email " />
            <button className="btn ">Subscribe</button>
          </div>
        </div>
      </footer>
      <div className="copyright ">
        <p>Copyright ©2023 All Rights Reserved | Dilip Baghel</p>
      </div>
    </>
  );
}

export default Footer;
