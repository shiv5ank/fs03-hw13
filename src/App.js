import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Product from "./Components/Product";
import Contact from "./Components/Contact";
import { Wrap, Box, Input, Button, Flex } from "@chakra-ui/react";

function App() {
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState("");
  const [input, setInput] = useState("");
  const [isProduct, setIsProduct] = useState(true);
 

  useEffect(() => {
    

    axios
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => {
        if (isProduct) {
     
          setProduct(res.data);
        }
      });

    return () => {
      
        setCategory("")
      
    };
  }, [category,isProduct]);

  const search = () => {
    setCategory(input);
    setInput("");
  };

  return (
    <Box>
      <Flex
        justify="center"
        gap="30px"
        boxShadow="dark-lg"
        p="8px"
        margin="50px"
        rounded="md"
      >
        <Input
          placeholder="Search For Product Category"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <Button colorScheme="blue" w="200px" onClick={search}>
          Search
        </Button>

        <Button
          colorScheme="green"
          w="200px"
          onClick={() => {
            setIsProduct(false);
          }}
        >
          Contact
        </Button>
      </Flex>

      <Wrap spacing="100px" justify="center">
        {isProduct &&
          product.length > 0 &&
          product.map((p) => {
            return <Product data={p} />;
          })}
        {!isProduct && <Contact setIsProduct={setIsProduct} />}
      </Wrap>
    </Box>
  );
}

export default App;
