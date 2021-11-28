import { Box, Code, Flex, Heading, Text } from '@chakra-ui/layout';
import { FormBox } from '../component/main/formBox';

export function Main() {
  return (
    <Flex flexDir={{base: "column", lg: "row"}} justifyContent="space-around" m={10}>
      <Box>
        <Heading>Hãy cho tôi cái ID của bạn</Heading>
        <Text>hãy dùng lệnh <Code>.getid</Code> ở trong chat chung để có thể biết ID của bạn là gì!</Text>
      </Box>
      <FormBox/>
    </Flex>
  );
}
