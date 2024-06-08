import {
  Card,
  CardHeader,
  CardBody,
  Stack,
  Box,
  Heading,
  Text,
  StackDivider,
  Image,
  Flex
} from "@chakra-ui/react";

export default function ProductCard(children) {
  return (
    <Card>
      {/* <CardHeader>
        <Heading size="md">{children.title}</Heading>
      </CardHeader> */}

      <CardBody>
        <Stack>
          <Image
            boxSize="300px"
            borderRadius={"5px"}
            src={children.img}
            alt="Dan Abramov"
          />
        </Stack>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Text pt="2" fontSize="sm">
              {children.title}
            </Text>
          </Box>
          <Box>
          <Flex align="center">
            <Heading size="xs" textTransform="uppercase">
              price
            </Heading>
            <Text pt="2" fontSize="sm" ml={2}>
              {children.price}
            </Text>
          </Flex>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
}
