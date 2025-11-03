import React from "react";
import { Link } from "react-router-dom";
import storiesData from "./StoriesData/StoriesData";
import TextEllipse from "./TextEllipse/TextEllipse";
const Stories = () => {
  return (
    <div className="lg:max-w-[41vw] md:max-w-[70vw] sm:max-w-full max-w-full w-full h-auto flex items-center gap-x-3.5 overflow-x-scroll">
      <Link
        to="/"
        className="flex items-center justify-center flex-col flex-shrink-0"
      >
        <div className="w-16 h-16 rounded-full p-[2px] bg-green-600">
          <img
            src="https://i.pinimg.com/736x/1b/29/bb/1b29bb823d9fe8c039dc6546d6bbf77f.jpg"
            alt="story image"
            className="rounded-full h-full w-full object-cover"
          />
        </div>
        <TextEllipse username="beauty of nature" />
      </Link>
      {storiesData.map((story) => (
        <Link
          to="/"
          key={story.id}
          className="flex items-center justify-center flex-col flex-shrink-0"
        >
          <div className="w-16 h-16 rounded-full object-cover p-[2px] bg-gradient-to-r from-[#f02aa6] to-[#ff6f48]">
            <img
              src={story.imageUrl}
              alt="story image"
              className="rounded-full h-full w-full object-cover"
            />
          </div>
          <TextEllipse username={story.username} maxLength={8}/>
        </Link>
      ))}
    </div>
  );
};

export default Stories;
