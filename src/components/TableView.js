import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Checkbox,
} from '@chakra-ui/react';
function Developers({developers}) {
  return (
        <Table variant="unstyle"
        color="#3adb00"
        bgColor="#030a00"
        style={{ borderCollapse: 'separate', borderSpacing: '5px 5px' }}>
          <Thead>
            <Tr>
              <Th> </Th>
              <Th>Имя</Th>
              <Th>Опыт работы</Th>
              <Th>Занятость</Th>
              <Th>Почта</Th>
            </Tr>
          </Thead>
          <Tbody>
            { 
              developers.map(developer => {
              return(
              <Tr key={developer.ID}>
              <Td><Checkbox/></Td>
              <Td>{developer.Name}</Td>
              <Td>{developer.AllWorkExp}</Td>
              <Td>{developer.ProjectID ? "занят": "не занят"}</Td>
              <Td>{developer.Email}</Td>
              </Tr>)
            })}
          </Tbody>
        </Table>
  )
}
export{Developers}
