import { ImageObject, ThirdPartText } from "../database/ContentData";

const ThirdPart = () => {
  return (
    <>
      <div className="w-full  flex flex-col text-center my-30">
        <div className="w-full  flex flex-col gap-5 h-auto py-30 rounded-tr-[10rem] rounded-bl-[10rem] Third-Part items-center justify-center lg:items-end lg:justify-end lg:px-30 relative">
          <div className="w-full h-auto items-center  justify-center  absolute left-[50%] translate-x-[-50%] -top-50 sm:-top-15 md:-top-60 xl:-top-30 ">
            <img src={ImageObject.PhonesIMG} alt="" className="lg:w-[45%]" />
          </div>
          <div className="w-full h-auto my-30 flex flex-col gap-5 z-10 lg:text-start lg:w-1/2">
            <h1 className="Overpass-600 text-white text-4xl lg:text-6xl ">
              {ThirdPartText.mainTitle}
            </h1>
            <p className="Overpass-600 text-lg text-gray-400 px-10 lg:px-0">
              {ThirdPartText.text}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThirdPart;
