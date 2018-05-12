
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
