import { useParams, Link } from "react-router-dom";
import bikes from "../data/bikes";

function BikeDetails() {
  const { id } = useParams();

  const bike = bikes.find((bike) => bike.id === Number(id));

  if (!bike) {
    return (
      <main className="details-page">
        <h1>Bike Not Found</h1>
        <Link to="/categories">Back to Categories</Link>
      </main>
    );
  }

  return (
    <main className="details-page">
      <section className="details-container">
        <div className="details-image">
          <img src={bike.image} alt={bike.name} />
        </div>

        <div className="details-content">
          <p className="section-tag">{bike.brand}</p>

          <h1>{bike.name}</h1>

          <p className="details-category">{bike.category}</p>

          <h2>{bike.price}</h2>

          <p className="details-description">{bike.description}</p>

          <div className="specs-grid">
            <div>
              <strong>Engine</strong>
              <span>{bike.engine}</span>
            </div>

            <div>
              <strong>Power</strong>
              <span>{bike.power}</span>
            </div>

            <div>
              <strong>Torque</strong>
              <span>{bike.torque}</span>
            </div>

            <div>
              <strong>Mileage</strong>
              <span>{bike.mileage}</span>
            </div>

            <div>
              <strong>Top Speed</strong>
              <span>{bike.topSpeed}</span>
            </div>

            <div>
              <strong>Weight</strong>
              <span>{bike.weight}</span>
            </div>

            <div>
              <strong>Fuel Tank</strong>
              <span>{bike.fuel}</span>
            </div>

            <div>
              <strong>Transmission</strong>
              <span>{bike.transmission}</span>
            </div>
          </div>

          <Link to="/categories" className="details-button">
            Back to Categories
          </Link>
        </div>
      </section>
    </main>
  );
}

export default BikeDetails;
