import {
  Box,
  Heading,
  Input,
  VStack,
  Button,
  useColorMode,
  Flex,
  Text,
  Textarea,
  Link,
  HStack,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { BsGithub, BsLinkedin, BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_lig8lvw",
        "template_jy4qubn",
        form.current,
        "cwZS8dHQB7XZcmVDl"
      )
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
      );
    e.target.reset();
  };

  if (colorMode === "dark") {
    // normal
    var bc = "2px solid rgb(150, 150, 226)";
    var tc = "rgb(150, 150, 226)";
    var bgC = "#222e3d";
    var textC = "rgb(150, 150, 226)";

    // hover
    var bc1 = "2px solid #00B9E8";
    var tc1 = "#00B9E8";
    var bgC1 = "#222e3d";
  }
  if (colorMode === "light") {
    // normal
    bc = "2px solid white";

    bgC = "#00B9E8";
    textC = "#00B9E8";
    var bgc = "gray.200";

    // hover
    bc1 = "2px solid #00B9E8";
    tc1 = "#00B9E8";
    bgC1 = "white";
  }

  return (
    <Box
      className="contact"
      pt={["3rem", "4rem", "5rem", "6rem"]}
      height="100vh"
      bgColor={bgc}
    >
      <Heading mb="3rem" color={textC}>
        Contact Me!
      </Heading>
      <Box w="30%" m="auto">
        <form ref={form} onSubmit={sendEmail}>
          <VStack gap="1rem">
            <Input
              name="name"
              boxShadow="lg"
              w={["21rem", "22rem", "23rem", "25rem"]}
              placeholder="Full Name"
              borderRadius="5px"
              type="text"
              required
            />
            <Input
              name="email"
              boxShadow="lg"
              w={["21rem", "22rem", "23rem", "25rem"]}
              placeholder="Email"
              borderRadius="5px"
              type="email"
              required
            />
            <Textarea
              name="message"
              boxShadow="lg"
              w={["21rem", "22rem", "23rem", "25rem"]}
              placeholder="Type Message..."
              borderRadius="5px"
              required
            />
            <Button
              mt={4}
              bgColor={bgC}
              type="submit"
              color={tc}
              border={bc}
              _hover={{
                border: bc1,
                bgColor: bgC1,
                color: tc1,
              }}
              borderRadius={["50", "40", "30", "20"]}
            >
              Send
            </Button>
          </VStack>
        </form>
      </Box>
      <Box mt={["1rem", "2rem", "3rem"]}>
        <HStack
          justifyContent={["center", "space-around", "space-evenly"]}
          flexWrap="wrap"
        >
          <Button
            bgColor={bgC}
            color={tc}
            border={bc}
            _hover={{
              border: bc1,
              bgColor: bgC1,
              color: tc1,
            }}
            borderRadius={["50px", "40px", "30px", "20px"]}
            m={["0.5rem", "1rem"]}
          >
            <MdEmail fontSize="20px" />
            <Text ml="0.5rem">vermasanjaykumar97@gmail.com</Text>
          </Button>
          <Button
            bgColor={bgC}
            color={tc}
            border={bc}
            _hover={{
              border: bc1,
              bgColor: bgC1,
              color: tc1,
            }}
            borderRadius={["50px", "40px", "30px", "20px"]}
            m={["0.5rem", "1rem"]}
          >
            <BsTelephoneFill fontSize="20px" />
            <Text ml="0.5rem">8169863919</Text>
          </Button>
          <Box _hover={{ color: "teal" }} m={["0.5rem", "1rem"]}>
            <Link href="https://github.com/sanjaykumarverma01" target="_blank">
              <BsGithub fontSize="40px" />
            </Link>
          </Box>
          <Box m={["0.5rem", "1rem"]}>
            <Link
              href="https://www.linkedin.com/in/sanjaykumar-verma-a73349219/"
              target="_blank"
            >
              <BsLinkedin fontSize="40px" />
            </Link>
          </Box>
        </HStack>
      </Box>
    </Box>
  );
};

export default Contact;
