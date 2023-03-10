import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import petTemlate from '../../media/no_img.png';
import moment from 'moment';
import { getIsLoggedIn, getUser } from '../../redux/auth/auth-selectors';
import {
  addToFavorites,
  removeFromFavorites,
  deleteMyNotice,
} from '../../redux/notices/notices-operations';
// import CustomButton from '';
import {
  Text,
  Box,
  Image,
  Card,
  CardBody,
  Heading,
  CardFooter,
  useDisclosure,
} from '@chakra-ui/react';
import {
  CardButton,
  errorToast,
  FavoriteButton,
  CustomButton,
} from 'shared/components';
import ModalNotice from '../ModalNotice/ModalNotice';
import { addFavToUser, removeFavFromUser } from 'redux/auth/auth-slice';
import CustomModal from 'shared/components/Modal/Modal';

moment().format();

const NoticesCategoryItem = ({
  id,
  photo,
  owner,
  title,
  breed,
  location,
  birthdate,
  price,
  categoryName,
}) => {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isDeleteAlertOpen,
    onOpen: onDeleteAlertOpen,
    onClose: onDeleteAlertClose,
  } = useDisclosure();
  const isLoggedIn = useSelector(getIsLoggedIn);
  const { _id, favorites } = useSelector(getUser);

  const [isFavorite, setIsFavorite] = useState(() =>
    Boolean(favorites?.includes(id))
  );
  const isOwner = owner === _id;

  const calculatePetsAge = birthdate => {
    const petsAge = moment(birthdate, 'DD.MM.YYYY').fromNow(true);
    return petsAge;
  };

  const toggleFavorite = () => {
    if (!isLoggedIn) {
      errorToast('You must sign in for add to favorites!');
      return;
    }
    if (!isFavorite) {
      dispatch(addToFavorites(id));
      dispatch(addFavToUser(id));
      setIsFavorite(true);
      return;
    }
    if (isFavorite) {
      dispatch(removeFromFavorites(id));
      dispatch(removeFavFromUser(id));
      setIsFavorite(false);
      return;
    }
  };

  const handlerDeleteNotice = () => {
    dispatch(deleteMyNotice(id));
  };

  return (
    <Card
      as={'li'}
      width={'100%'}
      boxShadow={'7px 4px 14px rgba(49, 21, 4, 0.07)'}
      borderBottomRadius={'20px'}
    >
      <CardBody p={'0'} mb={'30px'}>
        <Box position={'relative'}>
          <Image
            src={photo ?? petTemlate}
            alt={breed}
            objectFit={'cover'}
            width={{ base: '280px', md: '336px', xl: '288px' }}
            height={'288px'}
            loading={'lazy'}
          />
          <Box
            as={'span'}
            position={'absolute'}
            top={'20px'}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            w={'158px'}
            h={'28px'}
            px={'20px'}
            py={'6px'}
            borderRightRadius={'20px'}
            color={'#111111'}
            fontSize={'xs'}
            fontWeight={'medium'}
            lineHeight={'xl'}
            letterSpacing={'0.04em'}
            backgroundColor={'rgba(255, 255, 255, 0.6)'}
            backdropFilter={'blur(2px)'}
          >
            {categoryName === 'for-free'
              ? 'in good hands'
              : categoryName.split('-').join('/')}
          </Box>
          <FavoriteButton toggleFav={toggleFavorite} isFavorite={isFavorite} />
        </Box>
        <Box p={'20px'}>
          <Heading
            mb={'20px'}
            color={'#111111'}
            fontSize={'28px'}
            fontWeight={'bold'}
            lineHeight={'short'}
            letterSpacing={'-0.01em'}
          >
            {title}
          </Heading>
          <Text
            mb={'8px'}
            fontSize={'16px'}
            fontWeight={'medium'}
            lineHeight={'short'}
            color={'#111111'}
          >
            Breed: {breed}
          </Text>
          <Text
            mb={'8px'}
            fontSize={'16px'}
            fontWeight={'medium'}
            lineHeight={'short'}
            color={'#111111'}
          >
            Location: {location}
          </Text>
          <Text
            mb={price && '8px'}
            fontSize={'16px'}
            fontWeight={'medium'}
            lineHeight={'short'}
            color={'#111111'}
          >
            Age: {birthdate === 'null' ? '-' : calculatePetsAge(birthdate)}
          </Text>
          {price && (
            <Text
              mb={price && '8px'}
              fontSize={'16px'}
              fontWeight={'medium'}
              lineHeight={'short'}
              color={'#111111'}
            >
              Price: {price} $
            </Text>
          )}
        </Box>
      </CardBody>
      <CardFooter
        pt={'0'}
        px={'16px'}
        pb={'32px'}
        width={'100%'}
        display={'flex'}
        alignItems={'center'}
        flexDirection={'column'}
      >
        <CardButton onClick={onOpen}>Learn more</CardButton>

        {isOwner && (
          <>
            <CardButton
              mt={'12px'}
              position={'relative'}
              controle="delete"
              onClick={onDeleteAlertOpen}
            >
              Delete
            </CardButton>
            <CustomModal
              isOpen={isDeleteAlertOpen}
              onClose={onDeleteAlertClose}
              title="Are you sure you want to delete this notice?"
            >
              <Box textAlign={'center'}>
                <CustomButton onClick={handlerDeleteNotice}>
                  Delete
                </CustomButton>
              </Box>
            </CustomModal>
          </>
        )}
        <ModalNotice
          isOpen={isOpen}
          onClose={onClose}
          id={id}
          toggleFavorite={toggleFavorite}
          favorite={isFavorite}
        />
      </CardFooter>
    </Card>
  );
};

export default NoticesCategoryItem;
