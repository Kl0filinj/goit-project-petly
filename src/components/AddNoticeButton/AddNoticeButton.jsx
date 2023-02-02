import { Button, ButtonGroup, IconButton } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons'
import React from 'react';
import { toast } from 'react-toastify';


const AddNoticeButton = () => {
  const handleClick = () => {
    toast("Please log in")
  }
  return (
    <>
    <ButtonGroup size='sm' >
      <Button type="button" onClick={handleClick}>
        Add pet
      </Button>
  <IconButton aria-label='Add to friends' borderRadius={'40px'} backgroundColor={'#F59256'} width={'44px'} height={'44px'}
   icon={<AddIcon  width={'16px'} height={'16px'} fill={'accent.100'} />} />
</ButtonGroup>
    
    </>
  );
};

export default AddNoticeButton;
