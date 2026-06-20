import {
  ImageObject,
  firstPart,
  secondPart,
  thirdPart,
} from "../database/ContentData";

const Footer = () => {
  return (
    <>
      <div className="w-full h-auto bg-[hsl(240,10%,16%)] rounded-tr-[10rem] py-30  flex flex-col gap-10 ">
        <div className=" flex items-center justify-center flex-col md:flex-row md:justify-around gap-10">
          <img src={ImageObject.Logo} alt="" />
          <FooterLinksComponent part={firstPart} />
          <FooterLinksComponent part={secondPart} />
          <FooterLinksComponent part={thirdPart} />
        </div>
      </div>
    </>
  );
};

export default Footer;

const FooterLinksComponent = ({ part }) => {
  return (
    <>
      <div className="w-auto h-auto text-center md:text-start flex flex-col gap-5 Overpass-600">
        <h1 className="text-white text-xl">{part.header}</h1>
        <ul className="w-auto h-auto flex flex-col text-center gap-2 md:text-start">
          {part.links.map((el, i) => (
            <li
              key={i}
              className="text-xl text-[hsl(207,13%,34%)] hover:underline decoration-[hsl(210,2%,39%)]"
            >
              <a href="#">{el}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
