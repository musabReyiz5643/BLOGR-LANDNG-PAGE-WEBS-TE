import PatternCircles from "../images/bg-pattern-circles.svg";
import PatternIntroDekstop from "../images/bg-pattern-intro-desktop.svg";
import PatternIntroMobile from "../images/bg-pattern-intro-mobile.svg";
import IconArrowDark from "../images/icon-arrow-dark.svg";
import IconArrowLight from "../images/icon-arrow-light.svg";
import IconClose from "../images/icon-close.svg";
import IconHamburger from "../images/icon-hamburger.svg";
import EditorDekstop from "../images/illustration-editor-desktop.svg";
import EditorMobile from "../images/illustration-editor-mobile.svg";
import LaptopDekstop from "../images/illustration-laptop-desktop.svg";
import LaptopMobile from "../images/illustration-laptop-mobile.svg";
import PhonesIMG from "../images/illustration-phones.svg";
import Logo from "../images/logo.svg";

export const ImageObject = {
  PatternCircles: PatternCircles,
  PatternIntroDekstop: PatternIntroDekstop,
  PatternIntroMobile: PatternIntroMobile,
  IconArrowDark: IconArrowDark,
  IconArrowLight: IconArrowLight,
  IconClose: IconClose,
  IconHamburger: IconHamburger,
  EditorDekstop: EditorDekstop,
  EditorMobile: EditorMobile,
  LaptopDekstop: LaptopDekstop,
  LaptopMobile: LaptopMobile,
  PhonesIMG: PhonesIMG,
  Logo: Logo,
};

export const FirstPartText = {
  title: "A modern publishing platform",
  text: "Grow your audience and build your online brand",
  ButtonText: "Start for Free",
  ButtonText_two: "Learn More",
};

export const NavigationNavbarText = [
  {
    id: "Product",
    header: "Product",
    links: ["Overview", "Pricing", "Marketplace", "Features", "Integrations"],
  },
  {
    id: "Company",
    header: "Company",
    links: ["About", "Team", "Blog", "Careers"],
  },
  {
    id: "Connect",
    header: "Connect",
    links: ["Contact", "Newsletter", "LinkedIn"],
  },
  {
    Buttons: ["Login", "Sign Up"],
  },
];

export const [firstPart, secondPart, thirdPart, fourthpart] =
  NavigationNavbarText;

export const SecondPartText = {
  mainTitle: "Designed for the future",
  subheading: "Introducing an extensible editor",
  text: "Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.",
  subheadingTwo: "Robust content management",
  textTwo:
    "Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.",
};

export const ThirdPartText = {
  mainTitle: "State of the Art Infrastructure",
  text: "With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.",
};

export const FourthPartText = {
  mainTitle: "Free, open, simple",
  text: "Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.",
  mainTitleTwo: "Powerful tooling",
  textTwo:
    "Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.",
};
