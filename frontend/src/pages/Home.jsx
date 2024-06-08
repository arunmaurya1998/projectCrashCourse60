import { Image, Stack, Box, Button } from "@chakra-ui/react";
import FetchData from "../component/FetchData";

export default function Home() {
  return (
    <>
      <Stack direction="row">
        <Image
          src="https://images.lululemon.com/is/image/lululemon/NA_Jun24_Wk2_FathersDay_MLP_3_1_D?wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
          alt="Dan Abramov"
          height="600px"
          width="100%"
        />
      </Stack>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <div style={{ flex: "1" }}>
          <h1>Give Dad gear that gets more done.</h1>
        </div>
        <div style={{ flex: "1" }}>
          <p>
            Order do-it-all gifts for Dad by June 11 at 11:59pm PST, get them by
            June 16. *Exclusions apply.
          </p>
        </div>
      </div>
      <Box padding="4" display="flex" justifyContent="center">
        <Stack direction="row" spacing={4}>
          <div>
            <Image
              src="https://images.lululemon.com/is/image/lululemon/NA_Jun24_Wk2_FathersDay_HP_1_2_Lg_MediaAction_D_Pants?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
              alt="Pants"
              borderRadius="md"
              boxShadow="md"
              width="600px"
              height="650px"
              padding="20x"
            />
            <h1>Swing into comfort.</h1>
            <p>ABC Classic-Fit Trousers move effortlessly, just like Dad.</p>
            <Stack direction="row" spacing={4} align="center">
              <Button
                backgroundColor="black"
                variant="solid"
                color="white"
                width="200px"
                height={"50px"}
                borderRadius={"5px"}
              >
                Button
              </Button>
              <Button
                colorScheme="teal"
                variant="outline"
                width="200px"
                height={"50px"}
                borderRadius={"5px"}
              >
                Button
              </Button>
            </Stack>
          </div>
          <div>
            <Image
              src="https://images.lululemon.com/is/image/lululemon/NA_Jun24_Wk2_FathersDay_HP_1_2_Lg_MediaAction_D_Shirts?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
              alt="Shirts"
              borderRadius="md"
              boxShadow="md"
              width="600px"
              height="650px"
              padding="20x"
            />
            <h1>Keep dads in their element.</h1>
            <p>
              The Textured Mesh Short-Sleeve Polo goes long on cool comfort.
            </p>
            <Button
              colorScheme="teal"
              variant="outline"
              width="200px"
              height={"50px"}
              borderRadius={"5px"}
            >
              Button
            </Button>
          </div>
        </Stack>
      </Box>
      <div>
      <FetchData/> 
      </div>
    </>
  );
}
