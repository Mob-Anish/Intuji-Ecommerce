import {
    Box,
    Button,
    Flex,
    Heading,
    Image,
    Skeleton,
    Text,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import HomeLayout from "../../components/Layout/home";
import { useFetchProduct } from "../../hooks/products/useProducts";

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: productData, isLoading } = useFetchProduct(id);

  return (
    <>
      <HomeLayout>
        <Box px={"8"} pt={"4"}>
          <Button
            size={"lg"}
            pt="2"
            pb="2"
            mt={"3"}
            bg={"#1C599F"}
            onClick={() => navigate("/")}
          >
            Back
          </Button>
        </Box>

        {isLoading ? (
          <Flex
            align={"center"}
            justify={"center"}
            px={"8"}
            minH={"80vh"}
            gap={"20"}
            py={"12"}
            wrap={{ sm: "wrap", lg: "nowrap" }}
          >
            <Skeleton h={"700px"} w={"400px"} borderRadius={"15px"} />
            <Skeleton h={"400px"} w={"750px"} borderRadius={"15px"} />
          </Flex>
        ) : (
          <Flex
            align={"center"}
            justify={"center"}
            px={"8"}
            minH={"80vh"}
            wrap={{ sm: "wrap", lg: "nowrap" }}
          >
            <Image
              h={"700px"}
              src={
                productData?.images?.length > 1
                  ? productData?.images[0]
                  : productData?.images
              }
              alt={productData?.title}
            />
            <Box lineHeight={"6"}>
              <Heading>{productData?.title}</Heading>
              <Text py="2">{productData?.description}</Text>
              <Heading size={"md"}>Price: Rs. {productData?.price}</Heading>
              <Heading size={"md"} py="2">
                Rating: {productData?.rating}
              </Heading>

              <Button size={"md"} pt="2" pb="2" mt={"3"}>
                Add to Cart
              </Button>
            </Box>
          </Flex>
        )}
      </HomeLayout>
    </>
  );
};

export default ProductDetailPage;
