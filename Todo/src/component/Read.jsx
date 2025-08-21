import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:1234/users/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="d-flex w-100 justify-content-center align-items-center bg-light py-5">
      <div className="w-50 border bg-white shadow px-5 pt-4 pb-5 rounded">
        <h3 className="mb-4 text-primary text-center">Details of User</h3>

        <div className="mb-3">
          <strong>Name: </strong> {data.name}
        </div>
        <div className="mb-3">
          <strong>Email: </strong> {data.email}
        </div>
        <div className="mb-3">
          <strong>Age: </strong> {data.age}
        </div>

        <div className="d-flex justify-content-between mt-4">
          {/* Navigate to Edit Page */}
          <Link to={`/update/${id}`} className="btn btn-sm btn-success">
            Edit
          </Link>

          {/* Navigate Back Home */}
          <Link to="/" className="btn btn-sm btn-info">
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Read;
