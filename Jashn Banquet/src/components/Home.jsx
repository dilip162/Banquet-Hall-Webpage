import "./Home.css";
function Home() {
  return (
    <>
      <section className="home" id="home">
        <form action="#">
          <div className="search-box">
            <h1>Where Moments Become Memories</h1>
            <p>- Your Perfect Banquet Destination</p>
            <select type="text" className="search-field">
              <option disabled selected>
                Select event type
              </option>
              <option value="Wedding">Wedding celebrations</option>
              <option value="Corporate">Corporate party</option>
              <option value="Birthday">Birthday party</option>
              <option value="Reuion">Reuion party</option>
              <option value="Reception">Reception party</option>
            </select>
            <select type="text" className="search-field">
              <option disabled selected>
                City
              </option>
              <option value="Anand">Anand</option>
              <option value="Ahemdabad">Ahemdabad</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Baroda">Baroda</option>
              <option value="Goa">Goa</option>
            </select>
            <button className="btn">Search</button>
          </div>
        </form>
      </section>

      <section className="about" id="about">
        <div className="title">
          <h1>WELCOME TO JASHN BANQUET</h1>
        </div>

        <p>
          Jashn Banquet is one of the most contemporary and technologically
          advanced banquet halls in India. We offer specialized, all inclusive
          amenities and services which set us apart from the competition.
          Whether it is lounging at our custom bridal suite after a photoshoot
          or our one of a kind speaker system designed to project sound only at
          the dance floor, we have considered every detail and perfected your
          experience at Jashn. We take pride in the versatility and quality of
          our venue and services. Our management and staff work tirelessly to
          ensure that all events go above and beyond your expectations. Whether
          it’s a corporate event or your wedding day, let’s make it a one of a
          kind experience.
        </p>
      </section>
    </>
  );
}

export default Home;
