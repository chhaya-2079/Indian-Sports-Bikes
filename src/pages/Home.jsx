import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-tag">INDIAN SPORTS BIKES</p>

          <h1>
            Experience the Thrill of
            <span> Indian Sports Bikes</span>
          </h1>

          <p className="hero-description">
            Explore powerful machines built for speed, performance, technology
            and the ultimate riding experience.
          </p>

          <Link to="/categories" className="hero-button">
            Explore Bikes
          </Link>
        </div>
      </section>

      {/* Featured Bikes */}
      <section className="featured-section">
        <div className="section-heading">
          <p>EXPLORE OUR PICKS</p>
          <h2>Featured Bikes</h2>
        </div>

        <div className="featured-grid">
          <article className="bike-card">
            <div className="bike-image">
              <img
                src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=900&q=80"
                alt="Sports motorcycle"
              />
            </div>

            <div className="bike-card-content">
              <p>ROYAL ENFIELD</p>
              <h3>Continental GT 650</h3>
              <span>648cc • Parallel Twin</span>

              <Link to="/bike/1" className="card-button">
                View Details
              </Link>
            </div>
          </article>

          <article className="bike-card">
            <div className="bike-image">
              <img
                src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=80"
                alt="KTM 390 Duke"
              />
            </div>

            <div className="bike-card-content">
              <p>KTM</p>
              <h3>390 Duke</h3>
              <span>399cc • Single Cylinder</span>

              <Link to="/bike/2" className="card-button">
                View Details
              </Link>
            </div>
          </article>

          <article className="bike-card">
            <div className="bike-image">
              <img
                src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=900&q=80"
                alt="Indian sports motorcycle"
              />
            </div>

            <div className="bike-card-content">
              <p>TVS</p>
              <h3>Apache RR 310</h3>
              <span>312cc • Single Cylinder</span>

              <Link to="/bike/3" className="card-button">
                View Details
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Home;
