import { Box, Flex, Heading, Skeleton } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import InputComponent from "../../components/Input";
import ProductCard from "../../components/ProductCard";
import { useDebounce } from "../../hooks/debounce";
import { getProducts } from "../../services/products";

const Products = () => {
  const [filter, setFilter] = useState({
    q: "",
    // limit: 10,
    // page: 1,
  });
  const debouncedFilter = useDebounce(filter, 1000);

  const { data: productsData, isLoading } = useQuery({
    queryKey: ["productsData", debouncedFilter],
    queryFn: () => getProducts(debouncedFilter),
    enabled: Boolean(debouncedFilter),
  });

  return (
    <Box minH="80vh" p={"12"}>
      <Flex justify={"space-between"} align={"center"}>
        <Heading size={"md"}>Products</Heading>
        <InputComponent
          placeholder="Enter product name . . ."
          onKeyUp={(e: any) => {
            setFilter((prev: any) => ({ ...prev, q: e.target.value }));
          }}
        />
      </Flex>
      <Box mt={"8"}>
        {isLoading ? (
          <Flex
            justifyContent={"space-between"}
            alignItems={"center"}
            flexWrap={"wrap"}
            gap={"10"}
          >
            {[...Array(10)]?.map((_, i: number) => (
              <Skeleton h={"380px"} w={"250px"} key={i} />
            ))}
          </Flex>
        ) : productsData?.products?.length > 0 ? (
          <Flex
            justifyContent={"space-between"}
            alignItems={"center"}
            flexWrap={"wrap"}
            gap={"16"}
          >
            {productsData?.products?.map((el: any, i: number) => (
              <ProductCard item={el} key={i} />
            ))}
          </Flex>
        ) : (
          <Flex align={"center"} justifyContent={"center"}>
            No Results Found
          </Flex>
        )}
      </Box>
    </Box>
  );
};

export default Products;
