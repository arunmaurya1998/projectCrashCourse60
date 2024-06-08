import { Image, Stack, Box, Button } from "@chakra-ui/react";
export default function Women(){
    return(
        <>
             <Stack direction="row">
        <Image
          src="https://images.lululemon.com/is/image/lululemon/na_Jun24_wk2_W_OTM_3_1_D?wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
          alt="Dan Abramov"
          height="600px"
          width="100%"
        />
      </Stack>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <div style={{ flex: "1" }}>
          <h1>Joie de Vitapink. </h1>
        </div>
        <div style={{ flex: "1" }}>
          <p>
          A hue this deliciously bright fills days with pure delight.
          </p>
        </div>
      </div>
      <Box padding="4" display="flex" justifyContent="center">
        <Stack direction="row" spacing={4}>
          <div>
            <Image
              src="https://images.lululemon.com/is/image/lululemon/na_Jun24_wk2_W_OTM_1_2_Lg_MediaAction_D_Align?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
              alt="Pants"
              borderRadius="md"
              boxShadow="md"
              width="600px"
              height="650px"
              padding="20x"
            />
            <h1>More is more.</h1>
            <p>The Align Cropped Cami Tank and Short—a double scoop of buttery softness.</p>
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
          <div>
            <Image
              src="https://images.lululemon.com/is/image/lululemon/na_Jun24_wk2_W_OTM_1_2_Lg_MediaAction_D_PinkClothes_Static_V2?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
              alt="Shirts"
              borderRadius="md"
              boxShadow="md"
              width="600px"
              height="650px"
              padding="20x"
            />
            <h1>Summer gets sweeter.</h1>
            <p>
            Every day feels extra rosy in lightweight layers of Vitapink.
            </p>
         
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
        </Stack>
      </Box>
        </>
    )
}