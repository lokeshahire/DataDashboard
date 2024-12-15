import React from "react";

const ItemCard = ({ item, setSelectedItem }) => {
  const { name, likes, shares, comments, followers, category, location } = item;
  const engagement = likes + shares + comments;
  const reach = (followers * engagement) / 100;

  return (
    <div className="item-card">
      <h3>{name}</h3>
      <p>Engagement Score: {engagement}</p>
      <p>Reach: {reach}</p>
      <p>Category: {category}</p>
      <p>Location: {location}</p>
      <button onClick={() => setSelectedItem(item)}>View Details</button>
    </div>
  );
};

export default ItemCard;
