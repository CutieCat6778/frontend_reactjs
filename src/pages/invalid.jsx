import { Flex, Heading } from "@chakra-ui/layout";
import { Tag } from "@chakra-ui/tag";

export function Invalid(){
  return(
    <Flex>
      <Tag colorScheme="red">404</Tag>
      <Heading>Not Found!</Heading>
    </Flex>
  )
}