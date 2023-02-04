import { Box, Text } from '@chakra-ui/react';
import { IoLogOutOutline } from 'react-icons/io5';

const Logout = () => {
  return (
    <Box
      as='button'
      display="flex"
      alignItems="center"
      ml={{ base: 'auto', md: '0px', xl: 'auto' }}
      mr={{ base: '0px', md: 'auto', xl: '0px' }}
      bc="transparent"
      p="0px"
      h="22px"
      _hover={{color:'#F59256'}}
      _focus={{color:'#F59256'}}
    >
      <IoLogOutOutline color="#F59256" size="18px"/>
      <Text
      fontSize="16px"
      fontWeight="500px"
      lineHeight="1.35"
      ml='8px'>Logout</Text>
    </Box>
  );
};

export default Logout;