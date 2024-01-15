import { Flex } from '@chakra-ui/react'
import React from 'react'

const AgregarLibro = () => {
    const handleAddBook = (book) => {
        console.log("book: ", book)
    }
  return (
    <Flex>
        <BookForm handleOnSubmit={handleAddBook}/>
    </Flex>
  )
}

export default AgregarLibro;