import { JobsIndex } from "./JobsIndex";
import axios from "axios";
import { useState, useEffect } from "react";
import { Modal } from "./Modal";

export function Content() {
  const [jobs, setJobs] = useState([]);
  const [isJobsShowVisible, setIsJobsShowVisible] = useState(false);
  const [currentJob, setCurrentJob] = useState({});

  const handleIndexJobs = () => {
    console.log("handleIndexJobs");
    axios.get("http://localhost:3000/jobs.json").then((response) => {
      console.log(response.data);
      setJobs(response.data);
    });
  };

  const handleShowJob = (job) => {
    console.log("handleShowJob", job);
    setIsJobsShowVisible(true);
    setCurrentJob(Job);

    const handleClose = () => {
      console.log("handleClose");
      setIsJobsShowVisible(false);
    };
  };

  return (
    <Modal show={true}>
      <h1>Test</h1>
    </Modal>
  



  useEffect(handleIndexJobs, []);

  return (
    <div>
      <JobsIndex jobs={jobs} />
    </div>
  );
}
