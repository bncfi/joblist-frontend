import Job from './Job'

const Jobslist = ({ jobs }) => {
  return (
    <div>
      {jobs.map((job) => (
        <Job key={job.id} jobinfo={job} />
      ))}
    </div>
  )
}

export default Jobslist
