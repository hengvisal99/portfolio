"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { Logo } from "../icons/Logo";
import { useRouter } from "next/navigation";
export default function Header() {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const menuItems = [
    { name: "Home", color: "foreground", href: "#" },
    { name: "About", color: "foreground", href: "#About" },
    { name: "Skills", color: "foreground", href: "#Skills" },
    { name: "Resume", color: "foreground", href: "#Resume" },
    { name: "Portfolio", color: "foreground", href: "#Portfolio" },
  ];
  const handleMenuItemClick = (index: number) => {
    setActiveIndex(index);
    setIsMenuOpen(false);
  };
  useEffect(() => {
    const hash = window.location.hash;
    const index = menuItems.findIndex(item => item.href === hash);
    setActiveIndex(index !== -1 ? index : 0);
    // router.push(hash);
    router.push(hash, {
      scroll: false, // Do not scroll to the top of the page
    });
  }, []);
  return (
    <Navbar
      classNames={{
        base: "bg-transparent",
        wrapper: "max-w-[1300px]",
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "text-accent",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-accent",
        ],
      }}

      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Open menu" : "Close menu"}
          className="md:hidden"
        />
        <NavbarBrand>
          <Logo></Logo>
          <p className="font-bold text-inherit text-3xl">VISALFOLIO</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden md:flex gap-10" justify="end">
        {menuItems.map((item, index) => (
          <NavbarItem key={index} isActive={index === activeIndex}>
            <Link
              color={index === activeIndex ? "success" : "foreground"}
              href={item.href}
              onClick={() => setActiveIndex(index)}
            >
              {item.name}

            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={index === activeIndex ? "success" : "foreground"}
              className="w-full"
              href={item.href}
              size="lg"
              onClick={() => handleMenuItemClick(index)}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
