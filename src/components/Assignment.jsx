import { useState, useEffect } from "react";
import TechnoCard from "./TechnoCard";
import TechPager from "./TechPager";


export default function Assignment() {
    const [page, setPage] = useState("card");
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (page !== "loading") return;

        if (progress >= 100) {
            setTimeout(() => setPage("pager"), 300);
            return;
        }
        const timer = setTimeout(() => setProgress((p) => p + 2), 40);
        return () => clearTimeout(timer);
    }, [page, progress]);

    return (
        <>
            {page === "card" && (
                <TechnoCard onQRClick={() => setPage("loading")} />
            )}

            {page === "loading" && (
                <div className="d-flex flex-column justify-content-center align-items-center vh-100">
                    <h4 className="mb-3">Loading MyTechPager...</h4>

                    <div className="progress w-50">
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
            )}

            {page === "pager" && <TechPager />}
        </>
    );
}