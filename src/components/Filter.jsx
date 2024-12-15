import React from "react";

const Filter = ({ filterByCategory, filterByEngagement }) => {
  return (
    <div className="filter-container">
      <h1 className="datatitle d-block d-md-none">Data Dashboard</h1>

      <select onChange={(e) => filterByCategory(e.target.value)}>
        <option value="">All Categories</option>
        <option value="Tech">Tech</option>
        <option value="Fashion">Fashion</option>
        <option value="Sports">Sports</option>
      </select>
      <h1 className="datatitle d-none d-md-block">Data Dashboard</h1>

      <select onChange={(e) => filterByEngagement(e.target.value)}>
        <option value="">All Engagements</option>
        <option value="0-1000">0–1000</option>
        <option value="1000-5000">1000–5000</option>
      </select>
    </div>
  );
};

export default Filter;
