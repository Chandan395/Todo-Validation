import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
useParams
Link
const Update = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [age, setAge] = useState('')



  const navigate = useNavigate()

  const { id } = useParams()

  useEffect(() => {
    axios
      .get(`http://localhost:1234/users/${id}`)
      .then((res) => {
        setName(res.data.name)
        setEmail(res.data.email)
        setAge(res.data.age)
      })
      .catch((err) => console.log(err));
  }, [id]);

  const update = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:1234/users/${id}`, {
      name,
      email,
      age
    })
      .then((res) => {
        console.log("User updated:", res.data);
        navigate("/"); // redirect back to home
      })
      .catch((err) => console.log(err));
  };



  return (
    <div className='mt-5'>
      <Link to='/'><h1>Go Back To Home</h1></Link>
      <h1 className='text-center'>Update the user</h1>
      {/* Form Section */}
      <div className="row mb-5">
        <div className="col-lg-3"></div>
        <div className="col-lg-6">
          <div className="card shadow p-4 rounded-3">
            <form onSubmit={update}>
              <div className="mb-3">
                <label className="form-label fw-semibold">Enter Your Name</label>
                <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />

              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Enter Your Email</label>
                <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />

              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Enter Your Age</label>
                <input type="number" className="form-control" value={age} onChange={(e) => setAge(e.target.value)} />
              </div>

              <button className="btn btn-info w-100 mt-2">Update </button>
            </form>
          </div>
        </div>
        <div className="col-lg-3"></div>
      </div>
    </div>
  )
}

export default Update;
