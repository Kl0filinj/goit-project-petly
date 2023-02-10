import { Box, Heading, Image } from '@chakra-ui/react';

const NoticesEmpty = () => {
  return (
    <Box textAlign={'center'} m="auto" p="5" color="gray.300">
      <Image width="100%" src="https://placekitten.com/g/300/300" />
      <Heading size="md" fontWeight="bold">
        Oops, it seems like we haven't found anything for you ... Try another
        search, please
      </Heading>
    </Box>
  );
};

export default NoticesEmpty;
