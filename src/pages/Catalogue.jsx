import React, { useState } from "react";
import Menu from "../components/Menu";
import Categories from "../components/Categories";
import { itemspro } from "../data";
import Title from "../components/Title";
import Tour from "../components/Tour";
const allCategories = [
  "all",
  ...new Set(itemspro.map((item) => item.SubCategory)),
];

function Catalogue() {
  const [menuItems, setMenuItems] = useState(itemspro);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (SubCategory) => {
    if (SubCategory === "all") {
      setMenuItems(itemspro);
      return;
    }
    const newItems = itemspro.filter(
      (item) => item.SubCategory === SubCategory
    );
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <Title title="our" subTitle="products 1" />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />

        <Title title="our" subTitle="products 2" />
        <div className="section-center featured-center">
          {itemspro.map((tour) => {
            return <Tour {...tour} key={tour.id} />;
          })}
        </div>
      </section>
    </main>
  );
}

export default Catalogue;
