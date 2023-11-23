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
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";

import add from "../../public/assets/others/plus.svg";
import minus from "../../public/assets/others/minus.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface ProductProps {
  image: StaticImageData;
  name: string;
  price: string;
  description: string;
}

const Product: React.FC<ProductProps> = ({
  image,
  name,
  price,
  description,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedQuantity, setSelectedQuantity] = useState(2);

  return (
    <>
      <Box
        cursor={"pointer"}
        maxWidth={{ base: "100%", md: "48%" }}
        w={"27rem"}
        height={"max-content"}
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
              {`₦${price}`}
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
          borderRadius={"0.75rem"}
          minW={"70%"}
          w={"max-content"}
          py={"2rem"}
          px={"2.8rem"}
        >
          <ModalBody
            flexDirection={{ base: "column", lg: "row" }}
            justifyContent={"space-between"}
            display={"flex"}
            gap={"2rem"}
            p={0}
          >
            <Box>
              <Image src={image} alt="product image" />
            </Box>
            <VStack w={"50%"} gap={"1rem"}>
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
                >
                  {description}
                </Text>
              </VStack>
              <Box
                flexDir={{ base: "column", md: "row" }}
                justifyContent={"space-between"}
                display={"flex"}
                w={"100%"}
                mt={"1.5rem"}
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
                    {[41, 42, 43, 44, 45].map((size, index) => (
                      <Circle
                        bg={selectedIndex === index ? "#1D97FD" : "#F8F8F8"}
                        cursor={"pointer"}
                        size={"2.75rem"}
                        key={index}
                        color={selectedIndex === index ? "white" : "#717171"}
                        fontSize={"1rem"}
                        fontFamily={"Poppins"}
                        onClick={() => setSelectedIndex(index)}
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
                color={"white"}
                fontWeight={500}
                w={"100%"}
                mt="1rem"
              >
                Add to Cart
              </Button>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Product;