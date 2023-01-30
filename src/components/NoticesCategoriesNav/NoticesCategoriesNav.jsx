import { Outlet } from 'react-router-dom'
import { LinkBox, Link, Box } from '@chakra-ui/react'

const NoticesCategoriesNav = () => {
  return (
    <Box>
        <LinkBox>
            <Link>sell</Link>
            <Link>lost/found</Link>
            <Link>in good hands</Link>
        </LinkBox>
        <Outlet />
    </ Box>
  )
}

export default NoticesCategoriesNav