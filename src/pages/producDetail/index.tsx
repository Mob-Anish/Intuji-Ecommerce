import {
  Alert,
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
import { useState } from "react";
import { useAddToCart } from "../../hooks/cart";
import { CustomToast } from "../../components/Toast";

const ProductDetailPage = () => {
  const { showToast } = CustomToast();
  const { id } = useParams();
  const navigate = useNavigate();

  const [counter, setCounter] = useState(0);

  const handleAddCounter = () => {
    setCounter(counter + 1);
  };

  const handleReduceCounter = () => {
    setCounter(counter - 1);
  };

  const { data: productData, isLoading } = useFetchProduct(id);
  const addToCartMutation = useAddToCart();

  const handleAddToCart = () => {
    const itemsData = [{ id: id, quantity: counter }];

    addToCartMutation.mutate(itemsData, {
      onSuccess: () => {
        showToast({
          message: "Product added to cart.",
          status: "success",
        });
      },
      onError: () => {
        showToast({
          message: "Failed to add product to cart.",
          status: "error",
        });
      },
    });
  };

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
            pb={"12"}
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

              <Flex align={"center"} gap={"2"}>
                <Heading size={"md"} py="2">
                  Quantity:
                </Heading>
                <Button size={"sm"} pt="2" pb="2" onClick={handleReduceCounter}>
                  -
                </Button>
                <Text width={"15px"}>{counter}</Text>
                <Button
                  size={"sm"}
                  pt="2"
                  pb="2"
                  onClick={handleAddCounter}
                  bg={"#1C599F"}
                >
                  +
                </Button>
              </Flex>

              <Button
                size={"md"}
                pt="2"
                pb="2"
                mt={"12"}
                onClick={handleAddToCart}
              >
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
