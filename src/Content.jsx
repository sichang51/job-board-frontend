import { Modal } from "./Modal";

export function Content() {
  const [isJobsShowVisible, setIsJobsShowVisible] = useState(false);
  const [currentJob, setCurrentJob] = useState({});

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
  );
}
