import {
  Box,
  Flex,
  Heading,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import ProjectCard from "./misc/ProjectCard";

const Projects = () => {
  const { colorMode, toggleColorMode } = useColorMode();
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
    tc = "white";
    bgC = "#00B9E8";
    textC = "#00B9E8";
    var bgc = "white";

    // hover
    bc1 = "2px solid #00B9E8";
    tc1 = "#00B9E8";
    bgC1 = "white";
  }
  return (
    <Box className="projects" pt={["2rem", "3rem", "5rem", "6rem"]}>
      <Heading mb={["2rem", "3rem", "4rem", "5rem"]} color={textC}>
        Projects
      </Heading>
      <Flex
        m="auto"
        textAlign="center"
        w={["90%", "90%", "80%"]}
        justifyContent="space-around"
        mb={["0", "0", "0", "50px"]}
        direction={["column", "column", "row"]}
      >
        <ProjectCard
          imgUrl="https://user-images.githubusercontent.com/101388961/187072296-15c5b11d-88d4-4c25-bc83-0b9aab7287a2.png"
          title="Hubspot Clone"
          projDesc="HubSpot is an American developer and marketer of software products for inbound marketing, sales, and customer service. Hubspot was founded by Brian Halligan and Dharmesh Shah in 2006."
          githubUrl="https://github.com/sanjaykumarverma01/hubspot"
          projLiveLink="https://clone-hubspot.netlify.app"
          iconArr={["react", "redux", "css3", "chakra"]}
          bc={bc}
          bgc={bgc}
          tc1={tc1}
          bgC={bgC}
          tc={tc}
          bgC1={bgC1}
          bc1={bc1}
          textC={textC}
        />
        <ProjectCard
          imgUrl="https://github.com/sanjaykumarverma01/portfolio/blob/main/src/project%20img/BathandBody.png?raw=true"
          title="Bath & Body Works Clone"
          projDesc="Bath and Body Works is your go-to place for gifts & goodies that surprise & delight. From fresh fragrances to soothing skin care, we make finding your perfect"
          githubUrl="https://github.com/sanjaykumarverma01/Bath-Body-Works"
          projLiveLink="https://bathandbodywork.netlify.app/"
          iconArr={["html5", "css3", "js"]}
          bc={bc}
          bgc={bgc}
          tc1={tc1}
          bgC={bgC}
          tc={tc}
          bgC1={bgC1}
          bc1={bc1}
          textC={textC}
        />
      </Flex>
      <Flex
        m="auto"
        textAlign="center"
        w={["90%", "90%", "80%"]}
        justifyContent="space-around"
        gap={10}
      >
        <ProjectCard
          imgUrl="https://github.com/sanjaykumarverma01/portfolio/blob/main/src/project%20img/Nordstrom%20rack.png?raw=true"
          title="Nordstrom Rack Clone"
          projDesc="Nordstrom Rack is an American off-price department store chain
              founded in 1973, and a sister brand to the luxury department store
              chain Nordstrom. It competes with off-price department stores
              including Burlington, Macy's Backstage, Ross Dress for Less, Saks
              Off 5th, and the TJX Companies."
          githubUrl="https://github.com/sanjaykumarverma01/Nordstrom-Rack"
          projLiveLink="https://nordstrom-rack-shopping.netlify.app/"
          iconArr={["html5", "css3", "js"]}
          bc={bc}
          bgc={bgc}
          tc1={tc1}
          bgC={bgC}
          tc={tc}
          bgC1={bgC1}
          bc1={bc1}
          textC={textC}
        />
        <ProjectCard
          imgUrl="https://github.com/sanjaykumarverma01/Chat_App/raw/main/screenshots/one%20on%20one.png"
          title="Chat Application"
          projDesc="My-Chat-App is a Full Stack Chatting App. Uses Socket.io for real-time communication and stores user details in encrypted format in Mongo DB Database."
          githubUrl="https://github.com/sanjaykumarverma01/Chat_App"
          projLiveLink="chat-app-syzw.onrender.com"
          iconArr={["react", "node", "express","mongodb","chakra"]}
          bc={bc}
          bgc={bgc}
          tc1={tc1}
          bgC={bgC}
          tc={tc}
          bgC1={bgC1}
          bc1={bc1}
          textC={textC}
        />
      </Flex>
    </Box>
  );
};

export default Projects;
