import { Input, InputRightElement, InputGroup, Button } from '@chakra-ui/react'
import { SearchIcon, SmallCloseIcon } from '@chakra-ui/icons'

const FilterInput = ({handleClick, active, ...rest}) => {
  return (
    <InputGroup
        w={'full'}>
            <Input
                placeholder={'Search'}
                px={'20px'}
                py={'10px'}
                h={'40px'}
                border={'1px solid'}
                borderColor={'white'}
                borderRadius={'20px'}
                boxShadow={'7px 4px 14px rgba(49, 21, 4, 0.07)'}
                color={'#535353'}
                fontSize={'20px'}
                fontWeight={'medium'}
                lineHeight={'1.2'}
                letterSpacing={'0.04em'}
                _placeholder={{ color: '#535353',
                                opasity: '0' }}
                _hover={{borderColor: 'rgba(245, 146, 86, 0.5)'}}
                _focus={{borderColor: 'rgba(245, 146, 86, 0.5)',
                        boxShadow: '7px 4px 14px rgba(49, 21, 4, 0.07)'}}
                {...rest}/>
            <InputRightElement>
                <Button
                    p={'0'}
                    borderRadius={'50%'}
                    minWidth={'0'}
                    backgroundColor={'white'}
                    width={'24px'}
                    height={'24px'}
                    onClick={handleClick}>
                        {!active
                            ? <SearchIcon
                                width={'18px'}
                                height={'18px'}/> 
                            : <SmallCloseIcon
                                border={'2px solid'}
                                borderRadius={'50%'}
                                width={'18px'}
                                height={'18px'}/>}
                </Button>
            </InputRightElement>
    </InputGroup>
  )
}

export default FilterInput