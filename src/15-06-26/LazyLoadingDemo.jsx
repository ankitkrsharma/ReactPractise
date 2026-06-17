import React, { lazy, Suspense, useState } from "react";


const UseRefDemo = lazy(() => {console.log("Loaded UseRefDemo (Child Component) "); return import("./UseRefDemo")});

export default function LazyLoadingDemo() {
  const [show, setShow] = useState(false);

  return (
    <div >
      <button onClick={() => setShow(true)}>
        Load Component
      </button>

      <Suspense fallback={<h2>Loading...</h2>}>
        {show && <UseRefDemo />}
      </Suspense>
    </div>
  );
} 