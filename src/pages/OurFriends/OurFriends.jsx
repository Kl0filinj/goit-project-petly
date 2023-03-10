import { useEffect, useState } from 'react';
import Container from '../../shared/components/Box/Container';
import Section from '../../shared/components/Box/Section';
import { Heading, Box } from '@chakra-ui/react';
import Loader from 'components/Loader/Loader';
import { getFriends } from './getFriends';
import { OurFriendsList } from '../../components/OurFriendsList/OurFriendsList';

const OurFriends = () => {
  const [friends, setFriends] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetch() {
      try {
        setIsLoading(true);
        const response = await getFriends();
        setFriends(response);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetch();
  }, []);

  return (
    <Box 
    h={{base:"calc(100vh - 74px)", md:"calc(100vh - 96px)", xl:"calc(100vh - 88px)"}} 
    bg='accent.background'>
    <Container>
      <Section>
        <Heading
          as={'h1'}
          fontSize={{ base: '2xl', md: '5xl' }}
          fontWeight={'bold'}
          lineHeight={'short'}
          textAlign={'center'}
          mb={{ base: '7', md: '10', xl: '60px' }}
        >
          Our friends
        </Heading>
        {isLoading ? <Loader /> : <OurFriendsList friends={friends} />}
      </Section>
    </Container>
    </Box>
  );
};

export default OurFriends;
