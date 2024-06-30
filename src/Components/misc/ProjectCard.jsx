import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Img,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";
import {
  SiChakraui,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

const ProjectCard = ({
  imgUrl,
  title,
  projDesc,
  githubUrl,
  projLiveLink,
  iconArr,
  bc,
  bgc,
  tc1,
  bgC,
  tc,
  bgC1,
  bc1,
  textC,
}) => {
  return (
    <Box
      boxShadow="md"
      borderWidth="1px"
      borderRadius="10px"
      w={["100%", "100%", "45%"]}
      border={bc}
      bgColor={bgc}
      mb={["50px", "50px", "0"]}
    >
      <Img
        src={imgUrl}
        alt={title}
        borderTopRadius="10px"
        height="260"
        width="100%"
      />
      <Heading color={textC} fontWeight="400" pt="5px" fontSize="xl">
        {title}
      </Heading>
      <Box w="90%" m="auto" color={tc1}>
        <Text align={"justify"}>{projDesc}</Text>
      </Box>
      <Flex
        justifyContent="space-around"
        p="10px"
        direction={["column", "column", "row"]}
      >
        <Link
          href={githubUrl}
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <Button
            className="dev"
            bgColor={bgC}
            color={tc}
            border={bc}
            _hover={{
              color: tc1,
              bgColor: bgC1,
              border: bc1,
            }}
            zIndex={700}
            borderRadius={["50", "40", "30", "10"]}
          >
            GitHub
          </Button>
        </Link>
        <HStack
          margin={["auto", "auto", "0"]}
          p={["10px 0", "10px 0", "10px 0", "0"]}
        >
          {iconArr.includes("react") && (
            <SiReact fontSize="1.8rem" className="common react" />
          )}
          {iconArr.includes("html5") && (
            <SiHtml5 fontSize="1.8rem" className="common html5" />
          )}
          {iconArr.includes("css3") && (
            <SiCss3 fontSize="1.8rem" className="common css3" />
          )}
          {iconArr.includes("js") && (
            <SiJavascript fontSize="1.8rem" className="common js" />
          )}
          {iconArr.includes("chakra") && (
            <SiChakraui fontSize="1.8rem" className="common chakra" />
          )}
          {iconArr.includes("redux") && (
            <SiRedux fontSize="1.8rem" className="common redux" />
          )}
          {iconArr.includes("node") && (
            <SiNodedotjs fontSize="1.8rem" className="common node" />
          )}
          {iconArr.includes("express") && (
            <SiExpress fontSize="1.8rem" className="common express" />
          )}
          {iconArr.includes("mongodb") && (
            <SiMongodb fontSize="1.8rem" className="common mongodb" />
          )}
        </HStack>
        <Link
          href={projLiveLink}
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <Button
            className="dev"
            bgColor={bgC}
            color={tc}
            border={bc}
            _hover={{
              color: tc1,
              bgColor: bgC1,
              border: bc1,
            }}
            zIndex={700}
            borderRadius={["50", "40", "30", "10"]}
          >
            Preview <ExternalLinkIcon mx="2px" ml="7px" />
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default ProjectCard;
