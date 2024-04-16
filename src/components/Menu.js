import React from "react";

const Menu = ({ items }) => {
  return (
    <div className="section">
      <div className="grid-container">
        <div className="grid-x grid-padding-x grid-margin-y">
          {items.map((menuItem) => {
            const { id, title, image } = menuItem;
            return (
              <a href="/" className="card">
                <div key={id} className="card__image">
                  <img src={image} alt={title} />
                </div>
                <h2 className="card__title">{title}</h2>
                <div className="card__content">
                  <p>text</p>
                  <span>
                    Inquire now
                    <i class="far fa-question-circle"></i>
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Menu;
