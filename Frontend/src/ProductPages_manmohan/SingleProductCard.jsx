import {
  Box,
  GridItem,
  Image,
  SkeletonCircle,
  SkeletonText,
  Text,
  VStack,
  Grid,
} from "@chakra-ui/react";
import { Button } from "antd";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function SingleProductCard({ data, loading }) {
  let date = new Date();
  date.setDate(date.getDate() + 5);

  const [st, setst] = useState(false);

const navigate=useNavigate()
  const MoveTocart=(id)=>{
     
    navigate("/singleproduct/:id")

  }


  return (
    <>
      <Box className="singlePr">
        {data.length > 0
          ? data.map((elm) => {
              return loading ? (
                <Box
                  key={elm._id}
                  padding="6"
                  boxShadow="lg"
                  bg="white"
                  w="full"
                >
                  <SkeletonCircle size="10" />
                  <SkeletonText
                    mt="4"
                    noOfLines={4}
                    spacing="4"
                    skeletonHeight="2"
                  />
                </Box>
              ) : (
                <Singleproductwrapper key={elm._id}>
                  <Box className="single-child">
                    <Image src={elm.img} alt="img" />
                    <VStack textAlign="center" className="a">
                      <Text as={"i"} noOfLines={1}>
                        {" "}
                        {elm.title}
                      </Text>
                      <Box w="full" className="ab">
                        <Text fontSize={"xs"}>
                          all size and color availble{" "}
                        </Text>
                        <Box
                          w="50%"
                          display={"flex"}
                          m="auto"
                          gap={"1"}
                          alignItems="center"
                          className="price-tag"
                        >
                          <Text fontSize={"xs"} as="b">
                            ₹{elm.price}
                          </Text>
                          |
                          <Text as="del" fontSize={"xs"}>
                            ₹{elm.mrp}
                          </Text>
                          <Text>{elm.discount}</Text>
                        </Box>
                      </Box>
                    </VStack>
                    <Box className="showdiv">
                      <Button  onClick={()=>MoveTocart(elm._id)} >Add to cart</Button>
                    </Box>
                  </Box>
                </Singleproductwrapper>
              );
            })
          : ""}
      </Box>
    </>
  );
}

const Singleproductwrapper = styled.div`
  .single-child {
    :hover {
    .showdiv{
      display:block
    }
    .price-tag{
      display:none
    }
     
    }
   
  }
  .showdiv{
    display:none
  }

  }
`;
