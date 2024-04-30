import React from "react";

const Menu = ({ items }) => {
  return (
    <div className="section-center featured-center">
      {items.map((menuItem) => {
        const { id, title, image } = menuItem;
        return (
          <article className="tour-card">
            <div key={id} className="tour-img-container">
              <img src={image} className="tour-img" alt={title} />
            </div>
            <div className="tour-info">
              <div className="tour-title">
                <h4>{title}</h4>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
