import React from "react";
import FetchDataTask from "./components/FetchDataTask";
import AxiosDataTask from "./components/AxiosDataTask";
import LoadingErrorTask from "./components/LoadingErrorTask";
import AbortControllerTask from "./components/AbortControllerTask";
import ManipulateJSONTask from "./components/ManipulateJSONTask";

function App() {
  return (
    <div style={{
      maxWidth: "800px",
      margin: "0 auto",
      fontFamily: "Arial, sans-serif",
      lineHeight: "1.6"
    }}>
     

      <FetchDataTask />
      <hr />
      <AxiosDataTask />
      <hr />
      <LoadingErrorTask />
      <hr />
      <AbortControllerTask />
      <hr />
      <ManipulateJSONTask />
    </div>
  );
}

export default App;
