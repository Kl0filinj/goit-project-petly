import { nanoid } from 'nanoid';
import {
  Box,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Text,
} from '@chakra-ui/react';

export const WorkTime = ({ workDays }) => {
  const days = ['MN: ', 'TU: ', 'WE: ', 'TH: ', 'FR: ', 'SA: ', 'SU: '];
  const currentDate = new Date();
  const currentDay = currentDate.getDay();

  const indexUpdater = () => {
    if (currentDay === 0) {
      return 6;
    }
    return currentDay - 1;
  };
  return (
    <>
      <Popover>
        <PopoverTrigger>
          <Button
            alignItems={'start'}
            justifyContent={'start'}
            variant="link"
            color={'#111111'}
            fontWeight={'medium'}
            fontSize={{ base: 'xs', md: 'sm', xl: 'md' }}
            lineHeight={{ base: '1.33', md: '1.35', xl: 'short' }}
            type="click"
            aria-label="work time"
          >
            {workDays[indexUpdater()].from && workDays[indexUpdater()].to
              ? `${workDays[indexUpdater()]?.from} - ${
                  workDays[indexUpdater()]?.to
                }`
              : 'Closed'}
          </Button>
        </PopoverTrigger>
        <PopoverContent maxW={'120px'}>
          <PopoverBody
            display={'inline-block'}
            p={'12px'}
            border={'1px solid #f59256'}
            cursor={'pointer'}
            bgColor={'#FFFFFF'}
            boxShadow={'4px 4px 8px rgba(0, 0, 0, 0.25)'}
            borderRadius={'2'}
            fontWeight={'medium'}
            fontSize={'xs'}
            lineHeight={'1.34'}
          >
            {workDays.map(({ from, to, isOpen }, index) => (
              <Box key={nanoid()}>
                {isOpen ? (
                  <Box
                    display={'flex'}
                    justifyContent={'space-between'}
                    bgColor={
                      index + 1 === currentDay
                        ? 'accent.accentOrange'
                        : 'inherit'
                    }
                    borderRadius={'sm'}
                    px={'0.5'}
                  >
                    <Text>{days[index]}</Text>
                    <Text>
                      {from}-{to}
                    </Text>
                  </Box>
                ) : (
                  <Box
                    display={'flex'}
                    justifyContent={'space-between'}
                    bgColor={
                      index + 1 === currentDay
                        ? 'accent.accentOrange'
                        : 'inherit'
                    }
                    borderRadius={'sm'}
                    px={'0.5'}
                  >
                    <Text>{days[index]} </Text>
                    <Text>Closed</Text>
                  </Box>
                )}
              </Box>
            ))}
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
};
