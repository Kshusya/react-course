import { useReducer } from "react";

const INITIAL_FORM = {
  name: "",
  text: "",
  adress: "",
};

export const UPDATE_NAME_ACTION = "UPDATE_NAME_ACTION";
export const UPDATE_ADRESS_ACTION = "UPDATE_ADRESS_ACTION";
export const UPDATE_TEXT_ACTION = "UPDATE_TEXT_ACTION";
export const CLEAR_ACTION = "CLEAR_ACTION";

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_NAME_ACTION:
      return { ...INITIAL_FORM, name: payload };
    case UPDATE_ADRESS_ACTION:
      return { ...state, adress: payload };
    case UPDATE_TEXT_ACTION:
      return { ...state, text: payload };
    case CLEAR_ACTION:
      return INITIAL_FORM;
    default:
      return state;
  }
};

export const useForm = () => {
  const [form, dispatch] = useReducer(reducer, INITIAL_FORM);

  const { name, adress, text } = form;

  return {
    name,
    adress,
    text,
    dispatch,
  };
};
