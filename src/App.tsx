import Navbar from "@/scenes/Navbar";
import { useEffect, useState } from "react";
import Home from "@/scenes/home";
import BenifitsPage from "@/scenes/benifits";
import { SelectedPage } from "@/shared/types";
import Ourclasses from "./scenes/OurClasses";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="app bg-gray-20 ">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <BenifitsPage setSelectedPage={setSelectedPage} />
      <Ourclasses setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
