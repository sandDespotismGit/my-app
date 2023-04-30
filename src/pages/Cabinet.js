import React from 'react';
import {
  ChakraProvider,
  VStack,
  TableContainer,
  HStack,
  useDisclosure,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  DrawerFooter,
  Input,
  DrawerCloseButton,
  DrawerHeader,
  Select,
  Text,
  Checkbox,
} from '@chakra-ui/react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Developers } from '../components/TableView';
function Cabinet() {
  async function getData(url) {
    const data = await fetch(url)
      .then(promise => promise.json())
      .then(data => {
        return data;
      })
      .catch(e => {
        console.error(e);
      });
    return data;
  }
  const fetchData = async url => {
    const data = await getData(url);
    if (data.message) {
      alert('С такими критериями никого не найдено.');
    } else {
      setDevelopers(data);
    }
  };
  const [developers, setDevelopers] = React.useState([]);
  React.useEffect(() => {
    fetchData('http://localhost:5000/api/Worker/get?');
    // set data to state
  }, []);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [state, setState] = React.useState({
    proj_direction: 'Web',
    main_specialization: 'C#',
    role: 'Teamlead',
    work_experience_on_role: 0,
    employment: false,
  });
  const handleChangeCheckbox = event => {
    const target = event.target;
    const value = target.checked;
    const name = target.name;

    setState(state => ({
      ...state,
      [name]: value,
    }));
  };
  const handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setState(state => ({
      ...state,
      [name]: value,
    }));
  };
  const updateTable = state => {
    let url = `http://localhost:5000/api/Worker/get?`;
    if (state.work_experience_on_role !== 0) {
      url += `AllWorkExp=${
        +state.work_experience_on_role + 1
      }&OperatorAllWorkExp=<`;
    }
    console.log(url);
    fetchData(url);
  };
  const handleSubmit = event => {
    event.preventDefault();
    console.log(state);
    updateTable(state);
  };
  return (
    <ChakraProvider>
      <Header />

      <VStack justify="center" w="full" minH="1000px" align="center">
        <VStack
          w="50px"
          h="full"
          paddingX={10}
          paddingTop={5}
          marginLeft="20px"
        >
          <Button
            onClick={onOpen}
            pos="absolute"
            top="150px"
            border="2px"
            borderColor="#3adb00"
            backgroundColor="black"
            color="#3adb00"
          >
            Фильтр
          </Button>
          <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader
                borderRight="2px"
                borderColor="#3adb00"
                backgroundColor="black"
                color="#3ADB00"
              >
                Выберите необходимые настройки
              </DrawerHeader>
              <DrawerBody
                borderRight="2px"
                borderColor="#3adb00"
                backgroundColor="black"
                color="#3ADB00"
              >
                <form id="my-form" onSubmit={handleSubmit}>
                  <Text>Направленность проекта</Text>
                  <Select
                    value={state.proj_direction}
                    name="proj_direction"
                    onChange={handleChange}
                  >
                    <option value="C#">C#</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </Select>
                  <Text>Основная специализация</Text>
                  <Select
                    value={state.main_specialization}
                    name="main_specialization"
                    onChange={handleChange}
                  >
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </Select>
                  <Text>Роль</Text>
                  <Select
                    value={state.role}
                    name="role"
                    onChange={handleChange}
                  >
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </Select>
                  <Text>Опыт работы (в годах)</Text>
                  <Input
                    value={state.work_experience_on_role}
                    name="work_experience_on_role"
                    onChange={handleChange}
                    type="number"
                  />
                  <Checkbox
                    defaultChecked
                    name="employment"
                    onChange={handleChangeCheckbox}
                  >
                    Учитывать занятых сотрудников?
                  </Checkbox>
                </form>
              </DrawerBody>

              <DrawerFooter
                borderRight="2px"
                borderColor="#3adb00"
                backgroundColor="black"
                color="#3ADB00"
              >
                <Button
                  onClick={onClose}
                  border="2px"
                  borderColor="#3adb00"
                  backgroundColor="black"
                  type="submit"
                  form="my-form"
                  _hover={{ bgColor: '#3adb00', textColor: '#030a00' }}
                >
                  Save
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </VStack>
        <HStack pos="absolute" top="200px">
          <TableContainer bg="#030a00">
            <Developers developers={developers} />
          </TableContainer>
        </HStack>
      </VStack>
      <Footer />
    </ChakraProvider>
  );
}

export default Cabinet;
