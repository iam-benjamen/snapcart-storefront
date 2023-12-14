import {
  Box,
  Text,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
  HStack,
  Circle,
  Button,
} from "@chakra-ui/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { formatNumberWithCommas } from "../../helper";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";

import add from "../../public/assets/others/plus.svg";
import minus from "../../public/assets/others/minus.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Inter } from "next/font/google";
import { useCart } from "@/context/cartContext";

const inter = Inter({ subsets: ["latin"] });

interface ProductProps {
  image: StaticImageData;
  name: string;
  price: number;
  description: string;
  id: number;
}

const Product: React.FC<ProductProps> = ({
  id,
  image,
  name,
  price,
  description,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedQuantity, setSelectedQuantity] = useState(2);
  const [sizes, setSize] = useState([41, 42, 43, 44, 45]);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  const { addToCart } = useCart();

  return (
    <>
      <Box
        maxWidth={{ base: "100%", md: "48%" }}
        height={"max-content"}
        cursor={"pointer"}
        w={"27rem"}
      >
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          pagination={{ clickable: true }}
          className="mySwiper"
          navigation={true}
          slidesPerView={1}
          loop={true}
        >
          <SwiperSlide onClick={onOpen}>
            <Box>
              <Image src={image} alt="product" />
            </Box>
          </SwiperSlide>

          <SwiperSlide onClick={onOpen}>
            <Image src={image} alt="product" />
          </SwiperSlide>

          <SwiperSlide onClick={onOpen}>
            <Image src={image} alt="product" />
          </SwiperSlide>

          <SwiperSlide onClick={onOpen}>
            <Image src={image} alt="product" />
          </SwiperSlide>

          <VStack gap={"0.5rem"} mt={"2rem"}>
            <Text fontSize={"1.125rem"} textAlign={"center"} color={"gray"}>
              {name}
            </Text>
            <Text fontWeight={600} fontSize={"1.5rem"}>
              {`₦${formatNumberWithCommas(price)}`}
            </Text>
          </VStack>
        </Swiper>
      </Box>

      <Modal
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay />
        <ModalContent
          maxW={{ base: "90%", lg: "70%" }}
          borderRadius={"0.75rem"}
          px={{ base: "1rem", md: "2.5rem" }}
          py={"2rem"}
        >
          <ModalBody
            flexDirection={{ base: "column", lg: "row" }}
            justifyContent={"space-between"}
            display={"flex"}
            gap={"2rem"}
            p={0}
          >
            <Box>
              <Image
                style={{ width: "100%", height: "100%" }}
                src={image}
                alt="product image"
              />
            </Box>
            <VStack
              alignItems={"flex-start"}
              w={{ base: "100%", lg: "50%" }}
              gap={"1rem"}
            >
              <VStack alignItems={"flex-start"} gap={"0.5rem"}>
                <Text
                  fontFamily={"__Inter_e66fe9"}
                  fontSize={"1.5rem"}
                  fontWeight={700}
                >
                  {name}
                </Text>
                <Text
                  fontFamily={"__Inter_e66fe9"}
                  fontSize={"1.25rem"}
                  fontWeight={700}
                >{`₦${price}`}</Text>
                <Text
                  fontFamily={"__Inter_e66fe9"}
                  lineHeight={"1.5rem"}
                  color={"#717171"}
                  fontSize={"1rem"}
                  display={{ base: "none", md: "block" }}
                >
                  {description}
                </Text>
              </VStack>
              <Box
                flexDir={{ base: "column", md: "row" }}
                justifyContent={"space-between"}
                display={"flex"}
                gap={{ base: "2rem", md: "0rem" }}
                w={"100%"}
                mt={".5rem"}
              >
                <VStack gap={"0.8rem"} alignItems={"flex-start"}>
                  <Text
                    fontFamily={"__Inter_e66fe9"}
                    fontSize={"1.25rem"}
                    fontWeight={700}
                  >
                    Size
                  </Text>
                  <HStack gap={"0.8rem"}>
                    {sizes.map((size, index) => (
                      <Circle
                        bg={selectedIndex === index ? "#1D97FD" : "#F8F8F8"}
                        color={selectedIndex === index ? "white" : "#717171"}
                        cursor={"pointer"}
                        size={"2.75rem"}
                        key={index}
                        fontSize={"1rem"}
                        fontFamily={"Poppins"}
                        onClick={() => {
                          setSelectedIndex(index);
                          setSelectedSize(sizes[index]);
                        }}
                      >
                        {size}
                      </Circle>
                    ))}
                  </HStack>
                </VStack>
                <VStack gap={"0.8rem"} alignItems={"flex-start"}>
                  <Text
                    fontFamily={"__Inter_e66fe9"}
                    fontSize={"1.25rem"}
                    fontWeight={700}
                  >
                    Quantity
                  </Text>
                  <Box
                    display={"flex"}
                    gap={"1.3rem"}
                    width={"7rem"}
                    borderRadius={"3rem"}
                    bg={"#F8F8F8"}
                    px={"1rem"}
                    py={"0.62rem"}
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
                      fontSize="1rem"
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
                </VStack>
              </Box>{" "}
              <Button
                bg={"#027DE3"}
                className={inter.className}
                color={"white"}
                fontWeight={500}
                w={"100%"}
                mt={"1rem"}
                _hover={{}}
                onClick={() => {
                  addToCart({
                    id,
                    image,
                    name,
                    price,
                    size: selectedSize,
                    quantity: selectedQuantity,
                  });

                  onClose();
                }}
              >
                + Add to Cart
              </Button>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Product;
