import { useState, useEffect } from "react";
import axios from "axios";
import LoadingIndicator from "../component/LoadingIndicator";
import ErrorIndicator from "../component/ErrorIndicator";
import { Container, SimpleGrid,Flex,HStack, } from "@chakra-ui/react";
import ProductCard from "./ProductCard";

export default function FetchData() {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const [datas, setDatas] = useState([]);

  async function fetchAndUpdateData() {
    setLoading(true);
    try {
      let resp = await axios({
        method: "get",
        url: "http://localhost:3000/products",
      });
      console.log(resp);
      setLoading(false);
      setDatas(resp?.data);
    } catch (error) {
      setLoading(false);
      setErr(true);
      console.error(error);
    }
  }

  useEffect(() => {
    fetchAndUpdateData();
  }, []);

  if (loading) {
    return <LoadingIndicator />;
  }

  if (err) {
    return <ErrorIndicator />;
  }

  return (
    <>
    <Container maxW={"container.xl"}>
      <Flex direction={"row-reverse"}>
      
      </Flex>

      <HStack spacing={4} my={4}>
      </HStack>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        {datas?.map((data) => (
          <ProductCard {...data} key={data.id} />
        ))}
      </SimpleGrid>
    </Container>
    </>
  );
}
