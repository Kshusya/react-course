import { useProgress } from "./use-progress";
import styles from "./progressBar.module.css";

export const ProgressBar = () => {
  const progress = useProgress();

  return <div className={styles.ProgressBar} style={{ width: progress }}></div>;
};
