import { Flex, Input } from '@chakra-ui/react';
import React, { useState } from 'react'

const BookForm = ({onSubmit}) => {
    const [book, setBook] = useState({
        bookName: '',
        bookAuthor: '',
        bookAmount: '',
        bookPrice: '',
        bookDate: '',
    })
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setBook((prevBook) => ({
            ...prevBook,
            [name] : value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Datos del libro:', book);
        onSubmit(book)
      };

      console.log('book :>> ', book);
  return (
    <Flex justifyContent={'center'}>
        <form onSubmit={handleSubmit}>
            <label>
                Nombre del libro:
                <Input 
                type='text'
                name='bookName'
                value={book.bookName}
                onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Autor del libro:
                <Input
                type='text'
                name='bookAuthor'
                value={book.bookAuthor}
                onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Cantidad de libros:
                <Input
                type='number'
                name='bookAmount'
                value={book.bookAmount}
                onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Precio del libro:
                <Input
                type='number'
                name='bookPrice'
                value={book.bookPrice}
                onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Fecha de publicacion:
                <Input
                type='date'
                name='bookDate'
                value={book.bookDate}
                onChange={handleChange}
                />
            </label>
            <br />
            <button type="submit">Guardar Libro</button>
        </form>
    </Flex>
  )
}

export default BookForm;