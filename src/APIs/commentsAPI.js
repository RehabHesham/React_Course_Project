import axios from 'axios';

let baseURL = "https://jsonplaceholder.typicode.com";

let getAllcomments = () => axios.get(`${baseURL}/comments`);

let getcommentByID = (commentID) => axios.get(`${baseURL}/comments/${commentID}`);

let getCommentsByPostId = (postId) => axios.get(`${baseURL}/comments?postId=${postId}`);

let postcomment = (comment) => axios.post(`${baseURL}/comments`, comment);

let editcomment = (commentID, comment) => axios.put(`${baseURL}/comments/${commentID}`, comment);

let deletecomment = (commentID) => axios.delete(`${baseURL}/comments/${commentID}`);

export let commentApi = {
    getcommentByID,
    getAllcomments,
    getCommentsByPostId,
    postcomment,
    editcomment,
    deletecomment
}