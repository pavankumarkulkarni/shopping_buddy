import React from "react";

const Form = ({ dispatch, editItem }) => {
  const inputRef = React.useRef(null);
  const [item, setItem] = React.useState("");
  React.useEffect(() => {
    if (editItem.name) {
      setItem(editItem.name);
    }
  }, [editItem.name]);

  React.useEffect(() => {
    inputRef.current.focus();
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editItem.id) {
      e.preventDefault();
      dispatch({
        type: "SAVE_ITEM",
        payload: { id: editItem.id, name: item },
      });
      setItem("");
    } else if (item) {
      const newItem = {
        id: new Date().getTime().toString(),
        name: item,
      };
      dispatch({ type: "ADD_ITEM", payload: newItem });

      setItem("");
    } else {
      dispatch({ type: "ENTER_ITEM" });
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        ref={inputRef}
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      {editItem.id ? (
        <button type="submit" className="formBtn editBtn">
          Edit
        </button>
      ) : (
        <button type="submit" className="formBtn">
          Add
        </button>
      )}
    </form>
  );
};

export default Form;
