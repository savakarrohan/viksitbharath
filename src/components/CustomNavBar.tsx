"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@heroui/react";
import Image from "next/image";

import { menuItems } from "@/fixture/constants";

export default function CustomNavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isBlurred={false}
      isBordered={true}
      shouldHideOnScroll={true}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Image
            className="dark:invert rounded-md "
            src="/viksitbharat/Icons/Flag_of_India.svg"
            alt="Indian Flag logo"
            width={40}
            height={38}
            priority
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        {menuItems.map((item) => (
          <NavbarItem key={item.key}>
            <Link
              color="foreground"
              href={`#${item.name}`}
              className="font-semibold py-3"
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarMenu className="max-w-96 bg-red-200">
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.key}>
            <Link className="w-full" color="foreground" href="#" size="lg">
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
