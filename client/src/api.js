
import axios from 'axios';

export const getAllBooks = async () => {
   const resp = await axios.get('/api/books')
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
  console.log("title :", newTitle)
  console.log("author :", newAuthor)
  console.log("summary :", newSummary)
  console.log("genre :" ,newGenre)
  console.log("status :", newStatus)
  const resp = await axios.post('/api/books',{title: newTitle, status: newStatus , summary: newSummary, genre: newGenre, author: newAuthor});
  return resp.data;
};
