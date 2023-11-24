import add from "../../../public/assets/others/plus.svg";
import minus from "../../../public/assets/others/minus.svg";
import deleteIcon from "../../../public/assets/others/trash.svg";
import product1 from "../../../public/assets/product samples/Foto.svg"


import { HStack, Box, VStack, Text } from "@chakra-ui/react";
import { useState } from "react";
import Image from "next/image";

const CartProduct = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedQuantity, setSelectedQuantity] = useState(2);

  return (
    <HStack
      w={"100%"}
      height={"5.25rem"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Box display={"flex"} gap={"1rem"}>
        <Box width={"5rem"}>
          <Image src={product1} alt="cart product image" />
        </Box>
        <VStack alignItems={"flex-start"} justifyContent={"space-between"}>
          <Text fontWeight={700}>Nike Shoes</Text>
          <Text fontWeight={600}>₦15,000</Text>
          <Box display={"flex"} alignItems={"center"} gap={".5rem"}>
            <Box display={"flex"} gap="0.37rem" alignItems={"center"}>
              <Text fontSize={"0.8rem"} fontWeight={600}>
                Size
              </Text>
              <Text
                borderRadius={"1rem"}
                fontSize={"0.7rem"}
                bg="#F8F8F8"
                color="#717171"
                px={"0.7rem"}
                py={".15rem"}
              >
                41
              </Text>
            </Box>
            <Box display={"flex"} alignItems={"center"} gap={"0.37rem"}>
              <Text fontSize={"0.8rem"} fontWeight={600}>
                Quantity
              </Text>
              <Box
                display={"flex"}
                gap={"0.28rem"}
                width={"max-content"}
                borderRadius={"1rem"}
                bg={"#F8F8F8"}
                px={".2rem"}
                py={"0.15rem"}
                alignItems={"center"}
              >
                <Box
                  onClick={() => setSelectedQuantity(selectedQuantity + 1)}
                  cursor={"pointer"}
                >
                  <Image src={add} alt="add icon" />
                </Box>
                <Text
                  fontFamily={"__Inter_e66fe9"}
                  fontSize=".7rem"
                  color={"#717171"}
                >
                  {selectedQuantity}
                </Text>
                <Box
                  cursor={"pointer"}
                  onClick={() =>
                    selectedQuantity !== 0 &&
                    setSelectedQuantity(selectedQuantity - 1)
                  }
                >
                  <Image src={minus} alt="minus icon" />
                </Box>
              </Box>
            </Box>
          </Box>
        </VStack>
      </Box>

      <Box cursor={"pointer"}>
        <Image src={deleteIcon} alt="Delete Icon" />
      </Box>
    </HStack>
  );
};

export default CartProduct;
