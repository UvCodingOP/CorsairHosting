import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { ThemeToggleButton2 } from "@/components/ui/skiper-ui/skiper4";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import NavbarIcon from "../../assets/NavbarIcon.webp";

import { EllipsisIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const { theme, color } = useContext(ThemeContext);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div
      className="h-[15vw] md:h-[5vw] w-screen z-10 flex justify-around items-center fixed navbar border-b border-b-emerald-500/20 overflow-x-hidden"
      style={{
        background: theme ? "#111827" : "#fff",
        color: color ? "#111827" : "#fff",
      }}
    >
      <div className="part1 flex justify-center items-center gap-2 absolute left-0 m-3 md:m-20">
        <img src={NavbarIcon} alt="Logo" className="h-10 rounded-full" />
        <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
          Corsair Hosting
        </span>
      </div>
      <div className="part2 gap-4 absolute right-0 flex justify-center items-center">
        <div className="Links font-semibold mr-20 hidden md:flex items-center gap-6">
          <ThemeToggleButton2 className="h-7 w-7 hover:scale-120 m-0 mr-3 mt-1" />
          <NavLink
            to="/"
            className={({ isActive }) => {
              const dynamic = isActive
                ? "text-emerald-400 underline-length"
                : theme
                ? "text-gray-300 hover:text-white"
                : "text-gray-600 hover:text-gray-900";
              return `${dynamic}`;
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) => {
              const dynamic = isActive
                ? "text-emerald-400 underline-length"
                : theme
                ? "text-gray-300 hover:text-white"
                : "text-gray-600 hover:text-gray-900";
              return `${dynamic}`;
            }}
          >
            Login
          </NavLink>
          <NavLink
            to="/register"
            className={({ isActive }) => {
              const dynamic = isActive
                ? "text-emerald-400 underline-length"
                : theme
                ? "text-gray-300 hover:text-white"
                : "text-gray-600 hover:text-gray-900";
              return `${dynamic}`;
            }}
          >
            Register
          </NavLink>
          <NavLink
            to="/billing"
            className={({ isActive }) => {
              const dynamic = isActive
                ? "text-emerald-400 underline-length"
                : theme
                ? "text-gray-300 hover:text-white"
                : "text-gray-600 hover:text-gray-900";
              return `${dynamic}`;
            }}
          >
            Billing
          </NavLink>
        </div>

        <div
          className={`md:hidden flex justify-between items-center gap-3 text-${
            theme ? "white" : "black"
          } mr-4`}
        >
          <ThemeToggleButton2 className="h-7 w-7 hover:scale-120 m-0 mr-3 mt-1" />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Menu size={23}></Menu>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white text-gray-600 border-none outline-none">
              <DropdownMenuItem>
                <NavLink
                  to="/"
                  className={({ isActive }) => {
                    if(isActive){
                      return "text-emerald-400"
                    }
                    return;
                  }}
                >
                  Home
                </NavLink>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <NavLink
                  to="/login"
                  className={({ isActive }) => {
                    if(isActive){
                      return "text-emerald-400"
                    }
                    return;
                  }}
                >
                  Login
                </NavLink>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <NavLink
                  to="/register"
                  className={({ isActive }) => {
                    if(isActive){
                      return "text-emerald-400"
                    }
                    return;
                  }}
                >
                  Register
                </NavLink>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <NavLink
                  to="/register"
                  className={({ isActive }) => {
                    if(isActive){
                      return "text-emerald-400"
                    }
                    return;
                  }}
                />
              </DropdownMenuItem>

              <DropdownMenuItem>
                <NavLink
                  to="/billing"
                  className={({ isActive }) => {
                    if(isActive){
                      return "text-emerald-400"
                    }
                    return;
                  }}
                >
                  Billing
                </NavLink>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Navbar);
