export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const olditem = action.payload.name;
      const newItem =
        olditem.charAt(0).toUpperCase() + olditem.substr(1).toLowerCase();
      return {
        ...state,
        items: [...state.items, { ...action.payload, name: newItem }],
        showModal: true,
        modalText: "Item added",
        modalType: "SUCCESS",
      };
    case "REMOVE_ITEM":
      const newItems = state.items.filter((item) => item.id !== action.payload);
      return {
        ...state,
        items: [...newItems],
        showModal: true,
        modalText: "Item Removed",
        modalType: "WARNING",
      };
    case "ENTER_ITEM":
      return {
        ...state,
        showModal: true,
        modalText: "Enter item to Add",
        modalType: "WARNING",
      };
    case "EDIT_ITEM":
      return {
        ...state,
        editItem: action.payload,
      };
    case "SAVE_ITEM":
      const editedItem = {
        id: action.payload.id,
        name:
          action.payload.name.charAt(0).toUpperCase() +
          action.payload.name.substr(1).toLowerCase(),
      };
      const filterItems = state.items.map((item) => {
        if (item.id === editedItem.id) {
          return editedItem;
        } else {
          return item;
        }
      });
      return {
        ...state,
        editItem: {},
        items: [...filterItems],
        showModal: true,
        modalText: "Item edited",
        modalType: "SUCCESS",
      };
    case "DISMISS_MODAL":
      return {
        ...state,
        showModal: false,
      };
    default:
      return state;
  }
};
