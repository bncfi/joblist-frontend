import Job from './Job'
import Jobsliststyles from './Jobslist.module.css'

const Jobslist = ({ filteredJobs, searchTerms }) => {
  return (
    <div className={Jobsliststyles.container}>
      <h2>Haulla löytyi {filteredJobs.length} tulosta.</h2>
      {filteredJobs.map((job) => (
        <Job key={job.id} jobinfo={job} />
      ))}
    </div>
  )
}

export default Jobslist
