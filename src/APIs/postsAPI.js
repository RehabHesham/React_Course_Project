import axios from 'axios';

let baseURL = "https://jsonplaceholder.typicode.com";

let getAllposts = () => axios.get(`${baseURL}/posts`);

let getpostByID = (postID) => axios.get(`${baseURL}/posts/${postID}`);

let postpost = (post) => axios.post(`${baseURL}/posts`, post);

let editpost = (postID, post) => axios.put(`${baseURL}/posts/${postID}`, post);

let deletepost = (postID) => axios.delete(`${baseURL}/posts/${postID}`);

export let postApi = {
    getpostByID,
    getAllposts,
    postpost,
    editpost,
    deletepost
}