import {
  useForm,
  UPDATE_NAME_ACTION,
  UPDATE_ADRESS_ACTION,
  UPDATE_TEXT_ACTION,
} from "../review-form/use-form.js";
import { Counter } from "../counter/counter.jsx";
import { Button } from "../button/button.jsx";
import styles from "../button/button.module.css";

export const ReviewForm = () => {
  const { name, adress, text, count, dispatch } = useForm();

  return (
    <div>
      <Counter
        count={count}
        increment={() => dispatch({ type: "INCREMENT" })}
        decrement={() => dispatch({ type: "DECREMENT" })}
      />
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
        <Button className={styles.dangerButton} size={"medium"} onClick={() => dispatch({ type: "CLEAR_ACTION" })}>
          clear
        </Button>
      </form>
    </div>
  );
};
