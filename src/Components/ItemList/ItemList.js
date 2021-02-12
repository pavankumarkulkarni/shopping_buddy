import React from "react";

const ItemList = ({ items, dispatch }) => {
  const itemsDisplay = items.map((item) => {
    return (
      <div key={item.id} className="itemlist">
        <h5>{item.name}</h5>
        <button
          type="button"
          onClick={() => dispatch({ type: "EDIT_ITEM", payload: item })}
        >
          <img
            src="https://img.icons8.com/material-rounded/12/000000/edit--v1.png"
            alt="edit"
          />
        </button>
        <button
          type="button"
          onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item.id })}
        >
          <img
            src="https://img.icons8.com/ios-glyphs/12/000000/delete-sign.png"
            alt="delete"
          />
        </button>
      </div>
    );
  });
  return (
    <div>
      <h4>Item List</h4>
      {itemsDisplay.length > 0 ? (
        itemsDisplay
      ) : (
        <h5> Add items to the list </h5>
      )}
    </div>
  );
};

export default ItemList;
