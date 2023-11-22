export function JobsIndex(props) {
  return (
    <div>
      <h1>All Jobs</h1>
      {props.jobs.map((job) => (
        <div key={job.id}>
          <h2>{job.title}</h2>
          <h3>{job.location}</h3>
          <h3>Salary: {job.salary_range}</h3>
          <p>{job.description}</p>
          <button onClick={() => props.onShowJob(job)}>More Info</button>
        </div>
      ))}
    </div>
  );
}
