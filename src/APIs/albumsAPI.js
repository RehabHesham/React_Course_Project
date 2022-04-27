import axios from 'axios';

let baseURL = "https://jsonplaceholder.typicode.com";

let getAllAlbums = () => axios.get(`${baseURL}/albums`);

let getAlbumByID = (albumID) => axios.get(`${baseURL}/albums/${albumID}`);

let postAlbum = (album) => axios.post(`${baseURL}/albums`, album);

let editAlbum = (albumID, album) => axios.put(`${baseURL}/albums/${albumID}`, album);

let deleteAlbum = (albumID) => axios.delete(`${baseURL}/albums/${albumID}`);

export let albumApi = {
    getAlbumByID,
    getAllAlbums,
    postAlbum,
    editAlbum,
    deleteAlbum
}