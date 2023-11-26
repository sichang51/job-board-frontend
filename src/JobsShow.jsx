export function JobsShow(props) {
  const handleClick = () => {
    props.onDestroyJob(props.job);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateJob(props.job.id, params, () => event.target.reset());
  };

  return (
    <div>
      <h1>Job Info</h1>
      <p>Company ID: {props.job.company_id}</p>
      <p>Company Name: {props.job.company.name}</p>
      <p>Title: {props.job.title}</p>
      <p>Description: {props.job.description}</p>
      <p>URL: {props.job.url}</p>
      <p>Location: {props.job.location}</p>
      <p>Active: {props.job.active}</p>
      <p>Salary Range: {props.job.salary_range}</p>

      <form onSubmit={handleSubmit}>
        <div>
          Company ID: <input defaultValue={props.job.company_id} name="company_id" type="text" />
        </div>
        <div>
          Title: <input defaultValue={props.job.title} name="title" type="text" />
        </div>
        <div>
          Description: <input defaultValue={props.job.description} name="description" type="text" />
        </div>
        <div>
          URL: <input defaultValue={props.job.url} name="url" type="text" />
        </div>
        <br></br>
        <button type="submit" className="btn btn-primary">
          Update Job
        </button>
      </form>
      <br></br>
      <button onClick={handleClick} className="btn btn-danger">
        Destroy Job
      </button>
    </div>
  );
}
