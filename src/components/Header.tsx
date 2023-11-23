import { Box, Text } from "@chakra-ui/react";
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
      display={"flex"}
      borderBottom={" 1px solid #F2F2F2"}
      justifyContent={"space-between"}
      w={"100vw"}
      height={"5.875rem"}
      alignItems={"center"}
      top={0}
      px={{ base: "1rem", md: "3.7rem" }}
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
        <Box
          cursor={"pointer"}
          display={"flex"}
          alignItems={"center"}
          gap={"0.19rem"}
        >
          <Text fontSize={"1.125rem"} fontFamily={"Poppins"} fontWeight={600}>
            NGN
          </Text>
          <Image src={dropdown} alt="dropdown icon" />
        </Box>
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
