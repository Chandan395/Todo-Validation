import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1234/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const delUser = (id) => {
    // if (window.confirm("Are you sure you want to delete this user?")) {
    //   axios
    //     .delete(`http://localhost:1234/users/${id}`)
    //     .then(() => {
    //       // remove user from UI without reloading
    //       setData(data.filter((user) => user.id !== id));
    //     })
    //     .catch((err) => console.log(err));
    // }

    if (window.confirm("Are you sure you want to delete this user?")) {
      let url = `http://localhost:1234/users/${id}`;
      let postData = { method: "DELETE" }
      fetch(url, postData)
        .then(e => e.json())
        .then(()=>window.location.reload())
    }
  };

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="text-2xl fw-bold text-primary">
          Available Users <span className="badge bg-secondary">{data.length}</span>
        </h1>
        <Link to="/create" className="btn btn-info shadow-sm rounded-pill">
          + Add New User
        </Link>
      </div>

      {/* Table Section */}
      <div className="table-responsive shadow rounded-3">
        <table className="table table-bordered table-hover align-middle">
          <thead className="table-dark">
            <tr>
              <th style={{ width: "25%" }}>Name</th>
              <th style={{ width: "30%" }}>Email</th>
              <th style={{ width: "15%" }}>Age</th>
              <th className="text-center" style={{ width: "25%" }}>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map(({ id, name, email, age }) => (
              <tr key={id}>
                <td className="fw-semibold">{name}</td>
                <td>{email}</td>
                <td>
                  <span className="badge bg-light text-dark px-3 py-2 shadow-sm">
                    {age}
                  </span>
                </td>
                <td className="text-center">
                  <Link to={`/read/${id}`} className="btn btn-sm btn-success me-2 shadow-sm rounded-pill">
                    Read
                  </Link>
                  <Link
                    to={`/update/${id}`}
                    className="btn btn-sm btn-primary me-2 shadow-sm rounded-pill"
                  >
                    Edit
                  </Link>
                  <button className="btn btn-sm btn-danger shadow-sm rounded-pill"
                    //  onClick={() => delUser(id)}
                    // 
                    onClick={delUser.bind(this, id, name)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {data.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center py-4 text-muted">
                  No users found. Add a new one!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
