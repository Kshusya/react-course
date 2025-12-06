import { useProgress } from "./use-progress";

export const ProgressBar = () => {
  const progress = useProgress();

  return <div className="progress-bar" style={{ width: progress }}></div>;
};
