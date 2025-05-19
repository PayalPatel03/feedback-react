import React from "react";
import Form from "./components/Form";
import './App.css'

function App() {
  return (
    <>
     
    <div className="container">
      <div className="content mt-4">
        <h1 className="text-center"> Your feedback matters.</h1>
        <p className="text-center"> Please provide your feedback so that we can continue to improve.</p>
      </div>

    </div>
       <Form />
    </>
  );
}

export default App;
