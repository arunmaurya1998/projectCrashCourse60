import { Box, SimpleGrid, Text, Heading } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box>
      <SimpleGrid columns={4} spacing={10}>
        <Box p={5}>
          <Heading fontSize="xl">MY ACCOUNT</Heading>
          <Text mt={4}>Membership Program</Text>
          <Text mt={4}>Sin In</Text>
          <Text mt={4}>Register</Text>
          <Text mt={4}>Order Status</Text>
        </Box>
        <Box p={5} >
          <Heading fontSize="xl">HELP</Heading>
          <Text mt={4}>FAQ</Text>
          <Text mt={4}>Accessibility Statement</Text>
          <Text mt={4}>Ordering</Text>
          <Text mt={4}>Shipping Policy</Text>
          <Text mt={4}>Returns</Text>
        </Box>
        <Box p={5} >
          <Heading fontSize="xl">ABOUT US</Heading>
          <Text mt={4}>Our Business</Text>
          <Text mt={4}>Media</Text>
          <Text mt={4}>Investors</Text>
          <Text mt={4}>Strategic Sales</Text>
          <Text mt={4}>Affiliates and Creators</Text>
        </Box>
        <Box p={5} >
          <Heading fontSize="xl">CONTACT US</Heading>
          <Text mt={4}>Live Chat</Text>
          <Text mt={4}>Email Sign Up</Text>
          <Text mt={4}>Contact Us</Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
}
