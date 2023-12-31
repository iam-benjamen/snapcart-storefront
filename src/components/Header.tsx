import {
  Box,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { Inter } from "next/font/google";
import Logo from "../../public/assets/Logo.svg";
import carticon from "../../public/assets/carticon.svg";
import dropdown from "../../public/assets/chevron-down.svg";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const Header = () => {
  return (
    <Box
      borderBottom={" 1px solid #F2F2F2"}
      justifyContent={"space-between"}
      px={{ base: "1rem", md: "3.7rem" }}
      display={"flex"}
      height={"5.875rem"}
      alignItems={"center"}
      w={"100vw"}
      top={0}
    >
      <Box
        as={Link}
        href="/"
        cursor={"pointer"}
        display={"flex"}
        gap={"0.62rem"}
        alignItems={"center"}
      >
        <Image src={Logo} alt="snapcart logo" />
        <Text
          letterSpacing={"-0.03438rem"}
          className={inter.className}
          fontWeight={600}
          fontSize={"1.1rem"}
        >
          Snapcart
        </Text>
      </Box>
      <Box display={"flex"} gap={"1.5rem"} alignItems={"center"}>
        <Menu>
          <MenuButton>
            <Box
              cursor={"pointer"}
              display={"flex"}
              alignItems={"center"}
              gap={"0.19rem"}
            >
              <Text
                fontSize={"1.125rem"}
                fontFamily={"Poppins"}
                fontWeight={600}
              >
                NGN
              </Text>
              <Image src={dropdown} alt="dropdown icon" />
            </Box>
          </MenuButton>
          {/* <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList> */}
        </Menu>
        <Box
          cursor={"pointer"}
          display={"flex"}
          gap={"0.3rem"}
          alignItems={"center"}
        >
          <Image src={carticon} alt="cart icon" />
          <Text fontFamily={"Poppins"} fontWeight={500} fontSize={"1.125rem"}>
            0
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
