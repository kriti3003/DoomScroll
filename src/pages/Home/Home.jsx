import React from "react";
import { Route, Routes } from "react-router-dom";
import LargeNav from "../../Components/Header/LargeNav/LargeNav";
import Feed from "./Home/Feed/Feed";

const Home = () => {
  return (
    <div className="w-full min-h-screen flex items-start justify-between lg:gap-x-32 md:gap-x-16 sm:gap-x-8 gap-x-4 relative">
      <div className="lg:w-[16%] md:w-[17%] sm:w-none w-none h-[100] pt-10 px-3 border-r border-r-gray-500 sticky top-0 left-0 lg:block md:block sm:hidden hidden">
        <LargeNav />
      </div>
      {/* Posts and feed */}
      <Routes>
        <Route path="/" element={<Feed />} />
      </Routes>
    </div>
  );
};

export default Home;
