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
      <button onClick={handleClick}>Destroy Job</button>
      <form onSubmit={handleSubmit}>
        <div>
          Company ID: <input defaultValue={props.job.company_id} name="Company ID" type="text" />
        </div>
        <div>
          Company Name: <input defaultValue={props.job.company.name} name="Company Name" type="text" />
        </div>
        <div>
          Title: <input defaultValue={props.job.title} name="Title" type="text" />
        </div>
        <div>
          Description: <input defaultValue={props.job.description} name="Description" type="text" />
        </div>
        <div>
          URL: <input defaultValue={props.job.url} name="URL" type="text" />
        </div>
        <div>
          Active: <input defaultValue={props.job.active} name="Active" type="text" />
        </div>
        <button type="submit">Update Job</button>
      </form>
    </div>
  );
}
