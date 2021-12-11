import { Flex } from '@chakra-ui/layout';
import { ChartActionWeeks } from './_section_chartjs_action_days';
import { ChartActionToday } from './_section_chartjs_action_today';


export function MainSection() {
  return (
    <Flex >
      <ChartActionToday/>
      <ChartActionWeeks/>
    </Flex>
  );
}
