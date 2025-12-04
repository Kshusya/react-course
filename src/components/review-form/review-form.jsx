import {
  useForm,
  UPDATE_NAME_ACTION,
  UPDATE_ADRESS_ACTION,
  UPDATE_TEXT_ACTION,
} from "../review-form/use-form.js";
import { Counter } from "../counter/counter.jsx";
import { useReviewCounter } from "../counter/use-review-counter.js";

export const ReviewForm = () => {
  const { name, adress, text, dispatch } = useForm();

  const [count, increment, decrement] = useReviewCounter();

  return (
    <div>
      <Counter count={count} increment={increment} decrement={decrement} />
      <form>
        <div>
          <label>name</label>
          <input
            value={name}
            onChange={(e) => {
              dispatch({ payload: e.target.value, type: UPDATE_NAME_ACTION });
            }}
          />
        </div>
        <div>
          <label>adress</label>
          <input
            value={adress}
            onChange={(e) => {
              dispatch({ payload: e.target.value, type: UPDATE_ADRESS_ACTION });
            }}
          />
        </div>
        <div>
          <label>text</label>
          <input
            value={text}
            onChange={(e) => {
              dispatch({ payload: e.target.value, type: UPDATE_TEXT_ACTION });
            }}
          />
        </div>
        <button
          type="button"
          onClick={() => {
            dispatch({ type: "CLEAR_ACTION" });
          }}
        >
          clear
        </button>
      </form>
    </div>
  );
};
