import { useState } from "react";
import { ImageObject, FirstPartText } from "../database/ContentData";

import { Navbar, NavbarBrand } from "flowbite-react";

const FirstPart = () => {
  return (
    <>
      <div className="w-full min-h-[90vh] rounded-bl-[9rem] First-Part flex flex-col ">
        <NavigationNavbar />
        <div className="w-full h-full flex-1 flex items-center justify-center flex-col px-10 gap-5 md:gap-10 mb-25">
          <h1 className="Ubuntu-400 text-white text-[2.3rem] w-full text-center md:text-8xl">
            {FirstPartText.title}
          </h1>
          <p className="Overpass-700 text-[hsl(0,0%,95%)] text-xl text-center md:text-3xl">
            {FirstPartText.text}
          </p>
          <div className="w-full h-auto flex items-center justify-center gap-5">
            <button className="px-5 py-3 bg-white rounded-3xl text-[#FF7D6B] Ubuntu-700 cursor-pointer hover:bg-[hsla(0,0%,100%,0.2)]  hover:text-white Animation-Class">
              {FirstPartText.ButtonText}
            </button>
            <button className="cursor-pointer px-5 py-3 bg-transparent border border-white rounded-3xl Ubuntu-700 text-white hover:bg-white Animation-Class hover:text-black">
              {FirstPartText.ButtonText_two}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstPart;

import {
  firstPart,
  secondPart,
  thirdPart,
  fourthpart,
} from "../database/ContentData";

const NavigationNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDrop, setIsOpenDrop] = useState(null);

  return (
    <>
      <Navbar
        fluid
        rounded
        className="bg-transparent p-5 xl:px-30 mt-7 relative"
      >
        <div className="w-auto h-auto ">
          <NavbarBrand href="#" className="flex gap-20">
            <img src={ImageObject.Logo} alt="" />
            <div className="w-full h-full gap-10 items-center justify-center hidden lg:flex">
              <NavigationNavbarLinks
                part={firstPart}
                isOpenDrop={isOpenDrop}
                setIsOpenDrop={setIsOpenDrop}
              />
              <NavigationNavbarLinks
                part={secondPart}
                isOpenDrop={isOpenDrop}
                setIsOpenDrop={setIsOpenDrop}
              />
              <NavigationNavbarLinks
                part={thirdPart}
                isOpenDrop={isOpenDrop}
                setIsOpenDrop={setIsOpenDrop}
              />
            </div>
          </NavbarBrand>
          <div className="w-full h-auto"></div>
        </div>

        <div
          className="flex md:order-2 py-3 md:py-0 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img src={ImageObject.IconHamburger} alt="" className="lg:hidden " />
          <div className="w-auto h-auto items-center gap-5 justify-center flex-row hidden lg:flex">
            {fourthpart.Buttons.map((el, i) => (
              <button
                key={i}
                className={`text-2xl Overpass-600 cursor-pointer  ${el === "Login" ? "text-white First-Button-Class text-xl" : "px-7 py-3 rounded-4xl text-xl bg-white text-[#FF836D] hover:bg-[hsla(0,0%,100%,0.2)] Animation-Class hover:text-white"}`}
              >
                {el}
              </button>
            ))}
          </div>
        </div>
        <div
          className={`${isOpen ? "flex" : "hidden"} absolute md:hidden  bg-white rounded-lg w-[90%] top-20 left-[50%] translate-x-[-50%]  justify-center text-center items-center`}
        >
          <div className="flex flex-col w-full h-auto p-5">
            <NavigationNavbarLinks
              part={firstPart}
              isOpenDrop={isOpenDrop}
              setIsOpenDrop={setIsOpenDrop}
            />
            <NavigationNavbarLinks
              part={secondPart}
              isOpenDrop={isOpenDrop}
              setIsOpenDrop={setIsOpenDrop}
            />
            <NavigationNavbarLinks
              part={thirdPart}
              isOpenDrop={isOpenDrop}
              setIsOpenDrop={setIsOpenDrop}
            />
            <div className="w-full bg-[hsl(207,13%,34%,0.5)] h-[0.05rem]"></div>
            <div className="w-full h-auto flex flex-col gap-5 mt-5 items-center justify-center">
              {fourthpart.Buttons.map((el, i) => (
                <button
                  key={i}
                  className={`text-2xl Overpass-600 ${el === "Login" ? "First-Button-Class text-xl" : "Second-Button-Class Second-Button-Background text-xl"}`}
                >
                  {el}
                </button>
              ))}
            </div>
          </div>
        </div>
      </Navbar>
    </>
  );
};

const NavigationNavbarLinks = ({ part, isOpenDrop, setIsOpenDrop }) => {
  const isOpen = isOpenDrop === part.id;

  return (
    <>
      <div className="md:w-auto w-full h-auto flex flex-col items-center justify-center">
        <div
          className="flex items-center justify-center mb-4 md:mb-0 gap-4"
          onClick={() => setIsOpenDrop(isOpenDrop === part.id ? null : part.id)}
        >
          <button
            type="button"
            className="Overpass-600 text-[hsl(208,49%,24%)] text-xl cursor-pointer md:text-white hover:underline decoration-white"
          >
            {part.header}
          </button>
          <picture>
            <source
              media="(min-width:1024px)"
              srcSet={ImageObject.IconArrowLight}
            />
            <img
              src={ImageObject.IconArrowDark}
              alt=""
              className={`${isOpen ? "rotate-180" : "rotate-0"} Animation-Class md:w-3`}
            />
          </picture>
        </div>
        <ul
          className={`w-full h-auto rounded-md Overpass-600 text-xl gap-5 p-5 text-[hsl(207,13%,34%)] bg-[hsl(207,13%,34%,0.3)] ${isOpen ? "flex" : "hidden"}  flex flex-col mb-5 md:absolute md:p-10 md:w-[13%] md:top-20 md:bg-white`}
        >
          {part.links.map((element, index) => (
            <li key={index} className="hover:text-black Animation-Class">
              {element}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
