import "./App.css";

import FirstPart from "./components/FirstPart";
import SecondPart from "./components/SecondPart";
import ThirdPart from "./components/ThirdPart";
import FourthPart from "./components/FourthPart";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="w-full min-h-screen">
        <FirstPart />
        <SecondPart />
        <ThirdPart />
        <FourthPart />
        <Footer />
      </div>
    </>
  );
}

export default App;
