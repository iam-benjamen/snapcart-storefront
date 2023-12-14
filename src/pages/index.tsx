import emptycart from "../../public/assets/emptycart.svg";
import avatar from "../../public/assets/Avatar.svg";
import whatsapp from "../../public/assets/whatsapp.svg";
import instagram from "../../public/assets/instagram.svg";
import twitter from "../../public/assets/twitter.svg";

import product1 from "../../public/assets/product samples/Foto.svg";
import product2 from "../../public/assets/product samples/Foto -2.svg";
import product3 from "../../public/assets/product samples/Foto -3.svg";
import product4 from "../../public/assets/product samples/Foto -4.svg";
import product5 from "../../public/assets/product samples/Foto -5.svg";
import product6 from "../../public/assets/product samples/Foto -6.svg";

import {
  Box,
  Text,
  VStack,
  Avatar,
  Heading,
  Button,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Inter } from "next/font/google";

import styles from "@/styles/Home.module.css";
import MetaTags from "@/components/MetaTags";
import Image from "next/image";
import Product from "@/components/Product";
import CartProduct from "@/components/common/CartProduct";
import { useCart } from "@/context/cartContext";
import { formatNumberWithCommas } from "../../helper";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { cart, getTotalPrice } = useCart();

  return (
    <>
      <MetaTags />
      <main className={`${styles.main} ${inter.className}`}>
        <Box w={"100%"} display={"flex"} px={{ base: "1rem", md: "3.5rem" }}>
          <Box
            borderRight={{ base: "none", md: "1px solid #F2F2F2" }}
            pr={{ base: "0rem", md: "3rem", lg: "4rem" }}
            pt={{ base: "3.75rem", md: "5rem" }}
            w={{ base: "100%", md: "70%" }}
            flexDir={"column"}
            display={"flex"}
          >
            <VStack gap={"0.75rem"} alignItems={"flex-start"}>
              <Box width={{ base: "4.25rem", md: "7.5rem" }}>
                <Image src={avatar} alt="store image" />
              </Box>
              <Heading
                fontSize={{ base: "1.25rem", md: "2rem" }}
                className={inter.className}
              >
                Jaystores
              </Heading>
              <Text fontSize={"1rem"} color={"#717171"} lineHeight={"1.5rem"}>
                Step into a world of unparalleled fashion and comfort at
                Jaystores, where we curate a mesmerizing collection of shoes and
                accessories to elevate your style game. Our online store is a
                haven for those who appreciate the perfect blend of trendsetting
                designs and unbeatable quality
              </Text>

              <Box
                justifyContent={{ base: "space-between", sm: "flex-start" }}
                alignItems={"center"}
                display={"flex"}
                gap={"0.7rem"}
                w={"100%"}
              >
                <Button
                  borderRadius={"0.625rem"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  height={"3.375rem"}
                  display={"flex"}
                  color={"white"}
                  px={"0.75rem"}
                  bg={"#1D97FD"}
                  gap="0.56rem"
                  _hover={{}}
                >
                  <Image src={whatsapp} alt="whatsapp icon" />
                  <Text fontSize="1rem" fontWeight={400}>
                    Chat to merchant
                  </Text>
                </Button>
                <Box
                  cursor={"pointer"}
                  width={{ base: "3.875rem", md: "4.875rem" }}
                >
                  <Image src={twitter} alt="soscial media btns" />
                </Box>
                <Box
                  cursor={"pointer"}
                  width={{ base: "3.875rem", md: "4.875rem" }}
                >
                  <Image src={instagram} alt="soscial media btns" />
                </Box>
              </Box>
            </VStack>

            <InputGroup
              border={"transparent"}
              mt={"2rem"}
              display={"flex"}
              alignItems={"center"}
              background={"#FAFAFA"}
              w={"99%"}
            >
              <InputLeftElement
                pt={".75rem"}
                pl={"0.75rem"}
                pointerEvents="none"
              >
                <SearchIcon w={"1.5rem"} h={"1.5rem"} color={"#919191"} />
              </InputLeftElement>
              <Input
                pl={0}
                _hover={{}}
                ml={"2.75rem"}
                color={"gray"}
                height={"3.25rem"}
                type="search"
                _placeholder={{
                  fontSize: "1rem",
                  color: "#BABABA",
                  fontWeight: 400,
                }}
                placeholder="Search for products"
                focusBorderColor="transparent"
              />
            </InputGroup>

            <Box mt={"2rem"}>
              <Tabs variant="unstyled">
                <TabList display={"flex"} gap={"1.25rem"}>
                  <Tab
                    _selected={{ color: "#1D97FD" }}
                    _hover={{ color: "#1d97fd" }}
                    p={"0.75rem"}
                    color={"#919191"}
                  >
                    <Text>Shoes</Text>
                  </Tab>
                  <Tab
                    _selected={{ color: "#1D97FD" }}
                    _hover={{ color: "#1d97fd" }}
                    p={"0.75rem"}
                    color={"#919191"}
                  >
                    Accesories
                  </Tab>
                  <Tab
                    _selected={{ color: "#1D97FD" }}
                    _hover={{ color: "#1d97fd" }}
                    p={"0.75rem"}
                    color={"#919191"}
                  >
                    Sportwear
                  </Tab>
                </TabList>

                <TabIndicator
                  mt="-1.5px"
                  height="1.5px"
                  bg="#1D97FD"
                  borderRadius="1px"
                />

                <TabPanels mt={"1.75rem"}>
                  <TabPanel p={0}>
                    <Box
                      rowGap={"4.8rem"}
                      display={"flex"}
                      flexWrap={"wrap"}
                      columnGap={"1.4rem"}
                    >
                      <Product
                        id={1}
                        image={product1}
                        name="Adidas Shoes M60"
                        price={15000}
                        description="Nike stands as a symbol of innovation, quality, and iconic design. Nike, Inc., the multinational corporation headquartered in Beaverton, Oregon, has been consistently setting the benchmark for athletic footwear. Whether you're an athlete striving for peak performance or a fashion enthusiast looking for stylish and comfortable footwear,"
                      />
                      <Product
                        id={2}
                        image={product2}
                        name="Adidas Shoes M60"
                        price={15000}
                        description="Nike stands as a symbol of innovation, quality, and iconic design. Nike, Inc., the multinational corporation headquartered in Beaverton, Oregon, has been consistently setting the benchmark for athletic footwear. Whether you're an athlete striving for peak performance or a fashion enthusiast looking for stylish and comfortable footwear,"
                      />
                      <Product
                        id={3}
                        image={product3}
                        name="Adidas Shoes M60"
                        price={15000}
                        description="Nike stands as a symbol of innovation, quality, and iconic design. Nike, Inc., the multinational corporation headquartered in Beaverton, Oregon, has been consistently setting the benchmark for athletic footwear. Whether you're an athlete striving for peak performance or a fashion enthusiast looking for stylish and comfortable footwear,"
                      />
                      <Product
                        id={4}
                        image={product4}
                        name="Adidas Shoes M60"
                        price={15000}
                        description="Nike stands as a symbol of innovation, quality, and iconic design. Nike, Inc., the multinational corporation headquartered in Beaverton, Oregon, has been consistently setting the benchmark for athletic footwear. Whether you're an athlete striving for peak performance or a fashion enthusiast looking for stylish and comfortable footwear,"
                      />
                      <Product
                        id={5}
                        image={product5}
                        name="Adidas Shoes M60"
                        price={15000}
                        description="Nike stands as a symbol of innovation, quality, and iconic design. Nike, Inc., the multinational corporation headquartered in Beaverton, Oregon, has been consistently setting the benchmark for athletic footwear. Whether you're an athlete striving for peak performance or a fashion enthusiast looking for stylish and comfortable footwear,"
                      />
                      <Product
                        id={6}
                        image={product6}
                        name="Adidas Shoes M60"
                        price={15000}
                        description="Nike stands as a symbol of innovation, quality, and iconic design. Nike, Inc., the multinational corporation headquartered in Beaverton, Oregon, has been consistently setting the benchmark for athletic footwear. Whether you're an athlete striving for peak performance or a fashion enthusiast looking for stylish and comfortable footwear,"
                      />
                    </Box>
                  </TabPanel>
                  <TabPanel p={0}>
                    <Box
                      rowGap={"4.8rem"}
                      display={"flex"}
                      flexWrap={"wrap"}
                      columnGap={"1.4rem"}
                    >
                      <Product
                        id={101}
                        image={product1}
                        name="Adidas Shoes M60"
                        price={15000}
                        description="Nike stands as a symbol of innovation, quality, and iconic design. Nike, Inc., the multinational corporation headquartered in Beaverton, Oregon, has been consistently setting the benchmark for athletic footwear. Whether you're an athlete striving for peak performance or a fashion enthusiast looking for stylish and comfortable footwear,"
                      />
                      <Product
                        id={92}
                        image={product2}
                        name="Adidas Shoes M60"
                        price={15000}
                        description="Nike stands as a symbol of innovation, quality, and iconic design. Nike, Inc., the multinational corporation headquartered in Beaverton, Oregon, has been consistently setting the benchmark for athletic footwear. Whether you're an athlete striving for peak performance or a fashion enthusiast looking for stylish and comfortable footwear,"
                      />
                      <Product
                        id={93}
                        image={product3}
                        name="Adidas Shoes M60"
                        price={15000}
                        description="Nike stands as a symbol of innovation, quality, and iconic design. Nike, Inc., the multinational corporation headquartered in Beaverton, Oregon, has been consistently setting the benchmark for athletic footwear. Whether you're an athlete striving for peak performance or a fashion enthusiast looking for stylish and comfortable footwear,"
                      />

                      <Product
                        id={41}
                        image={product6}
                        name="Adidas Shoes M60"
                        price={15000}
                        description="Nike stands as a symbol of innovation, quality, and iconic design. Nike, Inc., the multinational corporation headquartered in Beaverton, Oregon, has been consistently setting the benchmark for athletic footwear. Whether you're an athlete striving for peak performance or a fashion enthusiast looking for stylish and comfortable footwear,"
                      />
                    </Box>
                    <p>two!</p>
                  </TabPanel>
                  <TabPanel p={0}>
                    <Box
                      rowGap={"4.8rem"}
                      display={"flex"}
                      flexWrap={"wrap"}
                      columnGap={"1.4rem"}
                    >
                      <Product
                        id={11}
                        image={product2}
                        name="Adidas Shoes M60"
                        price={15000}
                        description="Nike stands as a symbol of innovation, quality, and iconic design. Nike, Inc., the multinational corporation headquartered in Beaverton, Oregon, has been consistently setting the benchmark for athletic footwear. Whether you're an athlete striving for peak performance or a fashion enthusiast looking for stylish and comfortable footwear,"
                      />
                      <Product
                        id={27}
                        image={product3}
                        name="Adidas Shoes M60"
                        price={15000}
                        description="Nike stands as a symbol of innovation, quality, and iconic design. Nike, Inc., the multinational corporation headquartered in Beaverton, Oregon, has been consistently setting the benchmark for athletic footwear. Whether you're an athlete striving for peak performance or a fashion enthusiast looking for stylish and comfortable footwear,"
                      />

                      <Product
                        id={33}
                        image={product6}
                        name="Adidas Shoes M60"
                        price={15000}
                        description="Nike stands as a symbol of innovation, quality, and iconic design. Nike, Inc., the multinational corporation headquartered in Beaverton, Oregon, has been consistently setting the benchmark for athletic footwear. Whether you're an athlete striving for peak performance or a fashion enthusiast looking for stylish and comfortable footwear,"
                      />
                    </Box>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
          </Box>
          <Box
            display={{ base: "none", md: "flex" }}
            justifyContent={"center"}
            height={"max-content"}
            alignItems={"center"}
            pl={"1.5rem"}
            w={"30%"}
          >
            {cart.length === 0 ? (
              <VStack pt={"17rem"} gap={"2.88rem"} alignItems={"center"}>
                <Image src={emptycart} alt="empty cart" />
                <Text fontWeight={600}>Your cart is empty</Text>
              </VStack>
            ) : (
              <VStack width={"100%"} pt={"2.62rem"} alignItems={"flex-start"}>
                <VStack gap={"1.62rem"} w={"100%"} alignItems={"flex-start"}>
                  <Text fontWeight={700} fontSize={"1.25rem"}>
                    Orders
                  </Text>

                  {cart.map((item) => (
                    <CartProduct
                      key={item.id}
                      price={item.price}
                      quantity={item.quantity}
                      image={item.image}
                      id={item.id}
                      name={item.name}
                      size={item.size}
                    />
                  ))}

                  <Box
                    display={"flex"}
                    mt={"1rem"}
                    justifyContent={"space-between"}
                    w={"100%"}
                  >
                    <Text fontWeight={600} fontSize={"1.125rem"}>
                      Subtotal
                    </Text>
                    <Text fontWeight={600} fontSize={"1.125rem"}>
                      {`₦${formatNumberWithCommas(getTotalPrice())}`}
                    </Text>
                  </Box>

                  <Text color={"#717171"}>
                    Shipping and taxes calculated at checkout
                  </Text>
                  <Button
                    color={"white"}
                    w={"100%"}
                    bg={"#027DE3"}
                    borderRadius={"0.25rem"}
                  >
                    Checkout
                  </Button>
                </VStack>
              </VStack>
            )}
          </Box>
        </Box>
      </main>
    </>
  );
}
