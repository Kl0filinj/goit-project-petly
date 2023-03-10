import { Box } from '@chakra-ui/react';
import { authBackgroundMobile, authBackgroundLaptop, authBackgroundTablet } from 'media';
import ResetPasswordForm from 'components/ResetPasswordForm/ResetPasswordForm';


const ResetPassword = () => {
    
  return (
    <Box as='main' bgImage={{base:authBackgroundMobile, md:authBackgroundTablet, xl:authBackgroundLaptop }} bgPosition='bottom' bgSize='contain' bgRepeat='no-repeat' bgColor='accent.background' h={{base:"calc(100vh - 74px)", md:"calc(100vh - 96px)", xl:"calc(100vh - 88px)"}} pt={{ md:'180px', xl:'60px'}}>
      <ResetPasswordForm />
    </Box>
  );
};

export default ResetPassword;