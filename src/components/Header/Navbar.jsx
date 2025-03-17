"use client";

import { useState, useEffect } from "react";
import { FiShoppingBag, FiUser, FiLogOut } from "react-icons/fi";
import { HiOutlineMenu } from "react-icons/hi";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import { logout } from "@/Redux/authslice";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { toggleBar } from "@/Redux/itemsCartSlice";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
//   const [open, setOpen] = useState(false);
  // const {user,loading} = useAuth()
  const token = useSelector((state) => state.auth.token);
  const items=useSelector(state=>state.itemsCart.items)
  // console.log("token is there", token);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const handleLogout = async () => {
    await axios.post(
      "http://localhost:3000/api/auth/logoutAuth",
      {},
      { withCredentials: true }
    );
    dispatch(logout());
    // window.location.reload()
  };

//   const toggleItemBar = () => {
//     setOpen(!open);
//   };

  return (
    <>
      <div className="hidden md:block">{/* <TopBar /> */}</div>
      
      <header
        className={`w-full border-b bg-white fixed top-0 left-0 z-50 transition-transform duration-300 ${
          isMenuOpen
            ? "-translate-y-full"
            : isVisible
            ? "translate-y-0"
            : "-translate-y-full"
        }`}
      >
        <div className="w-full flex items-center justify-between py-2 px-6 md:px-10">
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsMenuOpen(true)}
          >
            <HiOutlineMenu />
          </button>

          <div className="w-full flex items-center justify-between py-2 pl-2 md:pl-0 md:px-6">
            <div className="hidden bg-stone-100 p-2 md:flex items-center justify-center gap-20 cursor-pointer">
              <p className="text-extralight text-2xs text-stone-500">Search</p>
              <CiSearch className="text-stone-500" />
            </div>
            <CiSearch className="block md:hidden w-6 h-6 cursor-pointer" />
            <Link href="/">
              <h1 className="text-4xl font-logo">Ascension</h1>
            </Link>
            <div className="flex items-center gap-4">
              {token ? (
                <FiLogOut
                  onClick={handleLogout}
                  className=" cursor-pointer text-lg"
                />
              ) : (
                <Link href="/login">
                  <FiUser className="cursor-pointer text-lg" />
                </Link>
              )}
              <div className="relative">
                <FiShoppingBag
                  className="cursor-pointer text-lg"
                  onClick={()=>dispatch(toggleBar())}
                />
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {items.length}
                </span>
              </div>
            </div>
          </div>
        </div>

        <DesktopMenu />
      </header>

      <MobileMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
    </>
  );
};

export default Navbar;
