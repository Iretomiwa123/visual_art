import React from "react";

const Banner = () => {
  return (
    <div class="hero wrapper100">
      <div id="hero">
        <div class="overlay"></div>
        {/* Added overlay */}
        <section id="hero text-center py-5 wrapper100">
          <div class="container wrapper50">
            <h1 class="display-4 wrapper 60">New Artworks this Season</h1>
            <p>
              Bring joy and creativity into your space with artworks from new
              and{" "}
            </p>
            <p>emerging artists such as Jexways, Ghalavanqche, and more!</p>
            <a href="#gallery" class="btn btn-lg btn-custom-black">
              DISCOVER NEW ARTS
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Banner;
