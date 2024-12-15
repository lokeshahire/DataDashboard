import React, { useState } from "react";
import ItemCard from "./ItemCard";
import ItemModal from "./ItemModal";
import Filter from "./Filter";
import Sort from "./Sort";
import initialData from "../data/mockData.json";

const Dashboard = () => {
  const [data, setData] = useState(initialData);
  const [filteredData, setFilteredData] = useState(initialData);
  const [selectedItem, setSelectedItem] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [engagementFilter, setEngagementFilter] = useState("");
  const [sortBy, setSortBy] = useState(null);

  const filterByCategory = (category) => {
    setCategoryFilter(category);
    const filtered = initialData.filter((item) =>
      category ? item.category === category : true
    );
    setFilteredData(filtered);
  };

  const filterByEngagement = (range) => {
    setEngagementFilter(range);
    let filtered = [...initialData];
    if (range === "0-1000") {
      filtered = filtered.filter(
        (item) => item.likes + item.shares + item.comments <= 1000
      );
    } else if (range === "1000-5000") {
      filtered = filtered.filter(
        (item) =>
          item.likes + item.shares + item.comments > 1000 &&
          item.likes + item.shares + item.comments <= 5000
      );
    }
    setFilteredData(filtered);
  };

  const sortData = (key, order) => {
    setSortBy({ key, order });
    const sortedData = [...filteredData].sort((a, b) => {
      const valueA =
        key === "engagement" ? a.likes + a.shares + a.comments : a.followers;
      const valueB =
        key === "engagement" ? b.likes + b.shares + b.comments : b.followers;
      return order === "asc" ? valueA - valueB : valueB - valueA;
    });
    setFilteredData(sortedData);
  };

  const clearSort = () => {
    setSortBy(null);
    setFilteredData(data);
  };

  return (
    <div className="dashboard">
      <Filter
        filterByCategory={filterByCategory}
        filterByEngagement={filterByEngagement}
      />
      <Sort sortData={sortData} clearSort={clearSort} />
      <div className="cards-container">
        {filteredData.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
            setSelectedItem={setSelectedItem}
          />
        ))}
      </div>
      {selectedItem && (
        <ItemModal item={selectedItem} setSelectedItem={setSelectedItem} />
      )}
    </div>
  );
};

export default Dashboard;
