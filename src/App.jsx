import React from "react";
import Home from "./pages/Home/Home";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="w-full min-h-screen bg-black">
          <Home />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
