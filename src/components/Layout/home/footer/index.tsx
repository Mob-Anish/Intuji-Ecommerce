import { Flex, Text } from "@chakra-ui/react";

const HomeFooter = () => {
  return (
    <>
      <Flex
        align="center"
        justify="center"
        bg={"black"}
        bottom="0"
        left="0"
        py="2"
        minH="10vh"
        w="100%"
        color={"white"}
        px={"2"}
      >
        <Text color="fadedText" fontSize="sm" as="span">
          © {new Date().getFullYear()} Anish Manandhar. All Rights Reserved.
        </Text>
      </Flex>
    </>
  );
};

export default HomeFooter;
