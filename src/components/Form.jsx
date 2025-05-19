import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

function Form() {
  const [hover, setHover] = useState(0);
  const [star, setStar] = useState(0);
  const [feedback, setFeedback] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [list, setList] = useState([]);

  const handleHover = (index) => {
    setHover(index);
    if (star != 0) {
      setStar(0);
    }
  };

  const handleLeave = (index) => {
    setHover(0);
    setStar(index);
  };

  const handleDown = (index) => {
    setStar(index);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback({ ...feedback, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setList([...list, { ...feedback, star: star }]);
    setFeedback({ name: "", email: "", message: "" });
    setStar(0);
  };
  console.log(list);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <form method="post" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control mt-2"
                  name="name"
                  id="name"
                  value={feedback.name}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control mt-2"
                  name="email"
                  id="email"
                  value={feedback.email}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label>Rating:</label> <br />
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    onMouseOver={() => handleHover(index + 1)}
                    onMouseLeave={() => handleLeave(index + 1)}
                    onClick={() => handleDown(index + 1)}
                    color={hover > index || star > index ? "gold" : "gray"}
                    size={"20px"}
                    style={{ cursor: "pointer" }}
                  />
                ))}
              </div>

              <div className="mb-3">
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-control mt-2"
                  id="message"
                  name="message"
                  value={feedback.message}
                  onChange={handleChange}
                />
              </div>
              <button className="btn" type="submit">
                Submit
              </button>
            </form>
           
          </div>
        </div>
        <div className="row">
            <div className="col-md-8 mx-auto">
                 <table className="table table-stripped">
              <thead>
                <tr>
                  <th>Sr.No</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Rating</th>
                  <th>Message</th>
                </tr>
              </thead>
              <tbody>
                {list.map((val, index) => (
                  // const {name,email,message}=val;
                  <tr>
                    <td>{index + 1}</td>
                    <td>{val.name}</td>
                    <td>{val.email}</td>
                    <td>
                      {[...Array(5).keys()].map((_, index) => (
                        <FaStar
                          color={val.star > index ? "gold" : "gray"}
                          size={"20px"}
                        />
                      ))}
                    </td>
                    <td>{val.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
        </div>
      </div>
    </>
  );
}

export default Form;
