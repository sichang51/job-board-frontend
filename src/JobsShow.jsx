export function JobsShow(props) {
  const handleClick = () => {
    props.onDestroyJob(props.job);
  };

  return (
    <div>
      <h1>Job Info</h1>
      <p>Company ID: {props.job.company_id}</p>
      <p>Title: {props.job.title}</p>
      <p>Description: {props.job.description}</p>
      <p>URL: {props.job.url}</p>
      <p>Location: {props.job.location}</p>
      <p>Active: {props.job.active}</p>
      <p>Salary Range: {props.job.salary_range}</p>
      <button onClick={handleClick}>Destroy Job</button>
    </div>
  );
}
