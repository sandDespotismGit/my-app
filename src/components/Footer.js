import { Stack, Text, useMediaQuery } from '@chakra-ui/react';

const Footer = () => {
  const [IsLargerThan768] = useMediaQuery('(min-width: 769px)');
  return (
    <Stack
      justify="space-between"
      w="full"
      minH="60px"
      bgColor="#030a00"
      padding="10px"
      pos="absolute"
      border="2px"
      borderColor="#3adb00"
      borderRadius="10px"
      direction={IsLargerThan768 ? 'row' : 'column'}
    >
      <Text
        fontSize={['15px', '20px', '25px']}
        fontWeight="600"
        textColor="#3adb00"
      >
        © 2022 Замердженные. Все права защищены
      </Text>
      <Text
        fontSize={['15px', '20px', '25px']}
        fontWeight="600"
        textColor="#3adb00"
      >
        Software is like sex, It is better when it is free...
      </Text>
    </Stack>
  );
};
export { Footer };
