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
import { Fredoka } from "next/font/google";
import { Link, Button } from "@heroui/react";


const Fredoka_One = Fredoka({
  subsets: ["latin"],
});

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Home", "About Us", "Project", "Contact Us"];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="fixed bg-black/10">
      <NavbarContent>
        <NavbarBrand className="gap-2">
          <img src="/images/logo/logo black.png" alt="Logo" width={25}/>
          <p className=" text-[#E2E8F0]">1Envy2</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="Home" className="text-[#E2E8F0]  hover:font-medium hover:text-[#F96846]" >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link color="foreground" href="#about" className="text-[#E2E8F0]  hover:font-medium hover:text-[#F96846]">
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#project" className="text-[#E2E8F0]  hover:font-medium hover:text-[#F96846]">
            Project
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#contact" className="text-[#E2E8F0]  hover:font-medium hover:text-[#F96846]">
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
