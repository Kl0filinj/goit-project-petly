import PropTypes from 'prop-types'
import { Formik, Form } from 'formik';
import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { nanoid } from 'nanoid';
import moment from 'moment/moment';
import { Text, Box, Spinner } from '@chakra-ui/react';
import { addNewPet } from "redux/auth/auth-operations"
import { getIsRefreshing } from "redux/auth/auth-selectors"
import {
  FormikControl,
  Button,
  errorToast, successToast
} from 'shared/components';
import { addPetInitialState, addPetSchema } from './index';

const ModalAddsPet = ({ onClose }) => {
  const dispatch = useDispatch()
  const isLoading = useSelector(getIsRefreshing)

  const nameId = useMemo(() => nanoid(), []);
  const birthdayId = useMemo(() => nanoid(), []);
  const breedId = useMemo(() => nanoid(), []);
  const photoId = useMemo(() => nanoid(), []);
  const commentsId = useMemo(() => nanoid(), []);

  const [firstStep, setFirstStep] = useState(true);

  function isDisabled(dirty, errors) {
    const { name, birthday, breed } = errors;
    return (
      !dirty ||
      name !== undefined ||
      birthday !== undefined ||
      breed !== undefined
    );
  }

  const handleSubmit = (
    { name, birthday, breed, photo, comments },
    { resetForm }
  ) => {
    const newPet = new FormData();
    newPet.append('name', name.trim());
    newPet.append(
      'birthday', moment(birthday, 'YYYYY-MM-DD').format('DD.MM.YYYY')
    );
    newPet.append('breed', breed.trim());
    newPet.append('photo', photo);
    newPet.append('comments', comments.trim());
      console.log()
    dispatch(addNewPet(newPet))
    .then(
        ({error}) => {
        if (error) {
            return errorToast(error.message)
        }
        resetForm()
        onClose()
        }
    ).catch(
        (e) => errorToast(e.message)
    )
  };

  return (
    <Formik
      initialValues={addPetInitialState}
      validationSchema={addPetSchema}
      onSubmit={handleSubmit}
      validateOnChange={true}
    >
      {({ errors, dirty }) => (
        <Form autoComplete="off" encType="multipart/form-data">
          {firstStep ? (
            <>
              <FormikControl
                type="text"
                name="name"
                label={
                  <>
                    Name pet<Text as={'span'} color={'accent.accentOrange'}>*</Text>
                  </>
                }
                placeholder={'Type name pet'}
                id={nameId}
                autoFocus
                width={'60'}
              />
              <FormikControl
                type="date"
                name="birthday"
                label={
                  <>
                    Date of birthday<Text as={'span'} color={'accent.accentOrange'}>*</Text>
                  </>
                }
                id={birthdayId}
                width={'60'}
              />
              <FormikControl
                type="text"
                name="breed"
                label={
                  <>
                    Breed<Text as={'span'} color={'accent.accentOrange'}>*</Text>
                  </>
                }
                placeholder="Type breed"
                id={breedId}
                width={'60'}
                mb={'10'}
              />
              <Box
                maxW={'none'}
                display={'flex'}
                flexDirection={{ base: 'column', md: 'row-reverse' }}
                justifyContent={{ base: 'center', md: 'center' }}
              >
                <Button
                  controle="secondary"
                  onClick={() => setFirstStep(false)}
                  mb={{ base: '3', md: '0' }}
                  width={{ md: '180px' }}
                  isDisabled={isDisabled(dirty, errors)}
                >
                  Next
                </Button>
                <Button
                  onClick={onClose}
                  mr={{ md: '5' }}
                  width={{ md: '180px' }}
                >
                  Cancel
                </Button>
              </Box>
            </>
          ) : (
            <Box
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
              maxW={'none'}
            >
              <Text
                display={'inline-flex'}
                fontSize={{ base: 'md', md: 'xl' }}
                fontWeight={'medium'}
                lineHeight={{ base: 'short', md: '1.2' }}
                letterSpacing={'-0.01em'}
                mb={'5'}
              >
                Add photo and some comments
                {<Text as={'span'} color={'accent.accentOrange'}>*</Text>}
              </Text>
              <FormikControl
                control="file"
                id={photoId}
                name={'photo'}
                size={{ base: '208px', md: '182px' }}
                borderRadius={{ base: '20px', md: '40px' }}
                plusSize={{ base: '30%', md: '40%' }}
              />
              <FormikControl
                control="textarea"
                name="comments"
                label={
                  <>
                    Comments<Text as={'span'} color={'accent.accentOrange'}>*</Text>
                  </>
                }
                placeholder="Type comments"
                id={commentsId}
              />
              <Box
                maxW={'none'}
                width={'full'}
                display={'flex'}
                flexDirection={{ base: 'column', md: 'row-reverse' }}
                justifyContent={{ base: 'center', md: 'center' }}
              >
                <Button
                  type="submit"
                  mb={{ base: '3', md: '0' }}
                  controle="secondary"
                  width={{ md: '180px' }}
                >
                {isLoading
                  ? <> Adding <Spinner emptyColor='#FF6101'
                                      color='#F5F5F5'
                                      textAlign='center'
                                      size='xs'/></>
                  : 'Done'}
                </Button>
                <Button
                  onClick={() => setFirstStep(true)}
                  mr={{ md: '5' }}
                  width={{ md: '180px' }}
                >
                  Back
                </Button>
              </Box>
            </Box>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default ModalAddsPet;

ModalAddsPet.propTypes = {
  onClose: PropTypes.func.isRequired
}