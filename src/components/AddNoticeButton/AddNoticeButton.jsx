import { Button, Icon, Container } from '@chakra-ui/react';
import { Notify} from 'notiflix/build/notiflix-notify-aio'
import React from 'react';

const AddNoticeButton = () => {
  const handleClick = () => {
    Notify.failrule("please log in")
  }
  return (
    <Button type="button" onClick={handleClick}>
      <Icon>
        <Container>Add pet</Container>
      </Icon>
      AddNoticeButton
    </Button>
  );
};

export default AddNoticeButton;
