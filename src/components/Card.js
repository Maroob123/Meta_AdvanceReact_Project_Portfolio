import { Heading, Image, Text, VStack, HStack, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <HStack
      spacing={4}
      borderRadius="lg"
      bg="white"
      alignItems="flex-start"
    >
      <VStack align="start" spacing={2}>
      <Image src={imageSrc} alt={title} borderRadius="lg" width="100%" />
        <Heading as="h2" fontSize="xl" fontWeight="semibold" color="black" px={4}>
          {title}
        </Heading>
        <Text fontSize="md" color="black" px={4}>{description}</Text>
        <Link
          href="#see-more"
          display="flex"
          alignItems="center"
          color="black"
          textDecoration="none"
          px={4}
          pb={4}
        >
          See more <FontAwesomeIcon icon={faArrowRight} size="1x" style={{ marginLeft: "5px", marginTop: "3px" }} />
        </Link>
      </VStack>
    </HStack>
  );
};

export default Card;
