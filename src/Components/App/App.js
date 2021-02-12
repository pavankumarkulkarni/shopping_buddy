import React from "react";
import Header from "../Header/Header";
import Form from "../Form/Form";
import ItemList from "../ItemList/ItemList";
import { reducer } from "../reducer/reducer";
import Modal from "../Modal/Modal";

const initState = {
  items: [],
  showModal: false,
  modalText: "",
  modalType: "",
  editItem: {},
};

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, initState);
  return (
    <div className="container">
      {state.showModal && (
        <Modal
          text={state.modalText}
          type={state.modalType}
          dispatch={dispatch}
        />
      )}
      <Header />
      <Form dispatch={dispatch} editItem={state.editItem} />
      {state.items && <ItemList items={state.items} dispatch={dispatch} />}
    </div>
  );
};

export default App;
