import React, { useState } from 'react';
import { Box, Flex, Icon } from '@chakra-ui/react'
import { BookTable } from './BookTable';
import { AddIcon } from '@chakra-ui/icons';

const Header = () => {
    const [isAddingBook, setIsAddingBook] = useState(false)
    const [bookData, setBookData] = useState()

    const handleBookSubmit = (book) => {
        console.log('book desde header :>> ', book);
        setIsAddingBook(false)
        setBookData(book)
    }
    return (
        <header>
            <h1>Book-Store-App</h1>
            <hr />
            <Flex className="links" alignItems={'center'} justifyContent={'space-evenly'}>
            </Flex>
            { //pasar como prop el handle y no el state, cambiar nombre del set por setView,
                // Deberia ser un componente unico que muestre dependiendo lo que reciba por prop TagPreview
                //Estaria bueno tener una funcion SelectView(select){
                //              if(select === 'book-form' return (BookForm))
                //}
                <BookTable />
                // isAddingBook ? (
                //     <BookForm onSubmit={handleBookSubmit}/>
                // ) : (
                //     <BookList bookData={bookData}/>
                // )
            }
            <Box
                boxSize={10}
                bg={'#1163C0'}
                borderRadius={'full'}
                display="flex"
                alignItems="center"
                justifyContent="center"
                position={'fixed'}
                bottom={'20px'}
                right={'20px'}
            >
                <Icon as={AddIcon} boxSize={4} color="white" />
            </Box>
        </header>
    );
};

export default Header;
