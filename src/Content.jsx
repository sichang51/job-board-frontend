import { JobsIndex } from "./JobsIndex";
import axios from "axios";
import { useState, useEffect } from "react";
import { JobsNew } from "./JobsNew";

export function Content() {
  const [jobs, setJobs] = useState([]);

  const handleIndexJobs = () => {
    console.log("handleIndexJobs");
    axios.get("http://localhost:3000/jobs.json").then((response) => {
      console.log(response.data);
      setJobs(response.data);
    });
  };

  const handleCreateJob = (params, successCallback) => {
    console.log("handleCreateJob", params);
    axios.post("http://localhost:3000/jobs.json", params).then((response) => {
      setJobs([...jobs, response.data]);
      successCallback;
    });
  };

  useEffect(handleIndexJobs, []);

  return (
    <div>
      <JobsNew onCreateJob={handleCreateJob} />
      <JobsIndex jobs={jobs} />
    </div>
  );
}
