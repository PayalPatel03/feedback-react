import React from 'react'
import './App.css'
import Form from './components/Form'

function App() {
  return (
    <>
    <div className="container back mt-2">
      <div className="row">
        <div className="col-md-6">
          <h2 className='mt-5 text-white ms-5'>COURSE INSTRUCTOR <br /> FEEDBACK</h2>
          <h5 className='ms-5 text-white'>Fill out the form with honesty</h5>
        </div>
        <div className="col-md-6">
          <img height={300} src="https://www.jotform.com/uploads/ugurg/form_files/course2.63988b568a7683.62616394.png" alt="" />
        </div>
      </div>
    </div>
    <Form/>
      
    </>
  )
}

export default App