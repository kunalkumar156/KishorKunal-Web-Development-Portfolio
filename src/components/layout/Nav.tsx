import React from "react";
import {
  Box,
  Container,
  Flex,
  IconButton,
  Link,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";

function Nav() {
  return (
    <Container maxW={1200}>
      <Flex
        as="nav"
        justifyContent="space-between"
        alignItems="center"
        py={4}
        wrap="wrap"
        color={"white"}
      >
        {/* Logo */}

        <Link href="#">
          <Image src="#" alt="logo-image" />
        </Link>

        {/* Links */}
        <Flex gap={12}>
          <Link className="nav-link">Home</Link>
          <Link className="nav-link">About</Link>
          <Link className="nav-link">Services</Link>
          <Link className="nav-link">Portfolio</Link>
        </Flex>

        {/* Contact Button */}

        <Link>
          <Button>Contact me</Button>
        </Link>
      </Flex>
    </Container>
  );
}

export default Nav;
