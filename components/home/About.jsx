import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

function About() {
  return (
    <Box mx="auto" p={4} mt={8} maxW="1200px">
      <Heading mb={2} fontSize="3xl">
        About IT Yukta
      </Heading>
      <Box w="80px" h="4px" rounded="full" bgColor="green.300" mb={4} />
      <Text fontSize="lg" mb={4}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus
        fugit maxime eum quisquam earum iste tenetur id temporibus ratione,
        dolores ad repellat illo nihil laboriosam recusandae molestias.
        Molestias id reprehenderit obcaecati ullam sapiente iure beatae quisquam
        numquam at aut animi eos ipsa recusandae delectus voluptates repellendus
        quam iusto distinctio, temporibus voluptate voluptatum natus est!
        Placeat optio ut est voluptate explicabo, aut voluptas, maxime deserunt
        quos, ipsa omnis repellat dignissimos magni quasi et ipsum!
        Exercitationem sapiente totam unde, corporis aut architecto accusamus
        fugiat atque possimus quis nisi necessitatibus, adipisci a nemo iure
        quia mollitia qui modi perferendis iste molestiae incidunt quibusdam!
      </Text>
    </Box>
  );
}

export default About;