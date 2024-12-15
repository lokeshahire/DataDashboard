import React, { useState, useEffect } from "react";

const Sort = ({ sortData, clearSort }) => {
  const [sortOption, setSortOption] = useState("engagement");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    sortData(sortOption, sortOrder);
  }, [sortOption, sortOrder, sortData]);

  const handleClear = () => {
    setSortOption("engagement");
    setSortOrder("asc");
    clearSort();
  };

  return (
    <div className="sort-container">
      <div className="sort-select">
        <select
          className="selectsort"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="engagement">Engagement</option>
          <option value="reach">Reach</option>
        </select>

        <select
          className="selectsort ms-4"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="asc">Asc</option>
          <option value="desc">Desc</option>
        </select>
      </div>
      <button onClick={handleClear}>Clear</button>
    </div>
  );
};

export default Sort;
