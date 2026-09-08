import { Link } from "react-router-dom";
import bikes from "../data/bikes";

function Categories() {
  const categories = [
    "Street Bikes",
    "Supersport Bikes",
    "Naked Bikes",
    "Adventure Bikes",
    "Performance Bikes",
  ];

  return (
    <main className="categories-page">
      <div className="section-heading">
        <p>EXPLORE OUR COLLECTION</p>
        <h1>Bike Categories</h1>
      </div>

      {categories.map((category) => {
        const categoryBikes = bikes.filter(
          (bike) => bike.category === category,
        );

        return (
          <section className="category-section" key={category}>
            <div className="category-heading">
              <p>EXPLORE</p>
              <h2>{category}</h2>
            </div>

            <div className="categories-grid">
              {categoryBikes.map((bike) => (
                <article className="bike-card" key={bike.id}>
                  <div className="bike-image">
                    <img src={bike.image} alt={bike.name} />
                  </div>

                  <div className="bike-card-content">
                    <p>{bike.brand}</p>

                    <h3>{bike.name}</h3>

                    <span>
                      {bike.engine} • {bike.power}
                    </span>

                    <Link to={`/bike/${bike.id}`} className="card-button">
                      View Details
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        );
      })}
    </main>
  );
}

export default Categories;
