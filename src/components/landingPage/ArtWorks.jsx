import React from "react";
import { useNavigate } from "react-router-dom";
import "@/assets/css/index.css";
import artworks from "@/data/artworks";

const ArtworkCard = ({ id, src, alt, title, artist, price }) => {
  const navigate = useNavigate();

  const handleBuyClick = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (!cart.includes(id)) {
      cart.push(id);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    navigate("/cart");
  };

  return (
    <div className="set col-lg-6 col-md-6 mb-6">
      <img
        src={src}
        className="img-fluid w-full"
        style={{ width: "100%" }}
        alt={alt}
      />
      <button
        onClick={handleBuyClick}
        className="btn btn-lg btn-custom-primary"
      >
        BUY ART WORKS
      </button>
      <h5 className="mt-2">
        <b>{title}</b>
      </h5>
      <p>{artist}</p>
      <p>{price}</p>
    </div>
  );
};

const ArtWorks = () => (
  <div>
    <div id="globe">
      <div className="overlay"></div>
      <section id="globe-discover" className="py-5">
        <div className="container">
          <h2>Enjoy wall arts by culturally diverse artists</h2>
          <a href="#gallery" className="btn btn-lg btn-custom-primary my-4">
            BUY ART WORKS
          </a>
        </div>
      </section>
    </div>

    <div id="gallery">
      <div className="wrapper80">
        <section className="gallery py-5">
          <div className="container">
            <h3 className="text-center mb-4">Discover New Arts</h3>
            <div className="body row mt-6">
              {artworks.map((artwork, index) => (
                <ArtworkCard key={index} {...artwork} />
              ))}
            </div>
            <div className="text-center mt-4">
              <a href="#gallery" className="btn btn-custom-black btn-lg">
                VIEW ALL
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
);

export default ArtWorks;
