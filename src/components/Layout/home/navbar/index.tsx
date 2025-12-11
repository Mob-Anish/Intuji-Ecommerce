import { Flex, Heading, Text } from "@chakra-ui/react";
import { useFetchAllCart } from "../../../../hooks/cart";

const HomeNavbar = () => {
  const { data: cartData } = useFetchAllCart();

  return (
    <>
      <Flex
        align="center"
        justify="space-between"
        bg={"black"}
        top="0"
        left="0"
        py="2"
        minH="10vh"
        w="100%"
        color={"white"}
        px={"2"}
      >
        <Heading size={"md"} fontWeight="600">
          Intuji Ecommerce
        </Heading>

        <Text color={"white"}>Cart ({cartData?.totalQuantity})</Text>
      </Flex>
    </>
  );
};

export default HomeNavbar;
