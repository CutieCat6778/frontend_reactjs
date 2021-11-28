import { Box, Heading, Text } from '@chakra-ui/layout';
import { Code } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export function Users() {
  // const [user, setUser] = useState(null);

  // const id = useParams().userid;

  // useEffect(() => {
  //   async function searchUser(id) {
  //     const { data } = await axios.get('http://localhost/user/id/' + id);
  //     setUser(data);
  //   }
  //   searchUser(id);
  // }, [id]);

  // if (!user) return null;

  return (
    <Box>
      <Heading color="red.400">Xin chào</Heading>
      <Text>
        Test
      </Text>
    </Box>
  );
}
