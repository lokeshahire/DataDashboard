import React from "react";

const ItemModal = ({ item, setSelectedItem }) => {
  const { name, likes, shares, comments, followers, category, location } = item;
  const engagement = likes + shares + comments;
  const reach = (followers * engagement) / 100;

  return (
    <div className="modal-overlay" onClick={() => setSelectedItem(null)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-center">{name}</h2>
        <hr />
        <p>
          <strong>Likes:</strong> {likes}
        </p>
        <p>
          <strong>Share:</strong> {shares}
        </p>
        <p>
          <strong>Comments:</strong> {comments}
        </p>
        <p>
          <strong>Followers:</strong> {followers}
        </p>
        <p>
          <strong>Engagement Score:</strong> {engagement}
        </p>
        <p>
          <strong>Reach:</strong> {reach}
        </p>
        <p>
          <strong>Category:</strong> {category}
        </p>
        <p>
          <strong>Location:</strong> {location}
        </p>
        <button onClick={() => setSelectedItem(null)}>Close</button>
      </div>
    </div>
  );
};

export default ItemModal;
