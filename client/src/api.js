
import axios from 'axios';

export const getAllBooks = async () => {
   const resp = await axios.get('/api/books')
   return resp.data;

};

export const getAllBookTitles = async () => {
   const resp = await axios.get('/api/titles')
   return resp.data;

};

export const getAllStatusTypes = async () => {
   const resp = await axios.get('/api/statustypes')
   return resp.data;

};

export const getAllGenreTypes = async () => {
   const resp = await axios.get('/api/genretypes')
   return resp.data;

};

export const deleteBook = async (bookId) => {
   const resp = await axios.delete(`/api/books/${bookId}`)
   return resp.data;

};

export const addBook = async (newAuthor,newTitle,newSummary,newGenre, newStatus) => {
  const resp = await axios.post('/api/books',{title: newTitle, status: newStatus , summary: newSummary, genre: newGenre, author: newAuthor});
  return resp.data;
};

export const editBook = async (bookId, newAuthor,newTitle,newSummary,newGenre, newStatus) => {
  const resp = await axios.put(`/api/books/${bookId}`,{ title: newTitle, author: newAuthor, genre: newGenre, summary: newSummary,status: newStatus });
  return resp.data;
};
