import { useState, useEffect } from "react";
import TechnoCard from "./TechnoCard";
import TechPager from "./TechPager";

const Task = () => {
  const [showProgress, setShowProgress] = useState(false);
  const [showPager, setShowPager] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleQRClick = () => {
    if (showProgress) return;
    setShowProgress(true);
    setProgress(0);
  };

  useEffect(() => {
    if (!showProgress) return;
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 10;
        if (next >= 100) {
          clearInterval(interval);
          setShowPager(true);
          return 100;
        }
        return next;
      });
    }, 250);
    return () => clearInterval(interval);
  }, [showProgress]);

  if (showPager) return <TechPager />;

  return (
    <>
      <TechnoCard onQRClick={handleQRClick} />
      {showProgress && (
        <div className="tc-progress-overlay">
          <div className="tc-progress-title">Loading My TechPager...</div>
          <div className="tc-progress-track">
            <div
              className="tc-progress-bar"
              style={{ width: `${progress}%` }}
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              {progress}%
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Task;