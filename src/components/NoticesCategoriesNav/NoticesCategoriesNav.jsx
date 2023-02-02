import { Outlet } from 'react-router-dom'
import {Box, LinkBox, Link} from '@chakra-ui/react';
import { useSelector } from 'react-redux'
import { getIsLoggedIn } from 'redux/auth/auth-selectors';

const NoticesCategoriesNav = () => {
  const {isLoggedIn} = useSelector(getIsLoggedIn);
  return (
    <Box>
        <LinkBox mb={'30px'}>
            <Link to={"sell"}>sell</Link>
            <Link to={"lost-found"}>lost/found</Link>
            <Link to={"free"}>in good hand</Link>
            {isLoggedIn ? (
              <>
              <Link to={"favorite"}>favorite ads</Link>
              <Link to={"own"}>my ads</Link>
              </>
            ) : ("")}
        </LinkBox>
        <Outlet />
    </Box>
  )
}

export default NoticesCategoriesNav