'use client'

import { Text, Button, Img } from "./text";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from 'next/navigation';

export default function Navbar({ ...props }) {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token") || getCookie("token");
    if (token) {
      setIsLoggedIn(false);
    }
  }, []);

  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  };

  const deleteCookie = (name) => {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  };

  const handleLogout = () => {
    setIsLoggedIn(true);
    localStorage.removeItem("token");
    deleteCookie('token');
  };

  return (
    <header
      {...props}
      className={`bg-transparent flex justify-between items-center w-full p-6 md:p-4 shadow-lg ${props.className}`}
    >
      <div className="flex items-center gap-2">
        <Link href="/">
          <Text as="p" className={` text-lg sm:text-sm ${pathname === '/' ? "underline" : ""}`}>
            Home
          </Text>
        </Link>
        <Link href="/recipes/add">
          <Text as="p" className={` text-lg sm:text-sm ${pathname === '/recipes/add' ? "underline" : ""}`}>
            Add Recipe
          </Text>
        </Link>
        <Link href="/profile">
          <Text as="p" className={` text-lg sm:text-sm ${pathname === '/profile' ? "underline" : ""}`}>
            Profile
          </Text>
        </Link>
      </div>
      <div className="flex items-center ml-auto gap-2.5">
        <Link href={"/profile"} className="flex items-center justify-center w-9 h-10">
          <Image src="/images/img_s.svg" width={50} height={50} alt="settings icon" className="w-9 h-10 sm:w-6 sm:h-8" />
        </Link>
        {isLoggedIn ? (
          <button onClick={handleLogout} size="lg" as="p" className="!text-sky-800">
            Logout
          </button>
        ) : (
          <Link href="/login">
            <Text size="lg" as="p" className="!text-sky-800">
              Logout
            </Text>
          </Link>
        )}
      </div>
    </header>
  );
}
