import { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
type Props = { selectedPage: string; setSelectedPage: (value: string) => void };

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const flexbetween = "flex items-center justify-between";

  return (
    <nav>
      <div className={`${flexbetween} fixed top-0 z-30 py-6 w-full`}>
        <div className={`${flexbetween} mx-auto w-5/6`}>
          <div className={`${flexbetween}  w-full gap-16 `}>
            <img alt="logo" src={Logo} />
            <div className={`${flexbetween}  w-full`}>
              <div className={`${flexbetween} gap-8 text-sm `}>
                <Link
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Benifits"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Our Classes"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Contact Us"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
              <div className={`${flexbetween} gap-8 text-sm `}>
                <p>Sign In</p>
                <button>Become a member</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
