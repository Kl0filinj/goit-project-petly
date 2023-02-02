import {useState, useEffect} from 'react';
import NoticesSearch from 'components/NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesCategoriesList from "components/NoticesCategoriesList/NoticesCategoriesList";
// import NoticesCategoryItem from "components/NoticesCategoryItem/NoticesCategoryItem";
import AddNoticeButton from "components/AddNoticeButton/AddNoticeButton";
import { Container, Section } from 'shared/components';
import { Heading, Spinner } from '@chakra-ui/react'
import { getNotices } from './getNotices';

const Notices = () => {
  const [notices, setNotices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetch() {
      try {
        const response = await getNotices({});
        sortByDate(response)
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
  }, []);

  const searchNotices = async query => {
    const searchQuery = query.toLowerCase();
    const response = await getNotices({});
    const foundNews = response.filter(
      notices =>
        notices.title.toLowerCase().includes(searchQuery) ||
        notices.description.toLowerCase().includes(searchQuery)
    );
    sortByDate(foundNews);
  };

  const sortByDate = array => {
    const addDateForSort = array.map(notices => {
      return { ...notices, dateForSort: Date.parse(new Date(notices.date)) };
    });
    const sortedByDateNotices = addDateForSort.sort(
      (a, b) => b.dateForSort - a.dateForSort
    );

    setNotices(sortedByDateNotices);
    setIsLoading(false);
  };



  return (
    <Container>
      <Section>
        <Heading
          as={'h1'}
          fontSize={'2xl'}
          fontWeight={'bold'}
          lineHeight={'short'}
          textAlign={'center'}
          mb={7}>
          Find your favorite pet
        </Heading>
        <NoticesCategoriesNav />
        {isLoading ? (
          <Spinner
          thickness='4px'
          speed='0.85s'
          emptyColor='#F59256;'
          color='#F5F5F5'
          size='xl' />
        ) : (
          <>
<NoticesSearch searchFunction={searchNotices}/>

<NoticesCategoriesList notices={notices}/>
</>
        )}
        <AddNoticeButton /> 
      </Section>
    </Container>
  );
};

export default Notices;
