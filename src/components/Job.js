import Jobstyles from './Job.module.css'

const Job = ({ jobinfo, setJobState }) => {
  const dateParser = (dateString) => {
    const dateWithDash = dateString.split(' ', 1)
    const dateWithoutDash = dateWithDash[0].split('-')
    return (
      dateWithoutDash[2] + '.' + dateWithoutDash[1] + '.' + dateWithoutDash[0]
    )
  }

  const jobDetailsHandle = (jobDetails) => {
    setJobState(jobDetails)
  }

  return (
    <div className={Jobstyles.jobDiv} onClick={() => jobDetailsHandle(jobinfo)}>
      <div className={Jobstyles.jobHeading}>{jobinfo.heading}</div>
      <div className={Jobstyles.jobDetails}>
        {jobinfo.company_name}, julkaistu {dateParser(jobinfo.date_posted)}
      </div>
    </div>
  )
}

export default Job
