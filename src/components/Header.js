import { HStack, Text, Image } from '@chakra-ui/react';
const Header = () => {
  return (
    <HStack
      justify="center"
      as="header"
      w="full"
      h="60px"
      bgColor="#030a00"
      border="2px"
      borderColor="#3adb00"
      borderRadius="10px"
      padding="10px"
      pos="absolute"
    >
      <HStack justify="space-between" spacingx="30px" padding="10px">
        <Text fontSize="25px" fontWeight="600" textColor="#3adb00">
          ТРРК
        </Text>
      </HStack>
    </HStack>
  );
};

export { Header };
