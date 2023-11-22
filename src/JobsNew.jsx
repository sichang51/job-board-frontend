export function JobsNew() {
  return (
    <div>
      <h1>New Job</h1>
      <form>
        <div>
          Company ID: <input name="company_id" type="text" />
        </div>
        <div>
          Job Title: <input name="title" type="text" />
        </div>
        <div>
          Job Description: <input name="description" type="text" />
        </div>
        <div>
          Url: <input name="url" type="text" />
        </div>
        <div>
          Location: <input name="location" type="text" />
        </div>
        <div>
          Active: <input name="active" type="text" />
        </div>
        <div>
          Salary Range: <input name="salary_range" type="text" />
        </div>
        <button type="submit">Create job</button>
      </form>
    </div>
  );
}
