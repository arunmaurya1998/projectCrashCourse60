import { Link } from "react-router-dom";
import { Input, Box, Stack, HStack } from "@chakra-ui/react";
import { FaRegUserCircle, FaShoppingBag, FaRegHeart } from "react-icons/fa";
import './css/Navbar.css'; 

const links = [
  {
    to: "/",
    label: (<h4>HOME</h4>),
  },
  {
    to: "/women",
    label: (<h4>WOMEN</h4>),
  },
  {
    to: "/men",
    label: (<h4>MEN</h4>),
  },
  {
    to: "/accessories",
    label: (<h4>ACCESSORIES</h4>),
  },
  {
    to: "/shoes",
    label: (<h4>SHOES</h4>),
  },
  {
    to: "/likenew",
    label: (<h4>LIKE ME</h4>),
  },
  {
    to: "/fathersday",
    label: (<h4 className="fathersday">FATHER'S DAY</h4>),
  },
  {
    label: (
      <Box display={{ base: 'none', md: 'block' }}>
        <Stack spacing={4}>
          <Input placeholder="Search" size="lg" style={{ paddingTop: "10px", paddingBottom: "10px" }} />
        </Stack>
      </Box>
    ),
  },
];

const iconLinks = [
  {
    to: "/login",
    label: (<FaRegUserCircle />),
  },
  {
    to: "/wishlist",
    label: (<FaRegHeart />),
  },
  {
    to: "/kart",
    label: (<FaShoppingBag />),
  },
];

export default function Navbar() {
  return (
    <div className="navbar">
      {links.map((link) => (
        <Link to={link.to} key={link.to}>
          {link.label}
        </Link>
      ))}
      <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
        {iconLinks.map((link) => (
          <Link to={link.to} key={link.to}>
            {link.label}
          </Link>
        ))}
      </HStack>
    </div>
  );
}
