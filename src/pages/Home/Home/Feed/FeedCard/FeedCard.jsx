import React from 'react'
import instagramFeed from '../FeedData/FeedData'
import { Link } from 'react-router-dom'; 
import TextEllipse from '../../Stories/TextEllipse/TextEllipse';

const FeedCard = () => {
  return (
    <>
      {instagramFeed.map((feed) => (
        <div key={feed.id} className="w-full h-auto mb-6">
          {/*pp and username, time */}
          <div className="w-full h-auto flex items-center justify-between mb-2">
            <div className="flex items-center gap-x-2">
              <Link to="/" className="w-10 h-10 rounded-full">
                {/*colour */}
                <div className="w-10  h-10 rounded-full object-cover p-[2px] bg-gradient-to-r from-[#f02aa6] to-[#ff6f48]">
                  <img
                    src={feed.profileImg}
                    alt={feed.profileImg}
                    className="rounded-full w-ful h-full object-cover p-[2.5px] bg-black"
                  />
                </div>
              </Link>
              <div className="flex items-center gap-x-2">
                <p className="text-white text-sm font-medium">
                  {feed.username}
                </p>
                <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                <p className="text-white text-sm font-medium">
                  {feed.time}
                </p>
              </div>
            </div>

          </div>
          <div className="w-full h-auto lg:max-h-[75vh] md:max-h-[70vh] 
          sm:max-h-[65vh] max-h-[50vh] lg:h-[70vh] md:h-[60vh] sm:h-[50vh] h-[50vh] 
          lg:min-[65vh] md:min-h-[55vh] sm:min-h-[50vh] min-h-[45vh] border border-gray-300 rounded overflow-hidden mb-3">
            <img src={feed.postImg} alt={feed.caption} className="w-full h-full rounded object-center" />
            </div> 
        </div>
      ))}
    </>
  );
}

export default FeedCard
