import React from "react";

function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  const buttons = categories.map(category => (
    <button
      key={category}
      className={category === selectedCategory ? "selected" : null}
      onClick={() => onSelectCategory(category)}
    >
      {category}
    </button>
  ));

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttons}
    </div>
  );
}

export default CategoryFilter;
