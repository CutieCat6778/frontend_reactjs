import { Box } from '@chakra-ui/layout';
import { MainHeader } from '../component/main/_header_index';
import { MainSection } from '../component/main/_section_index';

export function Main() {
  return (
    <Box backgroundColor={"black.700"} textColor={"white"}>
      <MainHeader/>
      <MainSection />
    </Box>
  );
}
