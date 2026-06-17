import { useState, useEffect } from "react";
import TechnoCard from "./TechnoCard";
import TechPager from "./TechPager";

const Task = () => {
  const [showProgress, setShowProgress] = useState(false);
  const [showPager, setShowPager] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleQRClick = () => {
    setShowProgress(true);
  };

  useEffect(() => {
    if (!showProgress) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 10;
        }

        clearInterval(interval);
        setShowPager(true);
        return 100;
      });
    }, 300);

    return () => clearInterval(interval);
  }, [showProgress]);

  if (showPager) {
    return <TechPager />;
  }

  let progressBar = null;

  if (showProgress) {
    progressBar = (
      <div className="container mt-4">
        <h2 className="text-center mb-3">
          Loading Tech Pager...
        </h2>

        <div className="progress">
          <div
            className="progress-bar progress-bar-striped progress-bar-animated"
            role="progressbar"
            style={{ width: `${progress}%` }}
            aria-valuenow={progress}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {progress}%
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <TechnoCard onQRClick={handleQRClick} />
      {progressBar}
    </>
  );
};

export default Task;