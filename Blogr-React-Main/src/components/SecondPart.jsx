import { ImageObject, SecondPartText } from "../database/ContentData";

const SecondPart = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-white flex flex-col text-center md:text-start my-30 gap-5 ">
        <h1 className="Overpass-600 text-[hsl(208,49%,24%)] text-3xl text-center md:text-5xl">
          {SecondPartText.mainTitle}
        </h1>
        <div className="w-full flex flex-col md:items-center md:flex-row-reverse flex-1 md:justify-between md:px-20">
          <div className="w-full h-auto flex items-center justify-center md:w-1/2">
            <img src={ImageObject.EditorMobile} alt="" className="md:w-full" />
          </div>
          <div className="w-auto h-auto flex flex-col gap-10 md:w-1/3">
            <h1 className="Overpass-600 text-[hsl(208,49%,24%)] text-3xl">
              {SecondPartText.subheading}
            </h1>
            <p className="Overpass-600 text-lg text-gray-400 px-10 md:px-0">
              {SecondPartText.text}
            </p>
            <h1 className="Overpass-600 text-[hsl(208,49%,24%)] text-3xl px-5 md:px-0 mt-5">
              {SecondPartText.subheadingTwo}
            </h1>
            <p className="Overpass-600 text-lg text-gray-400 px-10 md:px-0 mb-15">
              {SecondPartText.textTwo}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondPart;
