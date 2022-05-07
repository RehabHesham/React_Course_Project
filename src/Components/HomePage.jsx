import React, { useEffect, useState } from "react";
import Slider from "./Slider/Slider";
import { postApi } from "../APIs/postsAPI";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function HomePage() {
  let [posts, setposts] = useState([]);
  let getAllposts;
  try {
    getAllposts = async () => {
      let response = await postApi.getAllposts();
      setposts(response.data);
    };
  } catch (error) {
    console.log(error);
  }
  useEffect(() => {
    getAllposts();
  }, []);
  return (
    <>
      <Slider />
      <div className="bg-gradient-blue p-3 mt-5 mb-2 text-center">
        <h1 className="text-light">Here are the posts in our system</h1>
      </div>
      <div className="d-flex justify-content-center  flex-wrap">
        <img
          className="img-fluid col-md-6"
          src="https://img.freepik.com/free-vector/hand-drawn-illustration-people-with-smartphone-marketing_52683-66659.jpg?w=2000"
          alt="posts"
        />
        <Table
          striped
          bordered
          hover
          className="table-wrapper text-center w-auto col-md-6"
        >
          <thead>
            <tr>
              <th>#</th>
              <th>post Title</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {posts &&
              posts.map((post, index) => {
                return (
                  <tr key={index}>
                    <td>{index}</td>
                    <td>{post.title}</td>
                    <td>
                      <Link
                        className="text-decoration-none text-dark"
                        to={`/postDetails/${post.id}`}
                      >
                        <span
                          class="iconify"
                          data-icon="clarity:details-solid"
                          data-width="40"
                          data-height="40"
                        ></span>
                        <br />
                      </Link>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default HomePage;
