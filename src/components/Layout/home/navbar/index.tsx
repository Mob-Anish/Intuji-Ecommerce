import { Flex, Heading } from "@chakra-ui/react";

const HomeNavbar = () => {
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
      </Flex>
    </>
  );
};

export default HomeNavbar;
