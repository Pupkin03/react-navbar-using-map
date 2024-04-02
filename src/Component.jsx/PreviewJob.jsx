// import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";

const PreviewJob = () => { 
  // const params = useParams()
  const { jobId } = useParams();
  const navigate = useNavigate();
  const openings = useSelector((state) => state.career.openings);

  const jobOpening = openings.find((opening) => opening.job_name === jobId);


  if (!jobOpening) {
    return (
      <div>
        <h4>No job found</h4>
        <button onClick={() => navigate(-1)}>Go back to store</button>
      </div>
    );
  }


  return (
    <div>
      <h3>{jobOpening.job_name}</h3>
      <p>Salary: {jobOpening.salary}</p>
      <p>Job description: {jobOpening.description}</p>
      <button onClick={() => navigate(-1)}>Go back to store</button>
    </div>
  );
};

export default PreviewJob;
