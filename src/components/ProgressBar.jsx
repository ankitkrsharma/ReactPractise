import { useEffect, useState } from "react";
import "./ProgressBar.css";

export default function ProgressBar({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(onComplete, 300);
      return;
    }
    const timer = setTimeout(() => setProgress((p) => p + 2), 40);
    return () => clearTimeout(timer);
  }, [progress, onComplete]);

  return (
    <div className="progress-overlay">
      <div className="progress-label">Loading MyTechPager...</div>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>
      <div className="progress-percent">{progress}%</div>
    </div>
  );
}