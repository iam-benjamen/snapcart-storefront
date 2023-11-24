import { Box, Text, HStack } from "@chakra-ui/react";
import Image from "next/image";
import partner1 from "../../public/assets/partners/GooglePay.svg";
import partner2 from "../../public/assets/partners/Skrill.svg";
import partner3 from "../../public/assets/partners/Visa.svg";
import partner4 from "../../public/assets/partners/Amex.svg";
import partner5 from "../../public/assets/partners/Mastercard.svg";
import partner6 from "../../public/assets/partners/Stripe.svg";

const Footer = () => {
  return (
    <Box
      borderTop={"1px solid #F2F2F2"}
      px={{ base: "1rem", md: "3.75rem" }}
      gap={{ base: "1.25rem", md: "1.4rem" }}
      flexDir={"column"}
      display={"flex"}
      alignItems={"center"}
      marginTop={"7rem"}
      py={"1.7rem"}
      bottom={0}
    >
      <Text
        textAlign={"center"}
        fontFamily={"Poppins"}
        color={"#717171"}
        fontSize={"1.125rem"}
      >
        © 2023 Jay Stores Ltd.. All rights reserved
      </Text>
      <Text fontFamily={"Poppins"} color={"#717171"} fontSize={"1.125rem"}>
        Powered by Snapcart
      </Text>
      <HStack
        columnGap={"1.5rem"}
        rowGap={"1.25rem"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        pb={"2rem"}
      >
        {[partner1, partner2, partner3, partner4, partner5, partner6].map(
          (item, index) => (
            <Image src={item} alt="partner logo" key={index} />
          )
        )}
      </HStack>
    </Box>
  );
};

export default Footer;
