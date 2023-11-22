import { JobsIndex } from "./JobsIndex";
import axios from "axios";
import { useState, useEffect } from "react";

export function Content() {
  const [jobs, setJobs] = useState([]);

  const handleIndexJobs = () => {
    console.log("handleIndexJobs");
    axios.get("http://localhost:3000/jobs.json").then((response) => {
      console.log(response.data);
      setJobs(response.data);
    });
  };

  useEffect(handleIndexJobs, []);

  return (
    <div>
      <JobsIndex jobs={jobs} />
    </div>
  );
}
