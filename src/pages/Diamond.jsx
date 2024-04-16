import React, { useState } from "react";
import Menu from "../components/Menu";
import Categories from "../components/Categories";
import { itemsdiam } from "../data";
import Title from "../components/Title";
const allCategories = [
  "all",
  ...new Set(itemsdiam.map((item) => item.SubCategory)),
];

function Diamond() {
  const [menuItems, setMenuItems] = useState(itemsdiam);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (SubCategory) => {
    if (SubCategory === "all") {
      setMenuItems(itemsdiam);
      return;
    }
    const newItems = itemsdiam.filter(
      (item) => item.SubCategory === SubCategory
    );
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <Title title="loose" subTitle="diamonds" />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default Diamond;
