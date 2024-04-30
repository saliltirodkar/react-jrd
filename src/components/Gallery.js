import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Title from "./Title";

const images = [
  "https://jrdiamgroup.com/wp-content/uploads/2021/06/8e.jpg",
  "https://jrdiamgroup.com/wp-content/uploads/2021/05/5.jpg",
  "https://jrdiamgroup.com/wp-content/uploads/2021/05/00-1.jpg",
  "https://jrdiamgroup.com/wp-content/uploads/2021/06/93.jpg",
  "https://jrdiamgroup.com/wp-content/uploads/2021/05/2-2.jpg",
  //   "https://jrdiamgroup.com/wp-content/uploads/2021/05/4t.jpg",
  "https://jrdiamgroup.com/wp-content/uploads/2021/05/2-2.jpg",
  "https://jrdiamgroup.com/wp-content/uploads/2021/05/4.jpg",
  "https://jrdiamgroup.com/wp-content/uploads/2021/05/5.jpg",
  "https://jrdiamgroup.com/wp-content/uploads/2021/05/4.jpg",
];

const Gallery = () => {
  return (
    <section className="section services" id="services">
      <Title title="" subTitle="our products" />
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 2, 900: 3 }}>
        <Masonry gutter="10px">
          {images.map((image, i) => (
            <img
              key={i}
              src={image}
              style={{
                width: "100%",
                display: "block",
                boxShadow: "var(--light-shadow)",
                // "0 3px 6px 0 rgba(0, 0, 0, 0.2), 0 4px 15px 0 rgba(0, 0, 0, 0.19)",
              }}
              className="product-masonry"
              alt=""
            />
          ))}
        </Masonry>
        {/* <a href="#tours" className="btn hero-btn ">
          explore Products
        </a> */}
      </ResponsiveMasonry>
    </section>
  );
};

export default Gallery;
