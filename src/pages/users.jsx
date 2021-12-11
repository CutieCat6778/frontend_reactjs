import { Box, Heading, Text } from '@chakra-ui/layout';
import { Code } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserById } from '../api/users';

export function Users() {
  const [user, setUser] = useState(null);

  const id = useParams().userid;

  useEffect(() => {
    async function searchUser(id) {
      const { data } = await getUserById(id);
      setUser(data);
    }
    searchUser(id);
  }, [id]);

  if (!user) return null;

  return (
    <Box>
      <Heading>Xin chào {user.data.details.username}</Heading>
      <Text>
        Level hiện tại của bạn là <Code>{user.data.level}</Code> và lượng kinh nghiệm hiện tại của bạn là <Code>{user.data.exp}</Code>. Tổng bạn đã nhắn <Code>{user.data.total}</Code>
      </Text>
    </Box>
  );
}
