export function JobsIndex(props) {
  console.log(props);
  return (
    <div>
      <h1>All Jobs</h1>
      {props.myJobs.map((job) => (
        <div key={job.id}>
          <h2>{job.title}</h2>
          <h2>{job.company.name}</h2>
          <h3>{job.location}</h3>
          <h4>Salary: {job.salary_range}</h4>
          <p>{job.description}</p>
          <button className="btn btn-primary" onClick={() => props.onShowJob(job)}>
            More Info
          </button>
        </div>
      ))}
    </div>
  );
}
