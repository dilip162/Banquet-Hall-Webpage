import "./Venues.css";

function Venues() {
  return (
    <>
      <section className="venue" id="venue">
        <div className="title">
          <h1>
            <span>V</span>ENUES
          </h1>
        </div>
        <div className="venue-list">
          <div className="venue-box">
            <img
              src="https://images.pexels.com/photos/14036440/pexels-photo-14036440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="img"
            />
            <div className="venue-info">
              <h2>Goa</h2>
              <p>Azaya Beach Resort, Goa</p>
              <button className="btn">More Info</button>
            </div>
          </div>
          <div className="venue-box">
            <img
              src="https://gos3.ibcdn.com/bb0c53402c3811e9a93d0242ac110003.jpg"
              alt="img"
            />
            <div className="venue-info">
              <h2>Jaipur</h2>
              <p>The Raj Palace</p>
              <button className="btn">More Info</button>
            </div>
          </div>
          <div className="venue-box">
            <img
              src="https://static3-clubmahindra.gumlet.io/storage/app/media/360%20videos/UDAI_View%202.jpg?w=320&dpr=2.6"
              alt="img"
            />
            <div className="venue-info">
              <h2>Udaipur</h2>
              <p>Taj Aravalli Resort and Spa</p>
              <button className="btn">More Info</button>
            </div>
          </div>
          <div className="venue-box">
            <img
              src="https://assets.traveltriangle.com/blog/wp-content/uploads/2017/11/Hotel-Mount-View.jpg"
              alt="img"
            />
            <div className="venue-info">
              <h2>chandigarh</h2>
              <p>Prince Palace Hotel</p>
              <button className="btn">More Info</button>
            </div>
          </div>
          <div className="venue-box">
            <img
              src="https://www.hlimg.com/images/stories/738X538/15-2.jpg"
              alt="img"
            />
            <div className="venue-info">
              <h2>Mumbai</h2>
              <p>Grand Banquet, Chembur</p>
              <button className="btn">More Info</button>
            </div>
          </div>
          <div className="venue-box">
            <img
              src="https://vowsnviews.com/media/listing/photos/noormahal6.jpg"
              alt="img"
            />
            <div className="venue-info">
              <h2>Delhi</h2>
              <p>The Holiday Inn</p>
              <button className="btn">More Info</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Venues;
