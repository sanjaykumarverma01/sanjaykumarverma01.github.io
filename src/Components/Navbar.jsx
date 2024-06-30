import React from "react";
import {
  Box,
  Button,
  Flex,
  HStack,
  Img,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { Link } from "react-scroll";
import { BsFillMoonFill, BsSun } from "react-icons/bs";
import DrawerExample from "./Drawer";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import Logo from "../Logo.png"

const Navbar = () => {
  const handleDownload = async () => {
    const driveLink =
      "https://drive.google.com/file/d/13glAAJDaMXdXr8iCqUOMSZT8BDzXIVxU/view?usp=sharing";
    window.open(driveLink, "_blank");
  };
  const { colorMode, toggleColorMode } = useColorMode();
  if (colorMode === "dark") {
    var bgColor = "#222e3d";
    var tc = "#93989E";
    var bc = "2px solid rgb(150, 150, 226)";
    var tcb = "#93989E";
    var bgC = "#222e3d";
    var t = "#93989E";

    // hover
    var bc1 = "2px solid #00B9E8";
    var tc1 = "#00B9E8";
    var bgC1 = "#222e3d";
  } else {
    bgColor = "gray.100";
    // normal
    bc = "2px solid white";
    tcb = "white";
    bgC = "#00B9E8";
    t = "black";
    // hover
    bc1 = "2px solid #00B9E8";
    tc1 = "#00B9E8";
    bgC1 = "white";
  }
  return (
    <Box
      boxShadow="base"
      position="sticky"
      top="0"
      bgColor={bgColor}
      className="navbar"
      zIndex={1000}
      size={["xs", "sm", "md", "lg"]}
    >
      <Flex
        justifyContent="space-between"
        width="90%"
        alignContent="center"
        margin="auto"
        color={tc}
        size={["xs", "sm", "md", "lg"]}
      >
        <Flex
          justifyContent="space-between"
          alignItems="center"
          size={["xs", "sm", "md", "lg"]}
        >
          <Box display={["none", "none", "block", "block"]}>
            <Img
              src={Logo}
              alt="logo"
              width={[5, 10, 15, 20]}
              height={[5, 10, 15, 20]}
            />
          </Box>
          <Box display={["block", "block", "none", "none"]}>
            <DrawerExample />
          </Box>
        </Flex>
        <HStack
          direction={["column", "column", "row"]}
          gap={["3", "6", "8", "10"]}
          size={["xs", "sm", "md", "lg"]}
        >
          <Box
            size={["xs", "sm", "md", "lg"]}
            display={["none", "none", "block", "block"]}
          >
            <Link
              to="main"
              smooth={true}
              duration={1000}
              activeClass="active"
              spy={true}
              hashSpy={true}
            >
              <Text
                fontSize={["xs", "sm", "md", "xl"]}
                fontWeight={["400", "500", "600"]}
                _hover={{
                  color: "#00B9E8",
                  borderBottom: [
                    "2px solid",
                    "3px solid",
                    "4px solid",
                    "5px solid",
                  ],
                  borderColor: "#00B9E8",
                  cursor: "pointer",
                  borderRadius: "5px",
                }}
              >
                Home
              </Text>
            </Link>
          </Box>
          <Box
            size={["xs", "sm", "md", "lg"]}
            display={["none", "none", "block", "block"]}
          >
            <Link
              to="about"
              smooth={true}
              duration={1000}
              activeClass="active"
              spy={true}
              hashSpy={true}
            >
              <Text
                fontSize={["xs", "sm", "md", "xl"]}
                fontWeight={["400", "500", "600"]}
                _hover={{
                  color: "#00B9E8",
                  borderBottom: [
                    "2px solid",
                    "3px solid",
                    "4px solid",
                    "5px solid",
                  ],
                  borderColor: "#00B9E8",
                  cursor: "pointer",
                  borderRadius: "5px",
                }}
              >
                About
              </Text>
            </Link>
          </Box>
          <Box
            size={["xs", "sm", "md", "lg"]}
            display={["none", "none", "block", "block"]}
          >
            <Link
              to="skills"
              smooth={true}
              duration={1000}
              activeClass="active"
              spy={true}
              hashSpy={true}
            >
              <Text
                fontSize={["xs", "sm", "md", "xl"]}
                fontWeight={["400", "500", "600"]}
                _hover={{
                  color: "#00B9E8",
                  borderBottom: [
                    "2px solid",
                    "3px solid",
                    "4px solid",
                    "5px solid",
                  ],
                  borderColor: "#00B9E8",
                  cursor: "pointer",
                  borderRadius: "5px",
                }}
              >
                Skills
              </Text>
            </Link>
          </Box>
          <Box
            size={["xs", "sm", "md", "lg"]}
            display={["none", "none", "block", "block"]}
          >
            <Link
              to="projects"
              smooth={true}
              duration={1000}
              activeClass="active"
              spy={true}
              hashSpy={true}
            >
              <Text
                fontSize={["xs", "sm", "md", "xl"]}
                fontWeight={["400", "500", "600"]}
                _hover={{
                  color: "#00B9E8",
                  borderBottom: [
                    "2px solid",
                    "3px solid",
                    "4px solid",
                    "5px solid",
                  ],
                  borderColor: "#00B9E8",
                  cursor: "pointer",
                  borderRadius: "5px",
                }}
              >
                Projects
              </Text>
            </Link>
          </Box>
          <Box
            size={["xs", "sm", "md", "lg"]}
            display={["none", "none", "block", "block"]}
          >
            <Link
              to="contact"
              smooth={true}
              duration={1000}
              activeClass="active"
              spy={true}
              hashSpy={true}
            >
              <Text
                fontSize={["xs", "sm", "md", "xl"]}
                fontWeight={["400", "500", "600"]}
                _hover={{
                  color: "#00B9E8",
                  borderBottom: [
                    "2px solid",
                    "3px solid",
                    "4px solid",
                    "5px solid",
                  ],
                  borderColor: "#00B9E8",
                  cursor: "pointer",
                  borderRadius: "5px",
                }}
              >
                Contact
              </Text>
            </Link>
          </Box>
          <Box
            size={["xs", "sm", "md", "lg"]}
            display={["none", "none", "block", "block"]}
          >
            <a href="https://drive.google.com/uc?export=download&id=13glAAJDaMXdXr8iCqUOMSZT8BDzXIVxU">
              <Button
                onClick={handleDownload}
                bgColor={bgC}
                color={tcb}
                border={bc}
                _hover={{
                  color: tc1,
                  bgColor: bgC1,
                  border: bc1,
                }}
                zIndex={700}
              >
                RESUME <ExternalLinkIcon ml="10px" />
              </Button>
            </a>
          </Box>
          <Box _hover={{ cursor: "pointer" }} size={["xs", "sm", "md", "lg"]}>
            <Button
              size={["xs", "sm", "md", "lg"]}
              colorScheme="blue"
              onClick={toggleColorMode}
              variant="ghost"
              _hover={{
                color: "#00B9E8",
                borderBottom: [
                  "2px solid",
                  "3px solid",
                  "4px solid",
                  "5px solid",
                ],
                borderColor: "#00B9E8",
              }}
            >
              {colorMode === "light" ? <BsFillMoonFill /> : <BsSun />}
            </Button>
          </Box>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
