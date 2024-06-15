import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
} from "@nextui-org/navbar";
import NextLink from "next/link";
import Image from "next/image";

import Logo from "../public/stackline_logo.svg";

import styles from "./styles.module.scss";

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="xl" position="sticky" className={styles.navbar}>
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo className={styles.logo} />
            {/* <img alt="Stackline" src={logo} /> */}
          </NextLink>
        </NavbarBrand>
      </NavbarContent>
    </NextUINavbar>
  );
};
