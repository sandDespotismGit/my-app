import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import Cabinet from '../pages/Cabinet';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  HStack,
  Text,
  VStack,
  useMediaQuery,
} from '@chakra-ui/react';
function callLogin(url) {
  return fetch(url).then(response => response.json());
}
const Autorisation = () => {
  const [IsLargerThan1000] = useMediaQuery('(min-width: 1001px)');
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      if (values.email != '' && values.password != '') {
        let result = false;
        callLogin(
          `http://localhost:5000/api/Users/get?Email=${values.email}&Password=${values.password}`
        ).then(data => {
          if (data instanceof Array) {
            navigate('/Cabinet');
          } else {
            alert('Неправильный логин или пароль');
          }
        });
      }
    },
  });
  return (
    <VStack
      w="full"
      minH={IsLargerThan1000 ? '1280px' : '1000px'}
      justify="center"
    >
      <Flex
        flexDirection="column"
        p="5"
        align="center"
        justify="center"
        width="80%"
        pos="absolute"
      >
        <Box
          bg="#030a00"
          m="5"
          p={8}
          border="2px"
          borderRadius="10px"
          borderColor="#3adb00"
        >
          <HStack
            margin="20px"
            padding="20px"
            textAlign="center"
            justify="center"
            border="none"
          >
            <Text fontSize="30px" fontWeight="600" textColor="#3adb00">
              Вход в аккаунт
            </Text>
          </HStack>
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4} align="flex-start">
              <FormControl>
                <FormLabel htmlFor="email" color="#3adb00">
                  Введите свою электронную почту(логин)
                </FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  borderColor="#3adb00"
                  border="2px"
                  bgColor="#030a00"
                  textColor="#3adb00"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="password" color="#3adb00">
                  Пароль
                </FormLabel>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  borderColor="#3adb00"
                  border="2px"
                  bgColor="#030a00"
                  textColor="#3adb00"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
              </FormControl>
              <Button
                type="submit"
                borderColor="#3adb00"
                border="2px"
                width="full"
                textColor="#3adb00"
                bgColor="#030a00"
                _hover={{ bgColor: '#3adb00', textColor: '#030a00' }}
              >
                Войти
              </Button>
            </VStack>
          </form>
        </Box>
      </Flex>
    </VStack>
  );
};
export { Autorisation };
