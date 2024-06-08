import React from "react";
import { Box, Stack,Input,Button } from "@chakra-ui/react";
export default function Login() {
  return (
    <>
      <Box mx="100px" my="10px">
        <div style={{ margin: "20px", textAlign: "center" }}>
          <h1
            style={{
              fontSize: "50px",
              marginTop: "30px",
              marginBottom: "30px",
            }}
          >
            Wellbeing made easier. We’ve got you.
          </h1>
          <hr
            style={{
              marginBottom: "30px",
            }}
          />
        </div>
      </Box>
      <Box padding="4" display="flex" justifyContent="center">
        <Stack direction="row" spacing={200}>
          <div>
            <h2>Discover lululemon Membership</h2>
            <p>One account. Tons of benefits. Endless possibilities.</p>
            <h2>Membership benefits include</h2>
            <p>Early Access to Product Drops</p>
            <p>Exchange or Credit on Sale Items</p>
            <p>Select Peloton Classes</p>
            <p>Membership Events</p>
            <p>Receipt-Free Returns</p>
            <p>Free Hemming</p>
          </div>
          <div>
            <h2>Sign in to your member account</h2>
            <p>Email address</p>
            <Stack spacing={3}>
              <Input placeholder="Enter Email" size="lg" height={"40px"} borderColor={"red"}/>
              <p>Password</p>
              <Input placeholder="Enter Password" size="lg" height={"40px"} borderColor={"red"}/>
            </Stack>
            <Button
              colorScheme="teal"
              variant="outline"
              width="500px"
              height={"50px"}
              borderRadius={"5px"}
              marginTop="20" 
              backgroundColor={"lightblue"}
            >
              SIGN IN
            </Button>
          </div>
        </Stack>
      </Box>
      <hr/>
    </>
  );
}
