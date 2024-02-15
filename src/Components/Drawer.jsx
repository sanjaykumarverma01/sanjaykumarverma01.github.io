import React from "react";
import {
  Drawer,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { ExternalLinkIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-scroll";

function DrawerExample() {
  const handleDownload = async () => {
    const driveLink =
      "https://drive.google.com/file/d/13glAAJDaMXdXr8iCqUOMSZT8BDzXIVxU/view?usp=sharing";
    window.open(driveLink, "_blank");
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <HamburgerIcon ref={btnRef} colorScheme="teal" onClick={onOpen} />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Link
              to="main"
              smooth={true}
              duration={1000}
              activeClass="active"
              spy={true}
              hashSpy={true}
              onClick={onClose}
            >
              Home
            </Link>
          </DrawerHeader>
          <DrawerHeader>
            <Link
              to="about"
              smooth={true}
              duration={1000}
              activeClass="active"
              spy={true}
              hashSpy={true}
              onClick={onClose}
            >
              About
            </Link>
          </DrawerHeader>
          <DrawerHeader>
            <Link
              to="skills"
              smooth={true}
              duration={1000}
              activeClass="active"
              spy={true}
              hashSpy={true}
              onClick={onClose}
            >
              Skills
            </Link>
          </DrawerHeader>
          <DrawerHeader>
            <Link
              to="projects"
              smooth={true}
              duration={1000}
              activeClass="active"
              spy={true}
              hashSpy={true}
              onClick={onClose}
            >
              Projects
            </Link>
          </DrawerHeader>
          <DrawerHeader>
            <Link
              to="contact"
              smooth={true}
              duration={1000}
              activeClass="active"
              spy={true}
              hashSpy={true}
              onClick={onClose}
            >
              Contact
            </Link>
          </DrawerHeader>
          <DrawerHeader>
            <a href="https://drive.google.com/uc?export=download&id=13glAAJDaMXdXr8iCqUOMSZT8BDzXIVxU">
              <Button onClick={handleDownload}>
                RESUME <ExternalLinkIcon ml="10px" />
              </Button>
            </a>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    </>
  );
}
export default DrawerExample;
