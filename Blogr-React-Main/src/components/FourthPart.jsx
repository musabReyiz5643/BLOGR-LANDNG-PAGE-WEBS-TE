import { ImageObject, FourthPartText } from "../database/ContentData";

const FourthPart = () => {
  return (
    <>
      <div className="w-full h-auto flex flex-col lg:flex-row gap-10 text-center mb-30">
        <div className="lg:w-1/2 w-auto h-full">
          <img src={ImageObject.LaptopMobile} alt="" className="w-full" />
        </div>
        <div className="w-auto h-auto flex flex-col gap-10 lg:w-1/2 lg:items-start lg:justify-center">
          <h1 className="Overpass-600 text-[hsl(208,49%,24%)] text-4xl lg:w-full lg:text-start">
            {FourthPartText.mainTitle}
          </h1>
          <p className="Overpass-600 text-lg text-gray-400 px-10 lg:w-[80%] lg:text-start lg:px-0">
            {FourthPartText.text}
          </p>
          <h1 className="Overpass-600 text-[hsl(208,49%,24%)] text-4xl lg:w-full lg:text-start lg:px-0">
            {FourthPartText.mainTitleTwo}
          </h1>
          <p className="Overpass-600 text-lg text-gray-400 px-10 lg:w-[80%] lg:text-start lg:px-0">
            {FourthPartText.textTwo}
          </p>
        </div>
      </div>
    </>
  );
};

export default FourthPart;
