import React from "react";

const featuresData = [
  {
    icon: "fa-shield",
    title: "Cultural Diversity",
    description: "African, black & other underrepresented artists.",
  },
  {
    icon: "fa-money",
    title: "Affordable",
    description: "High-quality artworks. Get your money's worth!",
  },
  {
    icon: "fa-rocket",
    title: "Exciting",
    description: "Art+tech experiences Art with Augmented Reality.",
  },
  {
    icon: "fa-heart",
    title: "5% of Profit",
    description: "Supports child artists and sponsors growing talents.",
  },
];

const FeatureCard = ({ icon, title, description }) => (
  <div className="col-lg-3 col-md-6 mb-4">
    <i className={`icon fa ${icon} fa-2x mb-3`} style={{ color: "black" }}></i>
    <h5>
      <b>{title}</b>
    </h5>
    <p>{description}</p>
  </div>
);

const Features = () => (
  <div className="wrapper100">
    <section id="artist-class2" className="py-5">
      <div className="container text-center">
        <h3>Why You'll Love Art World</h3>
        <div className="row mt-4">
          {featuresData.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Features;
