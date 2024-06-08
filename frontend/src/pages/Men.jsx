import { Image, Stack } from "@chakra-ui/react";
export default function Men() {
  return (
    <>
      <Stack direction="row">
        <Image
          boxSize="20vm"
        //   objectFit="cover"
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
      
    </>
  );
}
