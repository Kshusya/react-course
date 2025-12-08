import styles from "./button.module.css";
import classNames from "classnames";

export const Button = ({
  children,
  onClick,
  type = "button",
  disabled = false,
  size,
  className = "",
}) => {
  const buttonClass = classNames(
    styles.button,
    {
      [styles.buttonSmall]: size === "small",
      [styles.buttonMedium]: size === "medium",
      [styles.buttonLarge]: size === "large",
    },
    className
  );

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      size={size}
      className={buttonClass}
    >
      {children}
    </button>
  );
};
