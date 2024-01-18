import { Table, TableContainer, Tbody, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'

export const BookTable = () => {
  return (
    <TableContainer>
        <Table>
            <Thead>
                <Tr>
                    <Th>Autor</Th>
                    <Th>Descripcion</Th>
                    <Th>Precio</Th>
                    <Th>Cantidad de paginas</Th>
                    <Th>Acciones</Th>
                </Tr>
            </Thead>
            <Tbody>
                <Tr>
                    <Th></Th>
                    <Th></Th>
                    <Th></Th>
                    <Th></Th>
                    <Th></Th>
                </Tr>
            </Tbody>
        </Table>
    </TableContainer>
  )
}
