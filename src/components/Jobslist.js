import Job from './Job'

const Jobslist = ({ filteredJobs, searchTerms }) => {
  return (
    <div>
      <h2>Haulla löytyi {filteredJobs.length} tulosta.</h2>
      {filteredJobs.map((job) => (
        <Job key={job.id} jobinfo={job} />
      ))}
    </div>
  )
}

export default Jobslist
