import { useReducer } from "react";

const MIN_COUNT = 1;
const MAX_COUNT = 5;

const INITIAL_FORM = {
  name: "",
  text: "",
  adress: "",
  count: MIN_COUNT,
};

export const UPDATE_NAME_ACTION = "UPDATE_NAME_ACTION";
export const UPDATE_ADRESS_ACTION = "UPDATE_ADRESS_ACTION";
export const UPDATE_TEXT_ACTION = "UPDATE_TEXT_ACTION";
export const CLEAR_ACTION = "CLEAR_ACTION";
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

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
    case INCREMENT:
      return { ...state, count: Math.min(state.count + 1, MAX_COUNT)};
    case DECREMENT:
      return { ...state, count: Math.max(MIN_COUNT, state.count - 1) };
    default:
      return state;
  }
};

export const useForm = () => {
  const [form, dispatch] = useReducer(reducer, INITIAL_FORM);

  const { name, adress, text, count } = form;

  return {
    name,
    adress,
    text,
    count,
    dispatch,
  };
};
