import React from "react";

const JobCard = ({ logo, company, description }) => (
  <div className="job-card">
    <img src={logo} alt={`${company} logo`} className="job-logo" />
    <h3>{company}</h3>
    <p>{description}</p>
  </div>
);

export default JobCard;
