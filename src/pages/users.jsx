import { Box, Heading, Text } from '@chakra-ui/layout';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export function Users() {
  const [user, setUser] = useState(null);

  const id = useParams().userid;

  useEffect(() => {
    async function searchUser(id) {
      const { data } = await axios.get('http://localhost/user/id/' + id);
      setUser(data);
    }
    searchUser(id);
  }, [id]);

  if (!user) return null;

  return (
    <Box>
      <Heading>Xin chào {user.data.details.username}</Heading>
      <Text>
        Level hiện tại của bạn là {user.data.level} và lượng kinh nghiệm hiện tại của bạn là {user.data.exp}. Tổng bạn đã nhắn {user.data.total}
      </Text>
    </Box>
  );
}
