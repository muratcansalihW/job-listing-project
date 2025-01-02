import "./App.css";
import AdminPanel from "./components/AdminPanel";
import JobList from "./components/JobList";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [jobs, setJobs] = useState(
    JSON.parse(localStorage.getItem("jobs")) || []
  );

  const addJob = (newJob) => {
    const updatedJobs = [...jobs, newJob];
    setJobs(updatedJobs);
    localStorage.setItem("jobs", JSON.stringify(updatedJobs));
  };

  return (
    <div className="app">
      <h1>İş İlanı Paylaşım Platformu</h1>
      <AdminPanel addJob={addJob} />
      <JobList jobs={jobs} />
    </div>
  );
};

export default App;
