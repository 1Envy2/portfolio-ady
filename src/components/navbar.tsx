import { RxDotFilled } from "react-icons/rx";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Roboto } from "next/font/google";
import { Link, Button } from "@heroui/react";

const roboto = Roboto({
  subsets: ["latin"],
});

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Home", "About Us", "Project", "Contact Us"];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} >
      <NavbarContent>
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">Adyatma Yusuf Farabi </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link aria-current="page" href="#">
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Project
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Contact Us
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full" color={"foreground"} href="#" size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>

    // <Navbar className=" bg-transparent mt-4 " isBlurred={false}>
    //   <NavbarContent className="gap-20 text-white " justify="center">
    //     <NavbarItem>
    //       <Link
    //         className={`text-cyan-600 font-semibold hover:text-yellow-500 ${roboto.className}`}
    //         href="#"
    //       >
    //         HOME
    //       </Link>
    //     </NavbarItem>
    //     <NavbarItem
    //       className={`text-cyan-600 font-semibold hover:text-yellow-500`}
    //     >
    //       <RxDotFilled />
    //     </NavbarItem>
    //     <NavbarItem isActive>
    //       <Link
    //         className={`text-cyan-600 font-semibold hover:text-yellow-500 ${roboto.className}`}
    //         href="#"
    //       >
    //         About Us
    //       </Link>
    //     </NavbarItem>
    //     <NavbarItem
    //       className={`text-cyan-600 font-semibold hover:text-yellow-500`}
    //     >
    //       <RxDotFilled />
    //     </NavbarItem>
    //   </NavbarContent>
    //   <NavbarBrand className="justify-center">
    //     <h1
    //       className={`text-cyan-600 font-bold text-aligt-center text-2xl font-sans ${roboto.className}`}
    //     >
    //       Adyatma Yusuf Farabi
    //     </h1>
    //   </NavbarBrand>

    //   <NavbarContent className="hidden sm:flex gap-20" justify="center">
    //     <NavbarItem
    //       className={`text-cyan-600 font-semibold hover:text-yellow-500`}
    //     >
    //       <RxDotFilled />
    //     </NavbarItem>
    //     <NavbarItem>
    //       <Link
    //         className={`text-cyan-600 font-semibold hover:text-yellow-500 ${roboto.className}`}
    //         href="#"
    //       >
    //         Project
    //       </Link>
    //     </NavbarItem>
    //     <NavbarItem
    //       className={`text-cyan-600 font-semibold hover:text-yellow-500`}
    //     >
    //       <RxDotFilled />
    //     </NavbarItem>
    //     <NavbarItem>
    //       <Link
    //         className={`text-cyan-600 font-semibold hover:text-yellow-500 ${roboto.className}`}
    //         href="#"
    //       >
    //         Contact Us
    //       </Link>
    //     </NavbarItem>
    //   </NavbarContent>
    // </Navbar>
  );
};

export default Navigation;
