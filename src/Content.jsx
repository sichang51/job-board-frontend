import { JobsIndex } from "./JobsIndex";
import axios from "axios";
import { useState, useEffect } from "react";
import { JobsShow } from "./JobsShow";
import { Modal } from "./Modal";
import { JobsNew } from "./JobsNew";

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
    setCurrentJob(job);
  };

  const handleUpdateJob = (id, params, successCallback) => {
    console.log("handleUpdateJob", params);
    axios.patch(`http://localhost:3000/jobs/${id}.json`, params).then((response) => {
      setJobs(
        jobs.map((job) => {
          if (job.id === response.data.id) {
            return response.data;
          } else {
            return job;
          }
        })
      );
      successCallback();
      handleClose();
    });
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsJobsShowVisible(false);
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
      <JobsIndex jobs={jobs} onShowJob={handleShowJob} />
      <Modal show={isJobsShowVisible} onClose={handleClose}>
        <h1>Test</h1>
        <JobsShow job={currentJob} onUpdateJob={handleUpdateJob} />
      </Modal>
      <JobsNew onCreateJob={handleCreateJob} />
    </div>
  );
}
