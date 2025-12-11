import { Box, Image, Tag, Text } from "@chakra-ui/react";

const ProductCard = ({ item }: any) => {
  return (
    <Box
      h={"380px"}
      w={"250px"}
      boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}
      p={"6"}
      cursor={"pointer"}
      lineHeight={"6"}
    >
      <Image
        src={item?.images?.length > 1 ? item?.images[0] : item?.images}
        alt={item?.title}
      />
      <Text>{item?.title}</Text>
      <Text>Rs. {item?.price}</Text>
      <Text>Rating: {item?.rating}</Text>
      {item?.brand && (
        <Tag variant={"solid"} color={"blue"} size={"md"}>
          <Text color={"white"}>{item?.brand}</Text>
        </Tag>
      )}
    </Box>
  );
};

export default ProductCard;
