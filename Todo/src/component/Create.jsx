
import axios from 'axios'

import { useState } from 'react'
import { Link } from 'react-router-dom'


const Create = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [age, setAge] = useState('')



  const submit = (e) => {
    e.preventDefault();
    const url = 'http://localhost:1234/users';
    let postData = {
      headers: { 'Content-Type': 'application/json' },
      method: "POST",
      body: JSON.stringify({ name, age, email })
    }
    fetch(url, postData)
      .then(res => res.text())
    setAge('');
    setEmail('');
    setName('')
    // axios.post(url, { name, email, age })
    //   .then(res => res.data)
    // navigate('/')
  }

  return (
    <div className='mt-5'>
      <Link to='/'><h1>Go Back To Home</h1></Link>
      <h1 className='text-center'>Enter Your Deatils</h1>
      {/* Form Section */}
      <div className="row mb-5">
        <div className="col-lg-3"></div>
        <div className="col-lg-6">
          <div className="card shadow p-4 rounded-3">
            <form onSubmit={submit}>
              <div className="mb-3">
                <label className="form-label fw-semibold">Enter Your Name</label>
                <input type="text" className="form-control" required value={name}
                  onChange={(e) => setName(e.target.value)} />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Enter Your Email</label>
                <input type="email" className="form-control" required value={email}
                  onChange={(e) => setEmail(e.target.value)} />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Enter Your Age</label>
                <input type="number" className="form-control" required value={age} onChange={(e) => setAge(e.target.value)} />
              </div>

              <button className="btn btn-info w-100 mt-2">Submit</button>
            </form>
          </div>
        </div>
        <div className="col-lg-3"></div>
      </div>
    </div>
  )
}

export default Create
