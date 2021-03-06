import React, { useEffect, useState } from "react";
import { Card, Container, ListGroup, ListGroupItem } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { commentApi } from "../APIs/commentsAPI";
import { postApi } from "../APIs/postsAPI";

function PostDetails() {
  let { postID } = useParams();
  let [post, setPost] = useState({});
  let [comments, setComments] = useState([]);

  let getPostDetails;
  let getPostComments;
  try {
    getPostDetails = async () => {
      let result = await postApi.getpostByID(postID);
      setPost(result.data);
    };
    getPostComments = async () => {
      let result = await commentApi.getCommentsByPostId(postID);
      setComments(result.data);
    };
  } catch (err) {
    console.log(err);
  }

  useEffect(() => {
    console.log(postID);
    getPostDetails();
    getPostComments();
  }, []);
  return (
    <>
      <Container className="mt-5 mb-3">
        <Card>
          <Card.Header>
            <div className="row align-items-center mb-2">
              <img
                className="col-2 rounded-circle"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAk1BMVEX///9PXXNGUGJLWXA9TmdCUmpGVW07TGZMW3E8TWdBUWpIV2/8/P3a3OBIU2bQ09gvPFJiboG+wslqdYdAS16EjJrn6Ouwtb709fagprBUYnc5RVmWnal3gJDx8vRcaX2MlKF5g5KorreaoaxtdIErOVDV19xSW2vHytC8wciFjpx2fYmWm6NianiDiZOts7taYnGsLmr2AAANzklEQVR4nNVdaXeqPBAWSABZFDdc0Ip622pvl/v/f90bwAUUAsxMsO/zref0IA8zmS2TSa+nHItwOJ4v49lmMlqtNE1brUaTzSxe/oyH4UL9zytFeNzPRqbFODddwzBs7QJb/OWaJmfMGX3sj+GzXxSCcLyeOH1u5miVwzZM8X+j9fj/RDOcz0zGXaOGW4Gny5kzm/8fWHrHWOubbcjdYJhMi4/esynIsBjvmOPW6aUUQpab8S+1P95xZ3GY8O5Eya3N+PdJ0o85Cb0LSR77z6aUh3faMpeMXgaXbee/RZDhgXHU2quAbfbXv8G4+jOLWnw3uNbu2crqbxjd6iuDwSbP5OhPLLX8nswx3HXAL4Ft7Z6xHr24I34JDCvu3K7Oyd2DHG5/3ik/f8s75ZeAb7tbjkJBVfi/OtidqerQ7FZBb3DNYwf8vBl7Er8EbKZcjG/GswSYwXXf1BI8PGUF5mFbB4X8Xkbdm9BH8NGLKoJDwgwQA4MP1RBcWs+mdoW1VEFw9xs09AK+I+e32JLY0KQUbNTWUBvA3RKXq0JggfAGw+R9x9hONrvNZOUybE1OszlpvjFkqNexTWbu9sPw5q0X4XG5ESwxD2WE9uaEsjEu2+5Lg2bv7WBjUhRrTEVwjiBoO+ZBpk5+zEw4RaKMag8PRG2+OtU93vsxwFaa7SkILuEEudZMj+YOVI6MwDHCCRrsp+mPeAdoSQRPEa6ibNMmfAyhIS9WUedQgna/raHbA9MWhjI3Y6gVNQHxv2/DNNWqNWbVGEIJOjPIz3kTmMGxwK4/hKqoBV0bMwf0e31gALeA7igh1GYN+qg2h4XhW6ABtzAFMZhzMraQ39oBI0YUQUERpKguIF9cAv0TxrKliEEUeWvPDzWjDj6MgilPW4P6ApSg+YEmCDUAvJ0HHsGsjA1a8feAfV5j1OY3DtAgkaaSeQQZVN6iVPwGXISMauMkBgU3VuOCvwcshrkUizCDBnkD22i6bTMDekKXbl8IpkVuw3AYtgoIdTTBB+grN3sFD1hRsCeEBHsLWAxuNlGjGBqt0XaE7EEf2o3rn+wD7SihmckAzBXr2xm2wJSpT72pNwf55PqYA/bcZurRErDVwmvKNl4fRpB6FSaArUSNyY0N1MwY9Pt5vQXsa8u1KYSWnpiKDokYWHuTqdMOWLiwVwoI9nxY6CHTJ6in0EySHZIHgKJTqceYQPdByV1FBqCtMSqjK6BWyB6JA7RgWynEDXSv3lTV+7mCKZWxKX8cWITgmnMt1kDnxcqFOIOK0NYUEewdYRmGZpQmimBfqLlrVQwX4J2TMq2CaoSmOer6WqF5QNlH9+Db9UQVtjKAP3v/MTqFJhUChjKCvRP0rUpSDKg+qIm6L/CBpqYkT4S7Cs1V0gqZYQE2fw8OA5o2CXCy5qsSgNfOfRLlQbVBwFF50mMC7ol0irbmiGiPVRR2Z/gAM+RFHwYOSZNHqTwCcQCvnmJwCl/QmlJnAU6gElj59oUxQklp9gyrcIIzLFhAlJJWpCo0GMNNYN5PIyI2ra/yCAuisKIV6orQJCUhiG29qAN0t1YrZARwd28qS5yuOIE/f87pQx8hHqKcILhrIp+Zh9BSvqoqYhFwQ3+trszBFpl1cYr8BWwHrxUycIFGczog2OuBX+9argFrgZpi/gPgqSvPHgBulNXsVm1IT2B4XkXwldyRDKGvdw3c4EW2btYheNf2WnID+xulVbYbwLWaazcfIq/gXUwA+IGnF5mSwf29kv6ER3whEp/U5yPCbk2L1BMMXxHvlyoZIosWDNWr6SFCvF8aVsJrPQLTP6oJepGOeL80qhlhjvjqgeqhMXsUwzQmwSipNpj+VUtQiHCAeUETsUWXMdQDtbNGPqc4htYCEZUmsHX9XSXB8FXXUQflRWQ6xA2D0PVI4cZM7x9ShBofokqlWqKmeqAuDV5GSBEmsTc8wc+g6/pAFUFf6CjGkmppmr9ETvQQQoxU2VM9+Xy413OX0AbAG3RlS9EP0CLUjBhRpDlDCFEPlNSFP9GrMA1qMFsWGRJdelUR2kzROprusYH7Ea8QPlFXEdoMA7SOpqdARuiHpHr6Sj+h+nuqE0zeGvVW+Iek9pS8+r0I8DoqsCJhqMQp/qCSiitWiFJdDmIpBtS58IBEhJpGw1BQpM6FjwHFKtTIGCZpFG14+mdKoqSCIck6FCB2GD6NnSGzNFoixFdKIf6dosOZDCsKf5hCrMRvOoIhhbdPMSKIac4gTRT/YDPfC0RMg49LzxgQmlOfTIQiLkXnFlcIIVLN+UMXL64wPvD54RUDssBmHODTpjNEfojN8XMgi04p0qYzRI6PrdPkkFSlKDYUKTLfC8w5ttZWgE5ibJL6E5UIk1obsl5awICknvE+pRNhUi/F1bzvoBPoaaKjZCJMat64fYs7CCFOv3AE3/A10jySRmE6S6NlpcVPDMFFhK+R5mH2kPuH90iqUqhc+GtKKsJ0/xC1B/yAtCoFj0/jRISEL5TuAaP28R+RVE+n0MLbT0Cro9k+PqoX4xFp9RS4p3hMrAyhjp57MTD9NGVI9HT6D0IwKQGT6uilh5ZWhmc9BfiMt4Bgr+kOWeMdoq+tHCnFf23PCmUSJNXRS18bojexHHZKcdDOop7SNUgXrqU49yZSxt4ZkqXY0vMfAgUEL/2lpJFphoRi1ObgpZ9JkHYR3jrtFVzN0TZV9F5VELz0eROWam4YtKxofBHm9Vdce/UJ0/wbpu0C8D2yu6sU1/MW1D4/Rb/dvncY0BPMTSQBzvKRofVBhS8F73CbSII4ql6F1kfY6X1WvkebOPgWsO2WBBFnfyqRO3+IOUNa8fD2UwjAIzAqkZ9NB51iVgXQjHTgyKTql8jP66BeBKAZg5gjv2UomALUefySZ8OK+9AJ1BUonMen22NL4ELPr8OHYJTgbqgMZi7Gw6PBIwg8jZDi3YklzGyTOxgavAHsxaWjeDfbhM7pYwgKigYVxYcjWYgZQwWYI9ykE6JbCMuG0sGPohaeC7pCp4AdybcumUeCmPV1hYG+viN9E4r7avnjmxBEbs6E5khpOMLbvbJpwtiSm2nSTcQ6mcik3C2buAKfm5jy6y8phyl5yz6KY3nYCC/XGNwk5ZdxNB38MIUioIOJTWujZmLbaQS9w7NifikkOBX0JnN1R9bDg8sAd85WzaBtnb4YnG1Oqk/k+weNmS1JVg+DbhHb265jfhzpjyCUIdyPrDb3EUsGNzcVom2y1VLxPfVFvJw2VuN7z2U3QDSpZgjdnMy7mLxzB+8YN1uU0mmjtT7RcPq7Uze6WYY3sShrzau8hCJPohK/oHJIYhP4a0eurjWTLKSTUlb7LkaZ1OMovXe25n4LWYqhctZsS+yrVa3ujhJpntj8BmPF8Ktj1gZzKmUeg+qmbyRk4WWDu4KkxuZXUPRZtZo1GpgjvbOr38WQPTmGsgSh0Z1d0kcMIsKDMSDMZS6bNTwOUXV3np22WPx5qkeMA8l+f9O78yrvP0w7gfTp4HlecfEVSbpSmt9/WDkV9UyR/Lho4/eKprK2m+Z3WFbvAmUU9SBWRkKGz6xvqopgm3tIq7v5zhSj9+6Ti/BfJCXY7i7Z6gtrzxSnr2oHJD9i+TqVEtScluah+k5n/SLGLlNg//0swEqCbe90lt3LPTj/VvDdVaK4+A7OAqxsXmx/L7fseuwLxWnQTYSzvPKrJAi5W112PbZ9+cFIV3m3RYbT9KKg1a4euO284JUR7pWiWI5qneNpcOVX3V5rc+B6kbXWDnIc1clxrt/4STr74COpqw1qXoziLX5UxKqLZXTjJyPY3ozeMJYF8oMcx+iTOgTwv4Nm/DQLpUNzWTJm5zhOgy9CZV3M32/2U7YCBRgyK99LN6SM3FtMoyimCQKOf4Moz0/aW8vQHmsp33PLiTERpP6JJXn8jgr0apqjGUEBsIZikaMeBdE3eMPm5XQnvdrudgqCdYr6wFGoa/C1fGtrXRfHz/d7erXN7XgVzSAtjZRxTNZk9HU4NrWv4SkW7KK7h9Q379OV/qROI4N9T1KfCllGfz5PviyrCYc/8VfwILuEXv0uE85NFDGUlCgrBXkRZhD9+/u5Px3f/PDlZbF4eQlDfzieL+M/74JbNH1k1+hwid20sNYMYaM92EdBXsSZMI2CK5K/yqk1FF+yjUkcYzTtqDMqSDZGI3oiXdrSJ6e7po1vVZKkoycSXiW3Si6bt2rYAFEOWvQiWIo2+oaNewVSls1lOWgsuxQGJ7UxebxIN18raMp5CnJtO4L4SGXR/QDr/RRam+JKS8BoTS17lKW4jvlm0J8CawPXUF7E9D7ojw03B5t1sfM1NJ8lRtfsaE/Iiyk6sVvDtuLuti79rYLz3zXgW9VXaRQxhza3AuH2O2+S8NaWgkPuFTC6VNAbwl1HHA1r94ReyBT+pAOOBpt0uwDvOG6YWo4G2zyTX8pxZqmzOa61eza/BOGaVe9SIWDz/vpZ6+8e3mlL7jxctp0/u1u3AD/mrbJHOQzuxL9BPYvwjrvm7fRyetbm+KvEd8NivGMO4IzLDbbrsM34ea3yDeANY63f5vhHXnhmX4t/q/QKCOczk/FWx7INlzNn9oxjHGCE4/WE97lZ0eaY00vDdPp8tB7/n9hdER73HyPTYpybrmHkyNriL9fknDE+mu0b7+D8VizCdJditpmMVsk9BavVaLKZxcuf8TDswKb8B2WX/qjEWMW+AAAAAElFTkSuQmCC"
                alt="profile"
              />
              <h4 className="col-10">{post.title}</h4>
            </div>
            <hr />
            <Card.Img
              variant="top"
              src="https://static.vecteezy.com/system/resources/thumbnails/004/228/659/small/trendy-social-media-post-collection-template-design-free-vector.jpg"
            />
            <p className="text-center">{post.body}</p>
          </Card.Header>
          <Card.Body>
            <div className="d-flex justify-content-around">
              <span
                class="iconify"
                data-icon="ant-design:like-outlined"
                data-width="36"
                data-height="36"
              ></span>
              <span
                class="iconify"
                data-icon="ci:share"
                data-width="36"
                data-height="36"
              ></span>
              <div className="d-inline-flex align-items-center">
                <strong className="d-inline-block" style={{ fontSize: 27 }}>
                  {comments.length}&nbsp;
                </strong>
                <span
                  class="iconify"
                  data-icon="ant-design:comment-outlined"
                  data-width="36"
                  data-height="36"
                ></span>
              </div>
            </div>
            <hr />
            <h4>Comments:</h4>
            <ListGroup className="list-group-flush">
              {comments &&
                comments.map((comment, index) => {
                  return (
                    <React.Fragment key={index}>
                      <ListGroupItem>
                        <Card.Title>{comment.name}</Card.Title>
                        <footer className="mt-1 blockquote-footer">
                          {comment.email}
                        </footer>
                        <Card.Text>{comment.body}</Card.Text>
                      </ListGroupItem>
                      <br />
                    </React.Fragment>
                  );
                })}
            </ListGroup>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default PostDetails;
