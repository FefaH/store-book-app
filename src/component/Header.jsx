import React, { useState } from 'react';
import { Button, Flex } from '@chakra-ui/react'
import BookForm from './BookForm';
import { BookList } from './BookList';

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
            <h1>Aplicación de Administración de Libros</h1>
            <hr />
            <Flex className="links" alignItems={'center'} justifyContent={'space-evenly'}>
                <Button colorScheme='teal' bgColor={'#6873C5'} onClick={() => setIsAddingBook(false)}>
                    Lista de Libros
                </Button>
                <Button colorScheme='teal' bgColor={'#6873C5'} onClick={() => setIsAddingBook(true)}>
                    Agrega Libro
                </Button>
            </Flex>
            {
                isAddingBook ? (
                    <BookForm onSubmit={handleBookSubmit}/>
                ) : (
                    <BookList bookData={bookData}/>
                )
            }
        </header>
    );
};

export default Header;
