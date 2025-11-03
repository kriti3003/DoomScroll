import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo/applogo.jpg";
import icon from "../../../assets/logo/icon.jpg";
import SearchLogo from "../../../assets/navlogo/search.jpg";
import ExploreLogo from "../../../assets/navlogo/explore.jpg";
import ReelsLogo from "../../../assets/navlogo/reels.jpg";
import MessagesLogo from "../../../assets/navlogo/messages.jpg";
import NotificationsLogo from "../../../assets/navlogo/notification.png";
import CreateLogo from "../../../assets/navlogo/create.jpg";
import home from "../../../assets/navlogo/home.jpg";
import threads from "../../../assets/navlogo/threads.jpg";

const LargeNav = () => {
  const sidebarItems = [
    { name: "Search", link: "/search", icon: SearchLogo },
    { name: "Explore", link: "/explore", icon: ExploreLogo },
    { name: "Reels", link: "/reels", icon: ReelsLogo },
    { name: "Messages", link: "/messages", icon: MessagesLogo },
    { name: "Notifications", link: "/notifications", icon: NotificationsLogo },
    { name: "Create", link: "/create", icon: CreateLogo },
  ];

  return (
    <>
      <div className="w-full h-full fixed relative">
        {/* Logo with Left Margin and Border */}
        <Link to="/" className="mb-10 px-2 lg:block md:hidden sm:hidden hidden">
          <img src={logo} alt="App Logo" className="w-28 h-auto" />
        </Link>

        <Link to="/" className="mb-10 px-2 lg:hidden md:block sm:hidden block">
          <img src={icon} alt="App icon" className="w-28 h-auto" />
        </Link>
        <div className="w-full h-auto flex items-start flex-col gap-y-2">
          <Link
            to="/"
            className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg:gray-800/60 rounded-md ease-out duration-500 group"
          >
            <img
              src={home}
              alt="home icon"
              className="w-6 h-6 object-contain group-hover:scale-105 ease-out duration-300"
            />
            <p className="text-base fomt-semibold text-white lg:block md:hidden sm:hidden">
              Home
            </p>
          </Link>
          {/*looping other links */}
          {sidebarItems.map((item) => {
            return (
              <Link
                to={item.link}
                key={item.id}
                className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg:gray-800/60 rounded-md ease-out duration-500 group"
              >
                <img
                  src={item.icon}
                  alt="home icon"
                  className="w-6 h-6 object-contain group-hover:scale-105 ease-out duration-300"
                />
                <p className="text-base font-medium text-white lg:block md:hidden sm:hidden">
                  {item.name}
                </p>
              </Link>
            );
          })}
          {/*Profile section */}
          <Link
            to="/profile"
            className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg:gray-800/60 rounded-md ease-out duration-500 group"
          >
            <img
              src="https://i.pinimg.com/736x/7f/ff/68/7fff6829e61d1924c44d8cb5a0cfbdff.jpg"
              alt="profile icon"
              className="w-6 h-6 object-contain group-hover:scale-105 ease-out duration-300"
            />
            <p className="text-base font-medium text-white lg:block md:hidden sm:hidden">
              Profile
            </p>
          </Link>
        </div>
        {/*Threads and more links */}
        <div className="flex flex-col w-full h-full">
          <Link
            to="/"
            className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg-gray-800/60 rounded-md ease-out duration-500 group mb-2 mt-auto"
          >
            <img
              src={threads}
              alt="home icon"
              className="w-6 h-6 object-contain group-hover:scale-105 ease-out duration-300"
            />
            <p className="text-base font-medium text-white lg:block md:hidden sm:hidden">
              More
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LargeNav;
