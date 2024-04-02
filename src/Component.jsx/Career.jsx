// import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";



  const Career = () => { 
  const navigate = useNavigate();
  const openings = useSelector((state) => state.career.openings);
  console.log(openings);


  return (
    <div
      style={{
        padding: "24px",
        display: "flex",
        flexWrap: "wrap",
        gap: "48px",
      }}
    >
      {openings.map((o, i) => (
        <div
          key={i}
          onClick={() => navigate(`/career/preview-job/${o.job_name}`)}
          style={{
            borderRadius: "10px",
            border: "solid #eaeaea",
            height: "100px",
            padding: "48px 24px",
            cursor: "pointer",
            width: "300px",
          }}
        >
          <p>{o.job_name}</p>
        </div>
      ))}
    </div>
  );
};



export default Career; 

