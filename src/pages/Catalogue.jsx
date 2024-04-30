import React, { useState } from "react";
import Menu from "../components/Menu";
import Categories from "../components/Categories";
import { itemspro } from "../data";
import Title from "../components/Title";

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
        <Title title="" subTitle="our products 2" />

        <Categories categories={categories} filterItems={filterItems} />

        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default Catalogue;
