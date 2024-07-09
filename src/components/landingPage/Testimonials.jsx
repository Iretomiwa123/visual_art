import React from "react";
import Image from "@/assets/Ellipse 2.png";

const testimonialsData = [
  { src: Image, alt: "Customer 1", size: "smaller" },
  { src: Image, alt: "Customer 2", size: "small" },
  { src: Image, alt: "Customer 3", size: "large" },
  { src: Image, alt: "Customer 4", size: "small" },
  { src: Image, alt: "Customer 5", size: "smaller" },
];

const TestimonialImage = ({ src, alt, size }) => {
  console.log(src);
  return (
    <div className="col-md-2 col-sm-3 mb-3">
      <img src={src} className={`img-fluid ${size}-image`} alt={alt} />
    </div>
  );
};

const Testimonials = () => (
  <div className="wrapper100">
    <section id="customer-testimonials">
      <div className="container text-center">
        <div className="row justify-content-center mt-4">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialImage key={index} {...testimonial} />
          ))}
        </div>
        <div className="text-center mt-4">
          <div className="stars">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </div>
          <p>
            The artworks represent everything that we are, it brings out our
            brand identity.
          </p>
          <p className="tex">Mark Spenser</p>
        </div>
      </div>
    </section>
  </div>
);

export default Testimonials;
