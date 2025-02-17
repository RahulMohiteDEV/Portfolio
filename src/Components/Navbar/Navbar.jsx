import { useState } from 'react';
import { RiMenu2Line, RiCloseLine } from 'react-icons/ri';

const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowmenu] = useState(true);

  return (
    <nav className="flex opacity-90 flex-wrap justify-between md:items-center text-white px-6 pt-5 md:px-20 bg-black fixed top-0 left-0 w-full z-50 h-[70px]">
      <span className="text-xl pb-10 font-bold tracking-wide mt-2 mb-4">Portfolio</span>

      {/* Navbar Links */}
      <ul
        className={`${
          menu ? 'block' : 'hidden'
        } mx-0 py-2 mt-4 mb-4 font-semibold md:mt-0 bg-black px-2 rounded-xl bg-opacity-80 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6 md:flex-row md:h-[70px]`}
      >
        <a href="#Home">
          <li className="text-md transition-all duration-300 p-1 md:p-0 hover:text-green-400">Home</li>
        </a>

        <a href="#About">
          <li className="text-md transition-all duration-300 p-1 md:p-0 hover:text-green-400">About</li>
        </a>

        <a href="#Experience">
          <li className="text-md transition-all duration-300 p-1 md:p-0 hover:text-green-400">Skills</li>
        </a>

        <a href="#Qualification">
          <li className="text-md transition-all duration-300 p-1 md:p-0 hover:text-green-400">Qualification</li>
        </a>

        <a href="#Projects">
          <li className="text-md transition-all duration-300 p-1 md:p-0 hover:text-green-400">Projects</li>
        </a>

        <a href="#Contact">
          <li className="text-md transition-all duration-300 p-1 md:p-0 hover:text-green-400">Contact</li>
        </a>
      </ul>

      {/* Mobile Menu Toggle */}
      {showMenu ? (
        <RiMenu2Line
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={() => {
            openMenu(!menu);
            setShowmenu(!showMenu);
          }}
        />
      ) : (
        <RiCloseLine
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={() => {
            openMenu(!menu);
            setShowmenu(!showMenu);
          }}
        />
      )}
    </nav>
  );
};

export default Navbar;
