import React, { lazy, Suspense, useState } from "react";

const LazyAbout = lazy(() => import("./LazyAbout"));
const LazyContact = lazy(() => import("./LazyContact"));

export default function LazyHome() {
  const [page, setPage] = useState("home");

  return (
    <div className="card">
      <h3>Lazy Loading Example</h3>
      <div className="nav">
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("about")}>About</button>
        <button onClick={() => setPage("contact")}>Contact</button>
      </div>

      <Suspense fallback={<p>Loading halaman...</p>}>
        {page === "home" && <p>Ini halaman Home.</p>}
        {page === "about" && <LazyAbout />}
        {page === "contact" && <LazyContact />}
      </Suspense>
    </div>
  );
}
