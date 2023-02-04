import { Box } from '@chakra-ui/react'

function Container({children, ...rest}) {
    return (
        <Box
            p={{base:'0 20px', md:'0 32px', xl:'0 16px'}}
            m={'0 auto'}
            backgroundColor={'#FDF7F2'}
            {...rest}
        >
            {children}
        </Box>
    )
}

export default Container