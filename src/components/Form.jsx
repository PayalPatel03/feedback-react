import React, { useState,useRef } from "react";
import { FaStar } from "react-icons/fa";

function Form() {
  
  const [hover, setHover] = useState([0, 0]);
  const [star, setStar] = useState([0, 0]);
    const formRef = useRef();

  const handleOtherSub = () => {
    if (formRef.current) {
      formRef.current.requestSubmit(); 
    }
  };

  const handleHover = (rowIndex, starIndex) => {
    const newHover = [...hover];
    newHover[rowIndex] = starIndex;
    setHover(newHover);
  };

  const handleLeave = (rowIndex) => {
    const newHover = [...hover];
    newHover[rowIndex] = 0;
    setHover(newHover);
  };
  const handleDown = (rowIndex, starIndex) => {
    const newStar = [...star];
    newStar[rowIndex] = starIndex;
    setStar(newStar);
  };
   const handleSubmit = (e) => {
    e.preventDefault(); 
    alert("Feedback submitted successfully!");
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <form method="post" ref={formRef} onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Student ID
                </label>
                <input type="number" name="" className="form-control" id="" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Student E-mail
                </label>
                <input type="email" name="" className="form-control" id="" />
              </div>
              <div className="mb-3">
                <label htmlFor="course" className="form-label">
                  Course
                </label>
                <input type="text" name="" className="form-control" id="" />
              </div>
              <div className="mb-3">
                <label htmlFor="i-name" className="form-label">
                  Instructor Name
                </label>
                <input type="text" name="" className="form-control" id="" />
              </div>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="feedback" className="form-label">
                Instructor Feedback
              </label>
              <table className="table table-warning ">
                <thead>
                  <tr>
                    <th>Questions</th>
                    <th>Feedback</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    "Receive syllabus & instructions at first",
                    "Course objectives stated clearly",
                    "Material presented in class matches syllabus",
                    "Instructor responded questions",
                    "Instructor demonstrates adequate knowledge of course",
                    "Class time is used efficient",
                    "Instructors overall teaching"
                  ].map((question, rowIndex) => (
                    <tr key={rowIndex}>
                      <td>{question}</td>
                      <td>
                        {[...Array(5)].map((_, index) => (
                          <FaStar
                            key={index}
                            onMouseOver={() => handleHover(rowIndex, index + 1)}
                            onMouseLeave={() => handleLeave(rowIndex)}
                            onClick={() => handleDown(rowIndex, index + 1)}
                            color={
                              hover[rowIndex] > index || star[rowIndex] > index
                                ? "gold"
                                : "grey"
                            }
                            size={"20px"}
                            style={{ cursor: "pointer" }}
                          />
                        ))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <button type="submit" onClick={handleOtherSub} className="  btn btn-warning">Submit</button>
      </div>
    </>
  );
}

export default Form;